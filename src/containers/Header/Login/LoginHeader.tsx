import React from "react";
import { Layout, Row, Col } from "antd";
import { Icon } from "components";
import TalTechLogo from "assets/images/talTech.svg";
import "./Header.scss";

const LoginHeader = () => {
  const { Header } = Layout;

  return (
    <Row>
      <Col span={24}>
        <Header className={"header"}>
          <Icon
            src={TalTechLogo}
            size="large"
            style="header__taltech--margin-bottom__negative"
          />
        </Header>
      </Col>
    </Row>
  );
};

export default LoginHeader;
