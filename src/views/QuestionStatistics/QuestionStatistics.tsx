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
  const handleViewAnswers = (id: number) => {
    history.push(
      `${STATISTICS_PAGE_PATH}/room/${dataFromHistory.roomId}/question/${id}${ANSWER_STATISTICS_PAGE_PATH}`
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
      render: function renderCell(record: QuestionStatisticsData) {
        return (
          <div onClick={() => handleViewAnswers(record.id)}>
            <Space>
              <Icon src={Show} size={"smaller"} style={"icon__clickable"} />
            </Space>
          </div>
        );
      },
      className: "icon__view-answers",
    },
  ];
  return (
    <div>
      <Row justify={"center"} align={"middle"}>
        <Col span={18} className={"m-3"}>
          <Row>
            <Col className={"col-text"}>
              <div>
                <h2>{dataFromHistory.quizName}</h2>
              </div>
              <div className={"question-statistics-room-name"}>
                <h3>{dataFromHistory.roomName}</h3>
              </div>
            </Col>
          </Row>
          <QuestionStatisticsTable
            data={questions}
            columns={columns}
            className={"question-statistics-table"}
          />
        </Col>
      </Row>
    </div>
  );
};

export default QuestionStatistics;
