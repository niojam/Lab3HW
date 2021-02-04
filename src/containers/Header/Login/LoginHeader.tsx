import React from "react";
import { Row, Col } from "antd";
import { Icon } from "components";
import TalTechLogo from "assets/images/talTech.svg";
import "./Header.scss";

const LoginHeader = () => {
  return (
    <Row>
      <Col span={24}>
        <Icon
          src={TalTechLogo}
          size="small"
          style="header__taltech--margin-bottom__negative"
        />
      </Col>
      <Col span={24}>
        <Icon
          src={TalTechLogo}
          size="large"
          style="header__taltech--margin-bottom__negative"
        />
      </Col>
    </Row>
  );
};

export default LoginHeader;
