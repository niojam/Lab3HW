import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";

import { Col, Row } from "antd";
import { GeneralHeader, ImageDragger } from "../../components";
import GeneralInput from "../../components/Input/GeneralInput";
import { QuestionCardList } from "../../containers";
import "./EditQuiz.scss";
import { useQuery } from "react-query";
import { getQuiz } from "../../common/client/BackOfficeApplicationClient";
import { Quiz } from "../../common/type/Types";

interface EditQuizRouterProps {
  quizId: string;
}

type EditQuizProps = RouteComponentProps<EditQuizRouterProps>;

const EditQuiz = (props: EditQuizProps) => {
  const { quizId } = props.match.params;
  const [quiz, setQuiz] = useState<Quiz>();

  useQuery(["getQuizData", quizId], () => getQuiz(quizId), {
    refetchOnWindowFocus: false,
    retry: false,
    onSuccess: (data) => {
      setQuiz(data.data);
    },
  });

  return (
    <div className={"scrollY"}>
      <Row className={"my-5"} justify="space-around">
        <Col className={"mt-5"} span={16}>
          <GeneralHeader title={"GENERAL"} />
          <div className="general-input-wrapper">
            <GeneralInput placeholder={"Name Your Quiz"} />
          </div>
        </Col>
      </Row>
      <Row justify="space-around">
        <Col span={16}>
          <Row justify={"center"} className={"image-dragger-wrapper"}>
            <ImageDragger height={250} />
          </Row>
        </Col>
      </Row>
      <Row className={"my-5"} justify="space-around">
        <Col className={"mt-5"} span={16}>
          <GeneralHeader title={"QUESTIONS"} />
          <QuestionCardList />
        </Col>
      </Row>
    </div>
  );
};

export default EditQuiz;
