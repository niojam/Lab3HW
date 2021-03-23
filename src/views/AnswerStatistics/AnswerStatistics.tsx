import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import { AnswerStatisticsTable } from "containers";
import { Icon } from "components";
import { Check, Close } from "assets/images";
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

  const { data } = useQuery(
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
    },
    {
      title: "Correct",
      dataIndex: "isCorrect",
      key: "isCorrect",
      render: function renderIcon(text: string, record: AnswerStatisticsData) {
        return record.correct ? (
          <Icon src={Check} size={"extra-small"} />
        ) : (
          <Icon src={Close} size={"extra-small"} />
        );
      },
    },
    {
      title: "Frequency",
      dataIndex: "frequency",
      key: "frequency",
    },
  ];
  return (
    <div className={"div-container"}>
      <Row justify={"center"} align={"middle"}>
        <Col span={24} className={"m-3"}>
          <Row className={"p-3"}>
            <Col className={"col-text"}>
              <div className={"div__question-title"}>{questionTitle}</div>
              <hr />
              <div className={"div__question-text"}>{questionText}</div>
            </Col>
          </Row>
          <AnswerStatisticsTable data={answers} columns={columns} />
        </Col>
      </Row>
    </div>
  );
};

export default AnswerStatistics;
