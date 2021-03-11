import React from "react";
import { Col, Row } from "antd";
import { QuizCard } from "../../components";
import { QuizDetails } from "../../common/type/Types";
import {
  CaretRightOutlined,
  DeleteFilled,
  EditOutlined,
} from "@ant-design/icons";

interface QuizCardListProps {
  quizzes: QuizDetails[];
  handleModifyQuiz: (quizId: number) => void;
  handleDeleteQuiz: (quizId: number) => void;
}

const QuizCardList = ({
  quizzes,
  handleModifyQuiz,
  handleDeleteQuiz,
}: QuizCardListProps) => {
  return (
    <>
      <Row gutter={[16, 12]}>
        {quizzes.map((quiz) => (
          <Col
            key={quiz.quizId}
            style={{ textAlign: "center" }}
            xs={24}
            sm={12}
            lg={8}
            xxl={6}
          >
            <div style={{ display: "inline-block" }}>
              <QuizCard
                className={"quiz-card"}
                title={quiz.quizName ?? "Quiz"}
                coverSrc={
                  quiz.imageId
                    ? `/api/image?id=${quiz.imageId}`
                    : "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                }
                actions={[
                  <CaretRightOutlined
                    className={"quiz-card--button"}
                    key="playQuiz"
                  />,
                  <EditOutlined
                    onClick={() => handleModifyQuiz(quiz.quizId)}
                    className={"quiz-card--button"}
                    key="editQuiz"
                  />,
                  <DeleteFilled
                    onClick={() => handleDeleteQuiz(quiz.quizId)}
                    className={"quiz-card--button"}
                    key="deleteQuestion"
                  />,
                ]}
              />
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default QuizCardList;
