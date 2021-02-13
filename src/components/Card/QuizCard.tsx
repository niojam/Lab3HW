import React, { ReactNode } from "react";
import { Avatar, Card } from "antd";
import "./QuizCard.scss";
import Meta from "antd/es/card/Meta";
import {
  EditOutlined,
  EllipsisOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface QuizCardProps {
  title: string;
  description: string;
  coverImg: ReactNode;
}

const QuizCard = ({ title, description, coverImg }: QuizCardProps) => {
  return (
    <Card
      className={"quiz-card"}
      style={{ width: 280 }}
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
