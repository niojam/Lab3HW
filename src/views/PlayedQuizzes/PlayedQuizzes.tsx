import React, { useState } from "react";
import { StatisticsOverviewTable } from "containers";
import { Col, Pagination, Row, Space } from "antd";
import { Icon } from "components";
import { Users, Download, Remove, Chart } from "assets/images";
import "./PlayedQuizzes.scss";
import { AuthorQuizzes } from "../../common/type/Types";
import { useQuery } from "react-query";
import { getAuthorQuizzes } from "../../common/client/BackOfficeApplicationClient";

const PlayedQuizzes = () => {
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
  const [rooms, setRoomStatistics] = useState<AuthorQuizzes[]>([]);
  const {} = useQuery("getAuthorQuizzes", getAuthorQuizzes, {
    staleTime: 10000,
    refetchOnWindowFocus: false,
    retry: false,
    onSuccess: (result) => {
      const data: AuthorQuizzes[] = result.data.map((quiz, index) => {
        quiz.key = index++;
        return quiz;
      });
      setRoomStatistics(data);
    },
  });

  return (
    <Row justify={"center"} align={"middle"}>
      <Col md={24} lg={18} className={"m-3"}>
        <StatisticsOverviewTable data={rooms} columns={columns} />
        <Pagination
          defaultCurrent={1}
          defaultPageSize={10}
          total={rooms.length}
          className={"p-3"}
        />
      </Col>
    </Row>
  );
};
export default PlayedQuizzes;
