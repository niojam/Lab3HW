import React, { useState } from "react";
import { Col, Row, Space } from "antd";
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
}

type AnswerStatisticsProps = RouteComponentProps<AnswerStatisticsRouterProps>;

const AnswerStatistics = (props: AnswerStatisticsProps) => {
  const roomId = props.match.params.roomId;
  const [answers, setAnswersData] = useState<AnswerStatisticsData[]>([]);
  let questionTitle = "";
  let questionText = "";

  useQuery("getAnswerStatistics", () => getAnswerStatistics(roomId), {
    refetchOnWindowFocus: false,
    retry: false,
    onSuccess: (result) => {
      const data: AnswerStatisticsData[] = result.data.map((answer, index) => {
        answer.key = index++;
        questionTitle = answer.questionTitle;
        questionText = answer.questionText;
        return answer;
      });
      setAnswersData(data);
    },
  });
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
      render: function renderIcon(isCorrect: boolean) {
        return isCorrect ? (
          <Space size={"small"}>
            <Icon src={Check} size={"extra-small"} />
          </Space>
        ) : (
          <Space size={"small"}>
            <Icon src={Close} size={"extra-small"} />
          </Space>
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
    <Row justify={"center"} align={"middle"}>
      <Col md={24} lg={18} className={"m-3 col-container"}>
        <Row className={"p-3"}>
          <Col span={8}>
            <div className={"col-text"}>{questionTitle}</div>
            <hr />
            <div className={"col-text"}>{questionText}</div>
          </Col>
        </Row>
        <AnswerStatisticsTable data={answers} columns={columns} />
      </Col>
    </Row>
  );
};

export default AnswerStatistics;
