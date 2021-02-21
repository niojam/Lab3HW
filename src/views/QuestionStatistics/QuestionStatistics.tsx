import React from "react";
import { Col, Row, Space } from "antd";
import QuestionStatisticsTable from "../../containers/Statistics/QuestionStatisticsTable";
import { Icon } from "../../components";
import { Show } from "../../assets/images";
import "./QuestionStatistics.scss";

const quizName = "What is OOP?";
const roomName = "Room 1";
const data = [
  {
    key: "1",
    title: "What is encapsulation",
    type: "SINGLE_MATCH",
  },
  {
    key: "2",
    title: "What is inheritance",
    type: "SINGLE_MATCH",
  },
  {
    key: "3",
    title: "What is polymorphism",
    type: "SINGLE_MATCH",
  },
];
const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "View Answers",
    key: "view",
    render: function renderIcons() {
      return (
        <Space size="small">
          <Icon src={Show} size={"small"} />
        </Space>
      );
    },
  },
];

const QuestionStatistics = () => {
  return (
    <Row justify={"center"} align={"middle"}>
      <Col md={24} lg={18} className={"m-3 col-container"}>
        <Row className={"p-3"}>
          <Col
            span={12}
            style={{ display: "flex", justifyContent: "flex-start" }}
            className={"col-text p-2"}
          >
            {quizName}
          </Col>
          <Col
            span={12}
            style={{ display: "flex", justifyContent: "flex-end" }}
            className={"col-text p-2"}
          >
            {roomName}
          </Col>
        </Row>
        <QuestionStatisticsTable data={data} columns={columns} />
      </Col>
    </Row>
  );
};

export default QuestionStatistics;
