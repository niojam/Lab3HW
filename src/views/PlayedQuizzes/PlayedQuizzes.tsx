import React from "react";
import StatisticsOverviewTable from "../../containers/Statistics/StatisticsOverviewTable";
import { Col, Pagination, Row } from "antd";
import "./PlayedQuizzes.scss";

const PlayedQuizzes = () => {
  return (
    <Row
      justify={"center"}
      align={"middle"}
      style={{ display: "flex" }}
      className={"div-container"}
    >
      <Col md={24} lg={18}>
        <StatisticsOverviewTable />
        <Pagination
          defaultCurrent={1}
          defaultPageSize={10}
          total={200}
          style={{ padding: "3%" }}
        />
      </Col>
    </Row>
  );
};
export default PlayedQuizzes;
