import React from "react";
import { Col, Row, Space } from "antd";
import { AnswerStatisticsTable } from "containers";
import { Icon } from "components";
import { Check, Close } from "assets/images";
import "./AnswerStatistics.scss";

const questionTitle = "What is something";
const questionText = "What is something that is something extra text";
const data = [
  {
    key: "1",
    answer: "Something",
    correct: true,
    frequency: 10,
  },
  {
    key: "2",
    answer: "Another thing",
    correct: false,
    frequency: 15,
  },
  {
    key: "3",
    answer: "And yet another thing",
    correct: false,
    frequency: 17,
  },
  {
    key: "4",
    answer: "Something",
    correct: true,
    frequency: 20,
  },
];

const columns = [
  {
    title: "Answer",
    dataIndex: "answer",
    key: "answer",
  },
  {
    title: "Correct",
    dataIndex: "correct",
    key: "correct",
    render: function renderIcon(isCorrect: boolean) {
      return isCorrect ? (
        <Space size={"small"}>
          <Icon src={Check} size={"extra-small"} />
        </Space>
      ) : (
        <Space size={"small"}>
          <Icon src={Close} size={"extra-small"} />
        </Space>
      );
    },
  },
  {
    title: "Frequency",
    dataIndex: "frequency",
    key: "frequency",
  },
];

const AnswerStatistics = () => {
  return (
    <Row justify={"center"} align={"middle"}>
      <Col md={24} lg={18} className={"m-3 col-container"}>
        <Row className={"p-3"}>
          <Col span={8}>
            <div className={"col-text"}>{questionTitle}</div>
            <hr />
            <div className={"col-text"}>{questionText}</div>
          </Col>
        </Row>
        <AnswerStatisticsTable data={data} columns={columns} />
      </Col>
    </Row>
  );
};

export default AnswerStatistics;
