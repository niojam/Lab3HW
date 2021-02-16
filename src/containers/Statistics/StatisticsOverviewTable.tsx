import React from "react";
import { Space } from "antd";
import { Icon } from "components";
import { Users, Download, Remove, Chart } from "../../assets/images";
import { GenericTable } from "../../components";
import "./StatisticsOverviewTable.scss";
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

const StatisticsOverviewTable = () => {
  return <GenericTable tableData={data} columns={columns} />;
};

export default StatisticsOverviewTable;
