import React, { useEffect, useState } from "react";
import { Col, Row, Spin } from "antd";
import { AnswerStatisticsTable } from "containers";
import { Icon } from "components";
import { Check, Close } from "assets/images/index";
import "./AnswerStatistics.scss";
import { RouteComponentProps } from "react-router-dom";
import { AnswerStatisticsData } from "../../common/type/Types";
import { useQuery } from "react-query";
import { getAnswerStatistics } from "../../common/client/BackOfficeApplicationClient";

interface AnswerStatisticsRouterProps {
  roomId: string;
  questionId: string;
}

type AnswerStatisticsProps = RouteComponentProps<AnswerStatisticsRouterProps>;

const AnswerStatistics = (props: AnswerStatisticsProps) => {
  const roomId = props.match.params.roomId;
  const questionId = props.match.params.questionId;
  const [answers, setAnswersData] = useState<AnswerStatisticsData[]>([]);
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionText, setQuestionText] = useState("");

  const { isLoading, data } = useQuery(
    "getAnswerStatistics",
    () => getAnswerStatistics(roomId, questionId),
    {
      refetchOnWindowFocus: false,
      retry: false,
      onSuccess: (result) => {
        const data: AnswerStatisticsData[] = result.data.map(
          (answer, index) => {
            answer.key = index++;
            setQuestionTitle(answer.questionTitle);
            setQuestionText(answer.questionText);
            return answer;
          }
        );
        setAnswersData(data);
      },
    }
  );

  useEffect(() => {
    if (data?.data) {
      setAnswersData(data.data);
    }
  }, []);
  const columns = [
    {
      title: "Answer",
      dataIndex: "answerText",
      key: "answerText",
      sorter: (a: AnswerStatisticsData, b: AnswerStatisticsData) =>
        a.answerText.localeCompare(b.answerText),
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Correct",
      dataIndex: "isCorrect",
      key: "isCorrect",
      render: function renderIcon(text: string, record: AnswerStatisticsData) {
        return record.correct ? (
          <div>
            <Icon src={Check} size={"extra-small"} />
          </div>
        ) : (
          <div>
            <Icon src={Close} size={"extra-small"} />
          </div>
        );
      },
      className: "icon__correct-wrong",
    },
    {
      title: "Frequency",
      dataIndex: "frequency",
      key: "frequency",
      className: "frequency",
      sorter: (a: AnswerStatisticsData, b: AnswerStatisticsData) =>
        a.frequency - b.frequency,
      sortDirections: ["descend", "ascend"],
    },
  ];
  return (
    <div className={"main-container"}>
      <Row justify={"center"} align={"middle"}>
        <Col span={18} className={"m-3"}>
          <Col>
            <Col>
              <div>
                <h2>{questionTitle}</h2>
              </div>
              <div className={"answer-statistics-question-text"}>
                <p>{questionText}</p>
              </div>
            </Col>
          </Col>
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col span={18}>
          {isLoading ? (
            <Row justify={"center"}>
              <Spin size="large" />
            </Row>
          ) : (
            <AnswerStatisticsTable
              data={answers}
              columns={columns}
              className={"answer-statistics-table"}
            />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default AnswerStatistics;
