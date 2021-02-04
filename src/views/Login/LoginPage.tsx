import React from "react";
import { Col, Row, Button } from "antd";
import { Microsoft, LoginIllustration } from "assets/images";
import { Icon } from "components";
import "./Login.scss";

const LoginPage = () => {
  return (
    <Row justify="center" align="middle" className="h-100">
      <Col span={24}>
        <div className="text-centre">
          <img
            src={LoginIllustration}
            alt="LoginIllustration"
            className="login__illustration"
          />
        </div>
        <Row justify="center">
          <Col>
            <Button
              className="login__microsoft-button"
              type="default"
              size="large"
              shape="round"
              href="/api/oauth2/authorization/azure"
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
            <Button type="default" size="large" shape="round">
              🌈 Magic Login 🧙
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default LoginPage;
