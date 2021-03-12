import React, { useState } from "react";
import { StatisticsOverviewTable } from "containers";
import { Col, Pagination, Row, Space } from "antd";
import { Icon } from "components";
import { Users, Download, Remove, Chart } from "assets/images";
import "./PlayedQuizzes.scss";
import { PlayedQuizzesData } from "../../common/type/Types";
import { useQuery } from "react-query";
import { getPlayedQuizzes } from "../../common/client/BackOfficeApplicationClient";
import { useHistory } from "react-router-dom";
import {
  PLAYERS_STATISTICS_PAGE_PATH,
  QUIZ_STATISTICS_PAGE_PATH,
  STATISTICS_PAGE_PATH,
} from "../../router/config";

const PlayedQuizzes = () => {
  const history = useHistory();
  const [rooms, setRoomStatistics] = useState<PlayedQuizzesData[]>([]);
  useQuery("getAuthorQuizzes", getPlayedQuizzes, {
    staleTime: 10000,
    refetchOnWindowFocus: false,
    retry: false,
    onSuccess: (result) => {
      const data: PlayedQuizzesData[] = result.data.map((quiz, index) => {
        quiz.key = index++;
        return quiz;
      });
      setRoomStatistics(data);
    },
  });
  const handleShowQuizStatistics = (record: PlayedQuizzesData) => {
    history.push(
      `${STATISTICS_PAGE_PATH}/${record.roomName}${QUIZ_STATISTICS_PAGE_PATH}`,
      {
        quizId: record.quizId,
        quizName: record.quizName,
        roomId: record.id,
        roomName: record.roomName,
      }
    );
  };

  const handleShowPlayerStatistics = (record: PlayedQuizzesData) => {
    history.push(
      `${STATISTICS_PAGE_PATH}/${record.id}${PLAYERS_STATISTICS_PAGE_PATH}`,
      { quizName: record.quizName }
    );
  };

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
      render: function renderIcons(record: PlayedQuizzesData) {
        return (
          <Space size="middle">
            <div onClick={() => handleShowQuizStatistics(record)}>
              <Icon src={Chart} size={"small"} />
            </div>
            <div onClick={() => handleShowPlayerStatistics(record)}>
              <Icon src={Users} size={"small"} />
            </div>
            <Icon src={Download} size={"small"} />
            <Icon src={Remove} size={"small"} />
          </Space>
        );
      },
    },
  ];

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
