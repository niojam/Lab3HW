import React, { useEffect, useState } from "react";
import { Col, Row, Space } from "antd";
import { QuestionStatisticsTable } from "containers";
import { Icon } from "components";
import { Show } from "assets/images";
import "./QuestionStatistics.scss";
import { QuestionStatisticsData } from "../../common/type/Types";
import { useQuery } from "react-query";
import { getQuestionStatistics } from "../../common/client/BackOfficeApplicationClient";
import { useHistory } from "react-router-dom";
import {
  ANSWER_STATISTICS_PAGE_PATH,
  STATISTICS_PAGE_PATH,
} from "../../router/config";

interface QuestionStatisticsHistoryProps {
  quizId: string;
  quizName: string;
  roomId: string;
  roomName: string;
}

const QuestionStatistics = () => {
  const history = useHistory<QuestionStatisticsHistoryProps>();
  const dataFromHistory = history.location.state;
  const [questions, setQuestionData] = useState<QuestionStatisticsData[]>([]);
  const { data } = useQuery(
    "getQuestionStatistics",
    () => getQuestionStatistics(dataFromHistory.quizId),
    {
      refetchOnWindowFocus: false,
      retry: false,
      onSuccess: (result) => {
        const data: QuestionStatisticsData[] = result.data.map(
          (player, index) => {
            player.key = index++;
            return player;
          }
        );
        setQuestionData(data);
      },
    }
  );
  useEffect(() => {
    if (data?.data) {
      setQuestionData(data.data);
    }
  }, []);
  const handleViewAnswers = () => {
    history.push(
      `${STATISTICS_PAGE_PATH}/${dataFromHistory.roomId}${ANSWER_STATISTICS_PAGE_PATH}`
    );
  };
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Type",
      dataIndex: "questionType",
      key: "questionType",
    },
    {
      title: "View Answers",
      key: "view",
      render: function renderCell() {
        return (
          <div onClick={() => handleViewAnswers()}>
            <Space>
              <Icon src={Show} size={"smaller"} />
            </Space>
          </div>
        );
      },
    },
  ];
  return (
    <div className={"div-container mt-3"}>
      <Row justify={"center"} align={"middle"}>
        <Col md={24} lg={18} className={"m-3 col-container"}>
          <Row>
            <Col className={"col-text"}>
              <div className={"p__quiz-name"}>{dataFromHistory.quizName}</div>
              <div className={"p__room-name"}>{dataFromHistory.roomName}</div>
            </Col>
          </Row>
          <QuestionStatisticsTable data={questions} columns={columns} />
        </Col>
      </Row>
    </div>
  );
};

export default QuestionStatistics;
