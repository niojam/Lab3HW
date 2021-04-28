import React, { useEffect, useRef, useState } from "react";
import "antd/dist/antd.css";
import { Button, Col, Form, Input, message, Row, Select } from "antd";
import {
  QUESTION_SCORE,
  QUESTION_TIMER,
  QUESTION_TYPE,
  TIME_ALGORITHM,
} from "../../constants";
import { Answer } from "containers";
import { ImageDragger, ImageUploader } from "components";
import { Coin, Heart, Lego, Star } from "assets/images/index";
import "./EditQuizQuestion.scss";
import { QuizAnswer, QuizQuestion } from "../../common/type/Types";
import {
  GET_IMAGE_BY_ID_URL,
  IMAGE_UPLOAD_URL,
} from "../../common/client/BackOfficeApplicationClient";

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
  quizId: number;
  handleSaveQuestion: (question: QuizQuestion) => void;
  question: QuizQuestion;
}

const defaultCorrectAnswerName = "answer0";

const maxAnswerCount = 4;
const EditQuizQuestion = ({
  quizId,
  handleSaveQuestion,
  question,
}: EditQuizQuestionProps) => {
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion>(
    question
  );
  const [correctAnswers, setCorrectAnswers] = useState<string[]>([]);
  const [answersFilled, setAnswersFilled] = useState<string[]>([]);
  const selectedAnsweringMode = useRef<string>(
    question.questionType ?? QUESTION_TYPE.SINGLE_MATCH.value
  );
  const [form] = Form.useForm();

  const handleCorrectAnswerSelect = (name: string) => {
    const { current } = selectedAnsweringMode;
    if (current === QUESTION_TYPE.SINGLE_MATCH.value) {
      setCorrectAnswers((prevState) => {
        if (prevState.includes(name) && prevState.length <= 1) {
          return prevState; // AVOID NO CORRECT ANSWER
        }
        return prevState?.length && prevState[0] === name ? [] : [name];
      });
    } else {
      setCorrectAnswers((prevState) => {
        // MULTIPLE_MATCH OR MULTIPLE_ANY
        if (prevState.includes(name) && prevState.length <= 1) {
          return prevState; // AVOID NO CORRECT ANSWER
        }
        return prevState.includes(name) // REMOVE ON DOUBLE CLICK
          ? [...prevState].filter((value) => value !== name)
          : [...prevState, name];
      });
    }
  };

  const handleValueChange = (changedValues: any, allValues: any) => {
    if (changedValues.questionType) {
      selectedAnsweringMode.current = changedValues.questionType;
      setCorrectAnswers([defaultCorrectAnswerName]);
    }

    for (let i = 0; i < 4; i++) {
      if (changedValues[`answer${i}`] !== undefined) {
        setAnswersFilled((prevState) => {
          if (
            changedValues[`answer${i}`] !== "" &&
            !prevState.includes(`answer${i}`)
          )
            return [...prevState, `answer${i}`];
          else if (
            changedValues[`answer${i}`] === "" &&
            prevState.includes(`answer${i}`)
          ) {
            return prevState.filter((value) => value !== `answer${i}`);
          }
          return prevState;
        });
      }
      form.validateFields([`answer${i}`]);
    }
    console.log(changedValues);
  };

  const handleOnUploadChange = (info: any) => {
    const { status, response } = info.file;
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
      setCurrentQuestion(
        (prevState) => ({ ...prevState, imageId: response } as QuizQuestion)
      );
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const onFinish = (fieldsValue: any) => {
    const name = fieldsValue["quizName"];
    const questionText = fieldsValue["questionText"];
    const questionTime = fieldsValue["time"];
    const questionPoints = fieldsValue["points"];
    const timeAlgorithm = fieldsValue["timeAlgorithm"];
    const answers: QuizAnswer[] = [];

    for (let i = 0; i < maxAnswerCount; i++) {
      const answer = fieldsValue[`answer${i}`] as string;
      let isCorrect = false;
      if (correctAnswers.includes(`answer${i}`)) {
        isCorrect = true;
      }
      if (answer) {
        if (currentQuestion.answers[i]) {
          answers.push({
            ...currentQuestion.answers[i],
            text: answer,
            isCorrect: isCorrect,
          });
        } else {
          answers.push({ text: answer, isCorrect: isCorrect } as QuizAnswer);
        }
      }
    }
    handleSaveQuestion({
      ...currentQuestion,
      quizId: quizId,
      title: name,
      text: questionText,
      timer: Number(questionTime),
      answers: answers,
      questionType: selectedAnsweringMode.current,
      reward: Number(questionPoints),
      timeAlgorithm: timeAlgorithm,
    } as QuizQuestion);
  };

  useEffect(() => {
    let answerFound = false;
    for (let i = 0; i < maxAnswerCount; i++) {
      if (currentQuestion.answers[i]?.isCorrect) {
        answerFound = true;
        setCorrectAnswers((prevState) => [...prevState, `answer${i}`]);
      }
    }
    if (!answerFound) {
      setCorrectAnswers([defaultCorrectAnswerName]);
    }

    for (let i = 0; i < currentQuestion.answers.length; i++) {
      if (currentQuestion.answers[i].text) {
        setAnswersFilled((prevState) => [...prevState, `answer${i}`]);
      }
    }
  }, [currentQuestion]);

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
                message: "Quiz name is required",
              },
            ]}
            initialValue={question.title}
          >
            <Input autoComplete={"off"} placeholder="Name your question" />
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
                message: "Question text is required",
              },
            ]}
            initialValue={question.text}
          >
            <Input
              autoComplete={"off"}
              placeholder="Click to start typing your question"
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col xs={24} md={12}>
          <Row>
            <Col xs={24} md={20}>
              <Form.Item
                {...fullWidthCol}
                name="time"
                rules={[
                  {
                    required: true,
                    message: "Question time is required",
                  },
                ]}
                initialValue={question?.timer?.toString()}
              >
                <Select placeholder="Time limit">
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
          </Row>

          <Row>
            <Col xs={24} md={20}>
              <Form.Item
                {...fullWidthCol}
                name="points"
                rules={[
                  {
                    required: true,
                    message: "Question reward is required",
                  },
                ]}
                initialValue={question.reward?.toString()}
              >
                <Select placeholder="Points">
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
          </Row>

          <Row>
            <Col xs={24} md={20}>
              <Form.Item
                {...fullWidthCol}
                name="timeAlgorithm"
                rules={[
                  {
                    required: true,
                    message: "Reward algorithm is required",
                  },
                ]}
                initialValue={question.timeAlgorithm}
              >
                <Select placeholder="Reward algorithm">
                  <Select.Option value={TIME_ALGORITHM.CONSTANT.value}>
                    {TIME_ALGORITHM.CONSTANT.text}
                  </Select.Option>
                  <Select.Option value={TIME_ALGORITHM.FASTEST_ANSWER.value}>
                    {TIME_ALGORITHM.FASTEST_ANSWER.text}
                  </Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col xs={24} md={20}>
              <Form.Item
                {...fullWidthCol}
                name="questionType"
                rules={[
                  {
                    required: true,
                    message: "Question type is required",
                  },
                ]}
                initialValue={selectedAnsweringMode.current}
              >
                <Select placeholder="Type">
                  <Select.Option value={QUESTION_TYPE.SINGLE_MATCH.value}>
                    {QUESTION_TYPE.SINGLE_MATCH.text}
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
        </Col>
        <Col xs={24} md={12}>
          <Form.Item {...fullWidthCol} name="image">
            <ImageUploader
              className={"edit-quiz--image-uploader"}
              imageUrl={
                currentQuestion?.imageId
                  ? GET_IMAGE_BY_ID_URL + currentQuestion.imageId
                  : undefined
              }
              onChange={handleOnUploadChange}
              action={IMAGE_UPLOAD_URL}
              isLoading={false}
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col className={"card mb-3"} xs={24} md={12}>
          <Answer
            handleCorrectAnswerSelect={handleCorrectAnswerSelect}
            name="answer0"
            exitingAnswer={question.answers ? question.answers[0] : undefined}
            iconSrc={Lego}
            isOptional={answersFilled.length > 1}
            placeholder="Add answer 1"
            color="blue"
            selectedAnswers={correctAnswers}
          />
        </Col>
        <Col className={"card mb-3"} xs={24} md={12}>
          <Answer
            exitingAnswer={question.answers ? question.answers[1] : undefined}
            handleCorrectAnswerSelect={handleCorrectAnswerSelect}
            name="answer1"
            isOptional={answersFilled.length > 1}
            iconSrc={Heart}
            placeholder="Add answer 2"
            color="red"
            selectedAnswers={correctAnswers}
          />
        </Col>
      </Row>
      <Row gutter={24}>
        <Col className={"card mb-3"} xs={24} md={12}>
          <Answer
            exitingAnswer={question.answers ? question.answers[2] : undefined}
            handleCorrectAnswerSelect={handleCorrectAnswerSelect}
            name="answer2"
            isOptional={answersFilled.length > 1}
            iconSrc={Coin}
            placeholder="Add answer 3"
            color="green"
            selectedAnswers={correctAnswers}
          />
        </Col>
        <Col className={"card mb-3"} xs={24} md={12}>
          <Answer
            exitingAnswer={question.answers ? question.answers[3] : undefined}
            handleCorrectAnswerSelect={handleCorrectAnswerSelect}
            name="answer3"
            isOptional={answersFilled.length > 1}
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
