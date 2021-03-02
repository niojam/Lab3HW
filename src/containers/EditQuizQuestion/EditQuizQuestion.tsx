import React, { useRef, useState } from "react";
import "antd/dist/antd.css";
import { Button, Col, Form, Input, Row, Select } from "antd";
import { QUESTION_SCORE, QUESTION_TIMER, QUESTION_TYPE } from "../../constants";
import { Answer } from "containers";
import { ImageDragger } from "components";
import { Coin, Heart, Lego, Star } from "assets/images/index";
import "./EditQuizQuestion.scss";
import { QuizQuestion } from "../../common/type/Types";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const fullWidthCol = {
  wrapperCol: {
    md: {
      span: 24,
    },
  },
};
interface EditQuizQuestionProps {
  handleSaveQuestion: (question: QuizQuestion) => void;
  question: QuizQuestion;
}

const EditQuizQuestion = ({
  handleSaveQuestion,
  question,
}: EditQuizQuestionProps) => {
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion>(
    question
  );
  const [correctAnswers, setCorrectAnswers] = useState<string[]>([]);
  const selectedAnsweringMode = useRef<string>(
    QUESTION_TYPE.SINGLE_MATCH.value
  );
  const [form] = Form.useForm();

  const onFinish = (fieldsValue: any) => {
    const name = fieldsValue["quizName"];
    const questionText = fieldsValue["questionText"];
    const answers = [];
    console.log(name);
    handleSaveQuestion({} as QuizQuestion);
  };

  const handleCorrectAnswerSelect = (name: string) => {
    const { current } = selectedAnsweringMode;
    if (
      current === QUESTION_TYPE.SINGLE_MATCH.value ||
      current === QUESTION_TYPE.SINGLE_ANY.value
    ) {
      setCorrectAnswers((prevState) =>
        prevState?.length && prevState[0] === name ? [] : [name]
      );
    } else {
      setCorrectAnswers((prevState) =>
        prevState.includes(name)
          ? [...prevState].filter((value) => value !== name)
          : [...prevState, name]
      );
    }
  };

  const handleValueChange = (changedValues: any, allValues: any) => {
    if (changedValues.questionType) {
      console.log("done");
      selectedAnsweringMode.current = changedValues.questionType;
    }
    console.log(changedValues);
    console.log(allValues);
  };

  return (
    <Form
      onFinish={onFinish}
      onValuesChange={handleValueChange}
      {...formItemLayout}
      form={form}
      className={"edit-question-form"}
      name="register"
      scrollToFirstError
    >
      <Row>
        <Col xs={24}>
          <Form.Item
            {...fullWidthCol}
            name="quizName"
            rules={[
              {
                required: true,
                message: "VALIDATION.REQUIRED",
              },
            ]}
          >
            <Input autoComplete={"off"} placeholder="Name your quiz" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col xs={24}>
          <Form.Item
            {...fullWidthCol}
            name="questionText"
            rules={[
              {
                required: true,
                message: "VALIDATION.REQUIRED",
              },
            ]}
          >
            <Input
              autoComplete={"off"}
              placeholder="Click to start typing your question"
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col xs={24} md={8}>
          <Form.Item
            {...fullWidthCol}
            name="time"
            rules={[
              {
                required: true,
                message: "VALIDATION.REQUIRED",
              },
            ]}
          >
            <Select
              defaultValue={QUESTION_TIMER.T_15.value}
              placeholder="Time limit"
            >
              <Select.Option value={QUESTION_TIMER.T_15.value}>
                {QUESTION_TIMER.T_15.text}
              </Select.Option>
              <Select.Option value={QUESTION_TIMER.T_30.value}>
                {QUESTION_TIMER.T_30.text}
              </Select.Option>
              <Select.Option value={QUESTION_TIMER.T_45.value}>
                {QUESTION_TIMER.T_45.text}
              </Select.Option>
              <Select.Option value={QUESTION_TIMER.T_60.value}>
                {QUESTION_TIMER.T_60.text}
              </Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} md={8}>
          <Form.Item
            {...fullWidthCol}
            name="points"
            rules={[
              {
                required: true,
                message: "VALIDATION.REQUIRED",
              },
            ]}
          >
            <Select
              defaultValue={QUESTION_SCORE.P_100.value}
              placeholder="Points"
            >
              <Select.Option value={QUESTION_SCORE.P_100.value}>
                {QUESTION_SCORE.P_100.text}
              </Select.Option>
              <Select.Option value={QUESTION_SCORE.P_150.value}>
                {QUESTION_SCORE.P_150.text}
              </Select.Option>
              <Select.Option value={QUESTION_SCORE.P_200.value}>
                {QUESTION_SCORE.P_200.text}
              </Select.Option>
              <Select.Option value={QUESTION_SCORE.P_250.value}>
                {QUESTION_SCORE.P_250.text}
              </Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} md={8}>
          <Form.Item
            {...fullWidthCol}
            name="questionType"
            rules={[
              {
                required: true,
                message: "VALIDATION.REQUIRED",
              },
            ]}
          >
            <Select
              defaultValue={QUESTION_TYPE.SINGLE_MATCH.value}
              placeholder="Type"
            >
              <Select.Option value={QUESTION_TYPE.SINGLE_MATCH.value}>
                {QUESTION_TYPE.SINGLE_MATCH.text}
              </Select.Option>
              <Select.Option value={QUESTION_TYPE.SINGLE_ANY.value}>
                {QUESTION_TYPE.SINGLE_ANY.text}
              </Select.Option>
              <Select.Option value={QUESTION_TYPE.MULTIPLE_MATCH.value}>
                {QUESTION_TYPE.MULTIPLE_MATCH.text}
              </Select.Option>
              <Select.Option value={QUESTION_TYPE.MULTIPLE_ANY.value}>
                {QUESTION_TYPE.MULTIPLE_ANY.text}
              </Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col xs={24} md={24}>
          <Form.Item {...fullWidthCol} name="questionType">
            <ImageDragger
              onChange={(info: any) => {
                console.log(info);
              }}
              action={"https://www.mocky.io/v2/5cc8019d300000980a055e76"}
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col className={"card"} xs={24} md={12}>
          <Answer
            handleCorrectAnswerSelect={handleCorrectAnswerSelect}
            name="answer1"
            iconSrc={Lego}
            placeholder="Add answer 1"
            color="blue"
            selectedAnswers={correctAnswers}
          />
        </Col>
        <Col className={"card"} xs={24} md={12}>
          <Answer
            handleCorrectAnswerSelect={handleCorrectAnswerSelect}
            name="answer2"
            iconSrc={Heart}
            placeholder="Add answer 2"
            color="red"
            selectedAnswers={correctAnswers}
          />
        </Col>
      </Row>
      <Row gutter={24}>
        <Col className={"card"} xs={24} md={12}>
          <Answer
            handleCorrectAnswerSelect={handleCorrectAnswerSelect}
            isOptional
            name="answer3"
            iconSrc={Coin}
            placeholder="Add answer 3"
            color="green"
            selectedAnswers={correctAnswers}
          />
        </Col>
        <Col className={"card"} xs={24} md={12}>
          <Answer
            handleCorrectAnswerSelect={handleCorrectAnswerSelect}
            isOptional
            name="answer4"
            iconSrc={Star}
            placeholder="Add answer 4"
            color="violet"
            selectedAnswers={correctAnswers}
          />
        </Col>
      </Row>

      <Form.Item {...fullWidthCol}>
        <Button type="primary" htmlType="submit">
          Save Question
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditQuizQuestion;
