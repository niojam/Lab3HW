import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";

import { Button, Col, message, Row } from "antd";
import { GeneralHeader, ImageUploader } from "../../components";
import GeneralInput from "../../components/Input/GeneralInput";
import { QuestionCardList } from "../../containers";
import "./EditQuiz.scss";
import { useMutation, useQuery } from "react-query";
import {
  deleteQuestion,
  GET_IMAGE_BY_ID_URL,
  getQuiz,
  IMAGE_UPLOAD_URL,
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
  const deleteQuestionMutation = useMutation(deleteQuestion);

  useQuery(["getQuizData", quizId], () => getQuiz(quizId), {
    refetchOnWindowFocus: false,
    retry: false,
    onSuccess: (result) => {
      const { data } = result;
      setQuiz(data);
      setQuizDetails({
        quizName: data.name,
        quizId: data.id,
        imageId: 11,
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

  return (
    <div className={"scrollY"}>
      {quiz ? (
        <>
          <Row className={"my-5"} justify="space-around">
            <Col className={"mt-5"} span={16}>
              <GeneralHeader title={"NAME"} />
              <div className="general-input-wrapper">
                <GeneralInput placeholder={"Name Your Quiz"} />
              </div>
            </Col>
          </Row>
          <Row className={"my-5"} justify="space-around">
            <Col span={16}>
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
            <Col className={"mt-5"} span={16}>
              <GeneralHeader title={"QUESTIONS"} />
              <QuestionCardList
                handleDeleteQuestion={handleDeleteQuestion}
                questions={quiz.questions}
              />
            </Col>
          </Row>
          <Row justify={"center"}>
            <Col className={"edit-quiz--button-wrapper"} span={16}>
              <Button
                className={"edit-quiz--button mb-1"}
                icon={<PlusOutlined />}
              >
                Add question
              </Button>
              <Button
                className={"edit-quiz--button mb-4"}
                icon={<CheckOutlined />}
              >
                Save
              </Button>
            </Col>
          </Row>
        </>
      ) : undefined}
    </div>
  );
};

export default EditQuiz;
