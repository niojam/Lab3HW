import React, { useEffect, useRef, useState } from "react";
import { RouteComponentProps } from "react-router-dom";

import { Button, Col, message, Modal, Row, Spin } from "antd";
import { GeneralHeader, ImageUploader } from "../../components";
import GeneralInput from "../../components/Input/GeneralInput";
import "./EditQuiz.scss";
import { useMutation } from "react-query";
import {
  addQuestion,
  createQuiz,
  deleteQuestion,
  GET_IMAGE_BY_ID_URL,
  getQuiz,
  IMAGE_UPLOAD_URL,
  updateQuestion,
} from "../../common/client/BackOfficeApplicationClient";
import { Quiz, QuizQuestion } from "../../common/type/Types";
import { CheckOutlined, PlusOutlined } from "@ant-design/icons";
import { DraggableQuestionList, EditQuizQuestion } from "../../containers";

interface EditQuizRouterProps {
  quizId: string;
}

type EditQuizProps = RouteComponentProps<EditQuizRouterProps>;

const EditQuiz = (props: EditQuizProps) => {
  const { quizId } = props.match.params;
  const [quiz, setQuiz] = useState<Quiz>();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const questionToModify = useRef<QuizQuestion>();

  const deleteQuestionMutation = useMutation(deleteQuestion);
  const addQuestionMutation = useMutation(addQuestion);
  const updateQuestionMutation = useMutation(updateQuestion);
  const createQuizMutation = useMutation(createQuiz);

  useEffect(() => {
    if (quizId) {
      // Get existing by id
      getQuiz(quizId).then((result) => {
        setQuiz(result.data);
      });
    } else {
      // new Quiz
      createQuizMutation.mutate({ questions: [] as QuizQuestion[] } as Quiz, {
        onSuccess: (result) => {
          setQuiz(result.data);
        },
      });
    }
  }, []);

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
      setQuiz((prevState) => ({ ...prevState, imageId: response } as Quiz));
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const handleNameChange = (input: any) => {
    const { value } = input.currentTarget;
    setQuiz((prevState) => ({ ...prevState, name: value } as Quiz));
  };

  const handleModifyQuestion = (question: QuizQuestion | undefined) => {
    questionToModify.current = question;
    setIsModalVisible(true);
  };

  const updateQuizQuestion = (question: QuizQuestion) => {
    if (quiz?.id) {
      updateQuestionMutation.mutate(
        { question: question, quizId: quiz?.id },
        {
          onSuccess: (result) => {
            const questions = quiz?.questions.map((quizQuestion) => {
              return quizQuestion.id === question.id
                ? result.data
                : quizQuestion;
            });

            setQuiz(
              (prevState) => ({ ...prevState, questions: questions } as Quiz)
            );
            setIsModalVisible(false);
          },
        }
      );
    }
  };

  const addNewQuestion = (question: QuizQuestion) => {
    if (quiz?.id) {
      addQuestionMutation.mutate(
        { question: question, quizId: quiz?.id },
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
            setIsModalVisible(false);
          },
        }
      );
    }
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
          message.success(`Quiz saved successfully.`);
        },
      });
    }
  };

  const handleDragAndDropQuestionOrder = (result: any) => {
    const reorderQuestions = (
      list: QuizQuestion[],
      startIndex: number,
      endIndex: number
    ): QuizQuestion[] => {
      const result = Array.from(list);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);

      return result;
    };

    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    if (quiz?.questions) {
      const reorderedQuestions = reorderQuestions(
        quiz?.questions,
        result.source.index,
        result.destination.index
      );
      setQuiz(
        (prevState) => ({ ...prevState, questions: reorderedQuestions } as Quiz)
      );
    }
  };

  return (
    <div className={"scrollY"}>
      {quiz ? (
        <>
          <Row className={"my-5"} justify="space-around">
            <Col className={"mt-5"} xxl={12} xs={16}>
              <GeneralHeader title={"NAME"} />
              <div className="general-input-wrapper">
                <GeneralInput
                  value={quiz.name}
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
                  quiz?.imageId ? GET_IMAGE_BY_ID_URL + quiz.imageId : undefined
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
              <DraggableQuestionList
                handleDragAndDropQuestionOrder={handleDragAndDropQuestionOrder}
                handleModifyQuestion={handleModifyQuestion}
                handleDeleteQuestion={handleDeleteQuestion}
                initialQuestions={quiz.questions}
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
      ) : (
        <Row className={"h-100vh"} justify={"center"} align={"middle"}>
          <Col>
            <Spin size="large" />
          </Col>
        </Row>
      )}
    </div>
  );
};

export default EditQuiz;
