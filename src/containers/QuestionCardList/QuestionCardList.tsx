import React from "react";
import { Col, Row } from "antd";
import "./QuestionCardList.scss";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { QuizCard } from "../../components";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface QuestionCardListProps {}

const QuestionCardList = ({}: QuestionCardListProps) => {
  return (
    <>
      <Row gutter={[16, 12]}>
        <Col style={{ textAlign: "center" }} span={24}>
          <QuizCard
            className={"question-card"}
            title={
              <ul className={"no-bullets"}>
                <li>
                  Question: Titleefefefefewfefewf pikk kusimu aj mis on selle
                  elu mote
                </li>
                <li className={"question-card--list-element__display_none"}>
                  <span>Time limit: Title</span>
                </li>
                <li className={"question-card--list-element__display_none"}>
                  <span>Points: Title</span>
                </li>
                <li className={"question-card--list-element__display_none"}>
                  <span>Type: Title</span>
                </li>
              </ul>
            }
            coverSrc={
              "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            }
            actions={[
              <EditFilled className={"quiz-card--button"} key="editQuestion" />,
              <DeleteFilled
                className={"quiz-card--button"}
                key="deleteQuestion"
              />,
            ]}
          />
        </Col>
      </Row>
    </>
  );
};

export default QuestionCardList;
