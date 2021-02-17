import React, { useEffect } from "react";
import { Col, Row, Button } from "antd";
import { Microsoft, LoginIllustration } from "assets/images";
import { Icon } from "components";
import {
  isUserAuthenticated,
  magicLoginAttempt,
} from "store/AuthenticationSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Login.scss";

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuthenticated = useSelector(isUserAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/home");
    }
  }, [isAuthenticated]);

  const handleMagicLogin = () => {
    dispatch(magicLoginAttempt());
  };

  const handleMicrosoftLogin = () => {
    window.location.href = "http://localhost:8090/oauth2/authorization/azure";
  };

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
              onClick={() => handleMicrosoftLogin()}
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
              shape="round"
              onClick={() => handleMagicLogin()}
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
