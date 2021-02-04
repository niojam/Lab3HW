import React from "react";
import { Col, Row, Button } from "antd";
import { Microsoft, LoginIllustration } from "assets/images";
import { Icon } from "components";

const LoginPage = () => {
  return (
    <Row justify="center" align="middle" className="h-100">
      <Col span={24}>
        <div className="text-centre">
          <img src={LoginIllustration} alt="LoginIllustration" />
        </div>
        <Row justify="center">
          <Col>
            <Button
              type="default"
              size="large"
              className="mx-auto"
              shape="round"
              icon={
                <Icon
                  src={Microsoft}
                  size="extra-small"
                  style="icon__login-microsoft"
                />
              }
            >
              Continue with Microsoft
            </Button>
          </Col>
        </Row>
        <Row justify="center" className="mt-3">
          <Col>
            <Button
              type="default"
              size="large"
              className="mx-auto"
              shape="round"
            >
              🌈 Magic Login 🧙
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default LoginPage;
