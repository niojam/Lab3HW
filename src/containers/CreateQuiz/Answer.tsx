import React, { FormEvent, FunctionComponent, useState } from "react";
import { Form, Input, Tooltip } from "antd";
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
  const [answerValue, setAnswerValue] = useState<string | undefined>(
    exitingAnswer?.text
  );

  const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setAnswerValue(value);
  };

  return (
    <div className="answer">
      <div
        className={`selectable ${
          selectedAnswers.includes(name) && answerValue ? "selected" : ""
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
            onChange={handleInputChange}
            prefix={
              <Tooltip
                title={
                  answerValue
                    ? "Click to select as correct answer"
                    : "Add text to select as correct answer"
                }
              >
                <div
                  className={"answer--wrapper"}
                  onClick={() => {
                    if (answerValue) {
                      return handleCorrectAnswerSelect(name);
                    }
                  }}
                >
                  <Icon style={"m-auto"} src={iconSrc} />
                </div>
              </Tooltip>
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
