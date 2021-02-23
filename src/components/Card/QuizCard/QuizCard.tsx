import React, { ReactNode } from "react";
import { Card } from "antd";
import "./QuizCard.scss";
import Meta from "antd/es/card/Meta";

type questionCardClassName = "question-card" | "quiz-card";

interface QuestionCardProps {
  className: questionCardClassName;
  title: string | ReactNode;
  description?: string;
  coverSrc: string;
  actions: ReactNode[];
}

const QuizCard = ({
  className,
  title,
  description,
  coverSrc,
  actions,
}: QuestionCardProps) => {
  return (
    <Card
      className={className}
      cover={
        <img
          className={"quiz-card--img"}
          alt="QuizImg"
          src={coverSrc}
          loading="lazy"
        />
      }
      actions={actions}
    >
      <Meta title={title} description={description} />
    </Card>
  );
};

export default QuizCard;
