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
}

const Answer: FunctionComponent<AnswerProps> = ({
  name,
  iconSrc,
  placeholder,
  color,
}: AnswerProps) => {
  return (
    <div className="answer">
      <Form.Item
        {...fullWidthCol}
        className={`answer-icon__color-${color}`}
        name={name}
        rules={[
          {
            required: true,
            message: "VALIDATION.REQUIRED",
          },
        ]}
      >
        <Input prefix={<Icon src={iconSrc} />} placeholder={placeholder} />
      </Form.Item>
    </div>
  );
};

export default Answer;
