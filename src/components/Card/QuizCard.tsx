import React, { ReactNode } from "react";
import { Card } from "antd";
import "./QuizCard.scss";
import Meta from "antd/es/card/Meta";
import {
  EditOutlined,
  EllipsisOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";

interface QuizCardProps {
  title: string;
  description: string;
  coverImg: ReactNode;
}

const QuizCard = ({ title, description, coverImg }: QuizCardProps) => {
  return (
    <Card
      className={"quiz-card"}
      cover={coverImg}
      actions={[
        <CaretRightOutlined className={"quiz-card--button"} key="playQuiz" />,
        <EditOutlined className={"quiz-card--button"} key="editQuiz" />,
        <EllipsisOutlined className={"quiz-card--button"} key="ellipsis" />,
      ]}
    >
      <Meta title={title} description={description} />
    </Card>
  );
};

export default QuizCard;
