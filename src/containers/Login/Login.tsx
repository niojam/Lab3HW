import React from "react";
import { Col, Row, Button } from "antd";
import MicrosoftIcon from "../../assets/images/microsoft.svg";
import { Icon } from "../../components";

const Login = () => {
  return (
    <Row>
      <Col span={24} className={"d-flex"}>
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

export default Login;
