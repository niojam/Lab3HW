import React from "react";
import { Button, Col, Form, Input, Modal, Row } from "antd";

interface StartQuizModalProps {
  quizIdToStart: number | undefined;
  onModalOk: (roomName: string) => void;
  onModalCancel: () => void;
}

const StartQuizModal = ({
  quizIdToStart,
  onModalCancel,
  onModalOk,
}: StartQuizModalProps) => {
  const onFinish = (fieldsValue: any) => {
    onModalOk(fieldsValue["roomName"]);
  };

  return (
    <div className="start-quiz-modal">
      <Modal
        footer={null}
        destroyOnClose={true}
        title="Insert room name please"
        visible={!!quizIdToStart}
        onCancel={onModalCancel}
      >
        <Form onFinish={onFinish} size="large">
          <Row justify={"center"}>
            <Col span={19}>
              <Form.Item
                name="roomName"
                rules={[
                  {
                    required: true,
                    message: "Room name is required",
                  },
                ]}
              >
                <Input
                  autoComplete="off"
                  maxLength={20}
                  placeholder="Room name"
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Button style={{ float: "right" }} type="primary" htmlType="submit">
              Start Game
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default StartQuizModal;
