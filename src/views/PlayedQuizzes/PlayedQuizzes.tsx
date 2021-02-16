import React from "react";
import StatisticsOverviewTable from "../../containers/Statistics/StatisticsOverviewTable";
import { Col } from "antd";

const PlayedQuizzes = () => {
  return (
    <Col xs={24} md={6}>
      <StatisticsOverviewTable />
    </Col>
  );
};

export default PlayedQuizzes;
