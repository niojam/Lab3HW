import React from "react";
import { Col, Pagination, Row, Space } from "antd";
import QuestionStatisticsTable from "../../containers/Statistics/QuestionStatisticsTable";
import { Icon } from "../../components";
import { Show } from "../../assets/images";
import "./QuestionStatistics.scss";

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
        <Space size="middle" align={"center"}>
          <Icon src={Show} size={"small"} />
        </Space>
      );
    },
  },
];

const QuestionStatistics = () => {
  return (
    <Row justify={"center"} align={"middle"}>
      <Col md={24} lg={18} className={"m-3"}>
        <QuestionStatisticsTable data={data} columns={columns} />
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

export default QuestionStatistics;
