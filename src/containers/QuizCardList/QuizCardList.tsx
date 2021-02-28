import React from "react";
import { Col, Row } from "antd";
import { QuizCard } from "../../components";
import { QuizDetails } from "../../common/type/Types";
import {
  CaretRightOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";

interface QuizCardListProps {
  quizzes: QuizDetails[];
}

const QuizCardList = ({ quizzes }: QuizCardListProps) => {
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
                title={quiz.quizName}
                description={"Mingi text"}
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
                    className={"quiz-card--button"}
                    key="editQuiz"
                  />,
                  <EllipsisOutlined
                    className={"quiz-card--button"}
                    key="ellipsis"
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
