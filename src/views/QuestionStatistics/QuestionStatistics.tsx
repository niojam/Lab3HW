import React, { useEffect, useState } from "react";
import { Affix, Col, Row, Space, Spin } from "antd";
import { QuestionStatisticsTable } from "containers";
import { Icon, SearchBar } from "components";
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
  const { isLoading, data } = useQuery(
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
  const filterAndSortQuestions = (keyword: string) => {
    if (data?.data && keyword && keyword.trim()) {
      const keywordLower = keyword.toLowerCase();
      const filteredData = data.data
        .filter((question) =>
          question.questionType.toLowerCase().includes(keywordLower)
        )
        .sort((q1, q2) => {
          const q1Lower: boolean = q1.questionType
            .toLowerCase()
            .startsWith(keywordLower);
          const q2Lower: boolean = q2.questionType
            .toLowerCase()
            .startsWith(keywordLower);
          if (q1Lower && !q2Lower) {
            return -1;
          } else if (!q1Lower && q2Lower) {
            return 1;
          }
          return 0;
        });
      setQuestionData(filteredData);
    } else {
      setQuestionData(data?.data ?? []);
    }
  };
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      sorter: (a: QuestionStatisticsData, b: QuestionStatisticsData) =>
        a.title.localeCompare(b.title),
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Type",
      dataIndex: "questionType",
      key: "questionType",
      sorter: (a: QuestionStatisticsData, b: QuestionStatisticsData) =>
        a.questionType.localeCompare(b.questionType),
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "View Answers",
      key: "view",
      render: function renderCell(record: QuestionStatisticsData) {
        return (
          <div onClick={() => handleViewAnswers(record.id)}>
            <Space>
              <Icon
                src={Show}
                size={"smaller"}
                style={"general-table-icon__clickable"}
              />
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
          <Row>
            <Col className={"mt-2"} span={24}>
              <div className="search-bar-wrapper">
                <Affix>
                  <SearchBar
                    onSearchClick={filterAndSortQuestions}
                    placeholder={"Filter by question type..."}
                  />
                </Affix>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col span={18}>
          {isLoading ? (
            <Row justify={"center"}>
              <Spin size="large" />
            </Row>
          ) : (
            <QuestionStatisticsTable
              data={questions}
              columns={columns}
              className={"question-statistics-table"}
            />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default QuestionStatistics;
