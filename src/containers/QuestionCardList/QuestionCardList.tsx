import React from "react";
import { Col, Row, Tooltip } from "antd";
import "./QuestionCardList.scss";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { QuizCard } from "../../components";
import { QuizQuestion } from "../../common/type/Types";

interface QuestionCardListProps {
  questions: QuizQuestion[];
  handleDeleteQuestion: (questionId: number) => void;
  handleModifyQuestion: (question: QuizQuestion) => void;
}

const QuestionCardList = ({
  questions,
  handleDeleteQuestion,
  handleModifyQuestion,
}: QuestionCardListProps) => {
  return (
    <>
      <Row gutter={[16, 12]}>
        {questions.map((question) => (
          <Col key={question.id} style={{ textAlign: "center" }} span={24}>
            <QuizCard
              className={"question-card"}
              title={
                <ul className={"no-bullets"}>
                  <li>{`Question: ${question.text}`}</li>
                  <li className={"question-card--list-element__display_none"}>
                    <span>{`Time limit: ${question.timer}`}</span>
                  </li>
                  <li className={"question-card--list-element__display_none"}>
                    <span>{`Points: ${question.reward}`}</span>
                  </li>
                  <li className={"question-card--list-element__display_none"}>
                    <span>{`Type: ${question.questionType}`}</span>
                  </li>
                </ul>
              }
              coverSrc={
                question.imageId
                  ? `/api/image?id=${question.imageId}`
                  : "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              }
              actions={[
                <Tooltip key={"editQuestion"} title="Edit question">
                  <EditFilled
                    onClick={() => handleModifyQuestion(question)}
                    className={"quiz-card--button"}
                    key="editQuestion"
                  />
                </Tooltip>,
                <Tooltip key="deleteQuestion" title="Delete question">
                  <DeleteFilled
                    onClick={() => handleDeleteQuestion(question.id)}
                    className={"quiz-card--button"}
                    key="deleteQuestion"
                  />
                </Tooltip>,
              ]}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default QuestionCardList;
