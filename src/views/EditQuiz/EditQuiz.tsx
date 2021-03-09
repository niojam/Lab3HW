import React, { useRef, useState } from "react";
import { RouteComponentProps } from "react-router-dom";

import { Button, Col, message, Modal, Row } from "antd";
import { GeneralHeader, ImageUploader } from "../../components";
import GeneralInput from "../../components/Input/GeneralInput";
import { EditQuizQuestion, QuestionCardList } from "../../containers";
import "./EditQuiz.scss";
import { useMutation, useQuery } from "react-query";
import {
  addQuestion,
  createQuiz,
  deleteQuestion,
  GET_IMAGE_BY_ID_URL,
  getQuiz,
  IMAGE_UPLOAD_URL,
  updateQuestion,
} from "../../common/client/BackOfficeApplicationClient";
import { Quiz, QuizDetails, QuizQuestion } from "../../common/type/Types";
import { CheckOutlined, PlusOutlined } from "@ant-design/icons";

interface EditQuizRouterProps {
  quizId: string;
}

type EditQuizProps = RouteComponentProps<EditQuizRouterProps>;

const EditQuiz = (props: EditQuizProps) => {
  const { quizId } = props.match.params;
  const [quiz, setQuiz] = useState<Quiz>();
  const [quizDetails, setQuizDetails] = useState<QuizDetails>();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const questionToModify = useRef<QuizQuestion>();

  const deleteQuestionMutation = useMutation(deleteQuestion);
  const addQuestionMutation = useMutation(addQuestion);
  const updateQuestionMutation = useMutation(updateQuestion);
  const createQuizMutation = useMutation(createQuiz);

  useQuery(["getQuizData", quizId], () => getQuiz(quizId), {
    refetchOnWindowFocus: false,
    retry: false,
    onSuccess: (result) => {
      const { data } = result;
      setQuiz(data);
      setQuizDetails({
        quizName: data.name,
        quizId: data.id,
      } as QuizDetails);
    },
  });

  const handleDeleteQuestion = (questionId: number) => {
    if (quiz) {
      deleteQuestionMutation.mutate(
        { questionId, quizId },
        {
          onSuccess: () => {
            const questions: QuizQuestion[] = quiz?.questions.filter(
              (question) => {
                return question.id !== questionId;
              }
            );
            setQuiz({ ...quiz, questions: questions });
          },
        }
      );
      const questions: QuizQuestion[] = quiz?.questions.filter((question) => {
        return question.id !== questionId;
      });
      setQuiz({ ...quiz, questions: questions });
    }
  };

  const handleOnUploadChange = (info: any) => {
    const { status, response } = info.file;
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
      setQuizDetails(
        (prevState) => ({ ...prevState, imageId: response } as QuizDetails)
      );
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const handleNameChange = (input: any) => {
    const { value } = input.currentTarget;
    setQuizDetails(
      (prevState) => ({ ...prevState, quizName: value } as QuizDetails)
    );
  };

  const handleModifyQuestion = (question: QuizQuestion | undefined) => {
    questionToModify.current = question;
    setIsModalVisible(true);
  };

  const updateQuizQuestion = (question: QuizQuestion) => {
    updateQuestionMutation.mutate(
      { question: question, quizId: quizId },
      {
        onSuccess: (result) => {
          const questions = quiz?.questions.map((quizQuestion) => {
            return quizQuestion.id === question.id ? result.data : quizQuestion;
          });

          setQuiz(
            (prevState) => ({ ...prevState, questions: questions } as Quiz)
          );
        },
      }
    );
  };

  const addNewQuestion = (question: QuizQuestion) => {
    addQuestionMutation.mutate(
      { question: question, quizId: quizId },
      {
        onSuccess: (result) => {
          let questions: QuizQuestion[] = [];
          if (quiz?.questions) {
            questions = [...quiz?.questions, result.data];
          } else {
            questions.push(result.data);
          }
          setQuiz(
            (prevState) => ({ ...prevState, questions: questions } as Quiz)
          );
        },
      }
    );
  };

  const handleSaveQuestion = (question: QuizQuestion) => {
    questionToModify.current = undefined;
    if (question.id) {
      updateQuizQuestion(question);
    } else {
      addNewQuestion(question);
    }
  };

  const handleQuizUpdate = () => {
    if (quiz) {
      createQuizMutation.mutate(quiz, {
        onSuccess: (result) => {
          setQuiz(result.data);
        },
      });
    }
  };

  return (
    <div className={"scrollY"}>
      {quiz && quizDetails ? (
        <>
          <Row className={"my-5"} justify="space-around">
            <Col className={"mt-5"} xxl={12} xs={16}>
              <GeneralHeader title={"NAME"} />
              <div className="general-input-wrapper">
                <GeneralInput
                  value={quizDetails.quizName}
                  onChange={handleNameChange}
                  placeholder={"Name Your Quiz"}
                />
              </div>
            </Col>
          </Row>
          <Row className={"my-5"} justify="space-around">
            <Col xxl={12} xs={16}>
              <GeneralHeader title={"IMAGE"} />
              <ImageUploader
                className={"edit-quiz--image-uploader"}
                imageUrl={
                  quizDetails?.imageId
                    ? GET_IMAGE_BY_ID_URL + quizDetails.imageId
                    : undefined
                }
                onChange={(info: any) => handleOnUploadChange(info)}
                action={IMAGE_UPLOAD_URL}
                isLoading={false}
              />
            </Col>
          </Row>
          <Row className={"my-5"} justify="space-around">
            <Col className={"mt-5"} xxl={12} xs={16}>
              <GeneralHeader title={"QUESTIONS"} />
              <QuestionCardList
                handleModifyQuestion={handleModifyQuestion}
                handleDeleteQuestion={handleDeleteQuestion}
                questions={quiz.questions}
              />
            </Col>
          </Row>
          <Row justify={"center"}>
            <Col className={"edit-quiz--button-wrapper"} xxl={12} xs={16}>
              <Button
                className={"edit-quiz--button mb-1"}
                onClick={() => handleModifyQuestion(undefined)}
                icon={<PlusOutlined />}
              >
                Add question
              </Button>
              <Button
                onClick={() => handleQuizUpdate()}
                className={"edit-quiz--button mb-4"}
                icon={<CheckOutlined />}
              >
                Save
              </Button>
            </Col>
          </Row>
          <Modal
            width={700}
            title="Question Details"
            visible={isModalVisible}
            onCancel={() => setIsModalVisible((prevState) => !prevState)}
            footer={null}
            destroyOnClose={true}
          >
            <EditQuizQuestion
              quizId={quiz.id}
              question={
                questionToModify.current ??
                (({
                  answers: [],
                } as unknown) as QuizQuestion)
              }
              handleSaveQuestion={handleSaveQuestion}
            />
          </Modal>
        </>
      ) : undefined}
    </div>
  );
};

export default EditQuiz;
