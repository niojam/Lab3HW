import React, { FunctionComponent } from "react";
import { Form, Input } from "antd";
import "antd/dist/antd.css";
import "./Answer.scss";
import { Icon } from "components";
import { QuizAnswer } from "../../common/type/Types";

const fullWidthCol = {
  wrapperCol: {
    md: {
      span: 24,
    },
  },
};

type color = "blue" | "red" | "green" | "violet";

interface AnswerProps {
  name: string;
  iconSrc: string;
  placeholder: string;
  color: color;
  handleCorrectAnswerSelect: (name: string) => void;
  selectedAnswers: string[];
  exitingAnswer: QuizAnswer | undefined;
  isOptional?: boolean;
}

const Answer: FunctionComponent<AnswerProps> = ({
  name,
  iconSrc,
  placeholder,
  color,
  isOptional,
  handleCorrectAnswerSelect,
  selectedAnswers,
  exitingAnswer,
}: AnswerProps) => {
  return (
    <div className="answer">
      <div
        className={`selectable ${
          selectedAnswers.includes(name) ? "selected" : ""
        }`}
      >
        <Form.Item
          {...fullWidthCol}
          className={`answer-icon__color-${color}`}
          name={name}
          rules={
            isOptional
              ? []
              : [
                  {
                    required: true,
                    message: "Must be at least 2 valid answers",
                  },
                ]
          }
          initialValue={exitingAnswer?.text}
        >
          <Input
            autoComplete={"off"}
            prefix={
              <div
                className={"answer--wrapper"}
                onClick={() => handleCorrectAnswerSelect(name)}
              >
                <Icon style={"m-auto"} src={iconSrc} />
              </div>
            }
            placeholder={placeholder}
          />
        </Form.Item>
        <span className="check">
          <span className="checkmark">✔</span>
        </span>
      </div>
    </div>
  );
};

export default Answer;
