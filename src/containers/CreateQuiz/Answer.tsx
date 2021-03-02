import React, { FunctionComponent } from "react";
import { Form, Input } from "antd";
import "antd/dist/antd.css";
import "./Answer.scss";
import { Icon } from "components";

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
}: AnswerProps) => {
  return (
    <div className="answer">
      <Form.Item
        {...fullWidthCol}
        className={`answer-icon__color-${color} selectable ${
          selectedAnswers.includes(name) ? "selected" : ""
        }`}
        name={name}
        rules={
          isOptional
            ? []
            : [
                {
                  required: true,
                  message: "VALIDATION.REQUIRED",
                },
              ]
        }
      >
        <Input
          autoComplete={"off"}
          prefix={
            <div
              style={{ cursor: "pointer" }}
              onClick={() => handleCorrectAnswerSelect(name)}
            >
              <Icon src={iconSrc} />
            </div>
          }
          placeholder={placeholder}
        />
        <div className="check">
          <span className="checkmark">✔</span>
        </div>
      </Form.Item>
    </div>
  );
};

export default Answer;
