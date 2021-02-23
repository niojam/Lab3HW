import React from "react";
import { StatisticsOverviewTable } from "containers";
import { Col, Pagination, Row, Space } from "antd";
import { Icon } from "components";
import { Users, Download, Remove, Chart } from "assets/images";
import "./PlayedQuizzes.scss";

const data = [
  {
    key: "1",
    quizName: "What is OOP",
    roomName: "Room number 1",
    time: "25.08.2020",
  },
  {
    key: "2",
    quizName: "What is OOP",
    roomName: "Room number 2",
    time: "26.08.2020",
  },
  {
    key: "3",
    quizName: "What is OOP",
    roomName: "Room number 3",
    time: "28.08.2020",
  },
];

const columns = [
  {
    title: "Quiz Name",
    dataIndex: "quizName",
    key: "quizName",
  },
  {
    title: "Room Name",
    dataIndex: "roomName",
    key: "roomName",
  },
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "",
    key: "action",
    render: function renderIcons() {
      return (
        <Space size="middle">
          <Icon src={Chart} size={"small"} />
          <Icon src={Users} size={"small"} />
          <Icon src={Download} size={"small"} />
          <Icon src={Remove} size={"small"} />
        </Space>
      );
    },
  },
];

const PlayedQuizzes = () => {
  return (
    <Row justify={"center"} align={"middle"}>
      <Col md={24} lg={18} className={"m-3"}>
        <StatisticsOverviewTable data={data} columns={columns} />
        <Pagination
          defaultCurrent={1}
          defaultPageSize={10}
          total={300}
          className={"p-3"}
        />
      </Col>
    </Row>
  );
};
export default PlayedQuizzes;
