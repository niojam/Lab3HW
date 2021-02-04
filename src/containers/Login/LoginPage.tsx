import React from "react";
import { Col, Row, Button } from "antd";
import MicrosoftIcon from "../../assets/images/microsoft.svg";
import { Icon } from "components";
import LoginIllustration from "../../assets/images/login_illustration.png";

const LoginPage = () => {
  return (
    <Row>
      <Col span={24} className="mt-6">
        <div className="mt-2 text-centre">
          <img src={LoginIllustration} alt="LoginIllustration" />
        </div>
      </Col>
      <Col span={24} className="mt-2 text-centre">
        <Button
          type="default"
          size="large"
          className={"mx-auto"}
          shape="round"
          icon={
            <Icon
              src={MicrosoftIcon}
              size="extra-small"
              style="icon__login-microsoft"
            />
          }
        >
          Continue with Microsoft
        </Button>
      </Col>
    </Row>
  );
};

export default LoginPage;
