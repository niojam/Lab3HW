import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import "antd/dist/antd.css";

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

const CreateQuiz = () => {
  const [form] = Form.useForm();

  return (
    <Form {...formItemLayout} form={form} name="register" scrollToFirstError>
      <Row>
        <Col xs={24}>
          <Form.Item
            {...fullWidthCol}
            name="nameYourQuiz"
            rules={[
              {
                required: true,
                message: "Required field",
              },
            ]}
          >
            <Input placeholder="Name your quiz" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col xs={24}>
          <Form.Item
            {...fullWidthCol}
            name="question"
            rules={[
              {
                required: true,
                message: "Click to start typing your question",
              },
            ]}
          >
            <Input placeholder="Click to start typing your question" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col xs={24} md={8}>
          <Form.Item
            {...fullWidthCol}
            name="nameYourQuiz"
            rules={[
              {
                required: true,
                message: "Please input name of the quiz!",
              },
            ]}
          >
            <Input placeholder="Time limit" />
          </Form.Item>
        </Col>
        <Col xs={24} md={8}>
          <Form.Item
            {...fullWidthCol}
            name="nameYourQuiz"
            rules={[
              {
                required: true,
                message: "Please input name of the quiz!",
              },
            ]}
          >
            <Input placeholder="Points" />
          </Form.Item>
        </Col>
        <Col xs={24} md={8}>
          <Form.Item
            {...fullWidthCol}
            name="nameYourQuiz"
            rules={[
              {
                required: true,
                message: "Please input name of the quiz!",
              },
            ]}
          >
            <Input placeholder="Type" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col xs={24} md={24}>
          <Form.Item
            {...fullWidthCol}
            name="nameYourQuiz"
            rules={[
              {
                required: true,
                message: "Please input name of the quiz!",
              },
            ]}
          >
            <Input placeholder="Drag and drop image" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col xs={24} md={12}>
          <Form.Item
            {...fullWidthCol}
            name="nameYourQuiz"
            rules={[
              {
                required: true,
                message: "Please input name of the quiz!",
              },
            ]}
          >
            <Input placeholder="Add answer 1" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            {...fullWidthCol}
            name="nameYourQuiz"
            rules={[
              {
                required: true,
                message: "Please input name of the quiz!",
              },
            ]}
          >
            <Input placeholder="Add answer 2" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col xs={24} md={12}>
          <Form.Item
            {...fullWidthCol}
            name="nameYourQuiz"
            rules={[
              {
                required: true,
                message: "Please input name of the quiz!",
              },
            ]}
          >
            <Input placeholder="Add answer 3" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            {...fullWidthCol}
            name="nameYourQuiz"
            rules={[
              {
                required: true,
                message: "Please input name of the quiz!",
              },
            ]}
          >
            <Input placeholder="Add answer 4" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item {...fullWidthCol}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateQuiz;
