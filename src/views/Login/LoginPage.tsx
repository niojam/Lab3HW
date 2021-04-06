import React from "react";
import { Button, Col, Row } from "antd";
import { LoginIllustration, Microsoft } from "assets/images";
import { Icon } from "components";
import "./Login.scss";
import { AUTHORIZATION_URL } from "../../common/client/BackOfficeApplicationClient";

const LoginPage = () => {
  const handleMicrosoftLogin = () => {
    window.location.href = AUTHORIZATION_URL;
  };

  return (
    <Row
      justify="center"
      align="middle"
      className="h-100 login-page main-container"
    >
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
              onClick={() => handleMicrosoftLogin()}
            >
              Continue with Microsoft
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default LoginPage;
