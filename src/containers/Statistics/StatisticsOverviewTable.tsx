import React from "react";
import { Table, Space } from "antd";
import { Icon } from "components";
import { Users, Download, Remove, Chart } from "../../assets/images";

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

const { Column } = Table;

const StatisticsOverviewTable = () => {
  return (
    <Table dataSource={data}>
      <Column title="Quiz Name" dataIndex="quizName" key="quizName" />
      <Column title="Room Name" dataIndex="roomName" key="roomName" />
      <Column title="Time" dataIndex="time" key="time" />
      <Column
        title=""
        key="action"
        render={() => (
          <Space size="middle">
            <Icon src={Chart} size={"small"} />
            <Icon src={Users} size={"small"} />
            <Icon src={Download} size={"small"} />
            <Icon src={Remove} size={"small"} />
          </Space>
        )}
      />
    </Table>
  );
};

export default StatisticsOverviewTable;
