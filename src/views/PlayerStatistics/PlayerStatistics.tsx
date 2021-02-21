import React from "react";
import { Col, Row } from "antd";
import PlayerStatisticsTable from "../../containers/Statistics/PlayerStatisticsTable";
import { Icon } from "../../components";
import { Check, Close } from "../../assets/images";
import "./PlayerStatistics.scss";

const quizTitle = "What is OOP";
const data = [
  {
    key: "1",
    player: "First",
    correct: 10,
    wrong: 0,
    score: 1000,
  },
  {
    key: "2",
    player: "Second",
    correct: 10,
    wrong: 0,
    score: 1000,
  },
  {
    key: "3",
    player: "Third",
    correct: 8,
    wrong: 2,
    score: 800,
  },
  {
    key: "4",
    player: "Fourth",
    correct: 0,
    wrong: 10,
    score: 0,
  },
];
const columns = [
  {
    title: "Player",
    dataIndex: "player",
    key: "player",
  },
  {
    title: function renderIcon() {
      return <Icon src={Check} size={"extra-small"} />;
    },
    dataIndex: "correct",
    key: "correct",
  },
  {
    title: function renderIcon() {
      return <Icon src={Close} size={"extra-small"} />;
    },
    dataIndex: "wrong",
    key: "wrong",
  },
  {
    title: "Score",
    dataIndex: "score",
    key: "score",
  },
];

const PlayerStatistics = () => {
  return (
    <Row justify={"center"} align={"middle"}>
      <Col md={24} lg={18} className={"m-3 col-container"}>
        <Row className={"p-3"}>
          <Col sm={16} md={10} className={"col-text p-3"}>
            {quizTitle}
            <hr />
          </Col>
        </Row>

        <PlayerStatisticsTable data={data} columns={columns} />
      </Col>
    </Row>
  );
};

export default PlayerStatistics;
