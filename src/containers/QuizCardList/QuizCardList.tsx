import React from "react";
import { Col, Row } from "antd";
import { QuizCard } from "../../components";
import { QuizDetails } from "../../common/type/Types";

interface QuizCardListProps {
  quizzes: QuizDetails[];
}

const QuizCardList = ({ quizzes }: QuizCardListProps) => {
  console.log(quizzes);

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
                title={quiz.quizName}
                description={"Mingi text"}
                coverSrc={
                  quiz.imageId
                    ? `/api/image?id=${quiz.imageId}`
                    : "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                }
              />
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default QuizCardList;
