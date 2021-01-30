import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Row, Col } from "antd";
import { Header, Login } from "./containers";
import { BrowserRouter as Router } from "react-router-dom";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const { Content } = Layout;

  return (
    <Router>
      <Layout className="layout">
        <Row>
          <Col span={24}>
            <Header />
          </Col>
        </Row>
        <Row className="layout__content-row">
          <Col span={20} sm={15} className="layout__content-col">
            <Content>
              <Login />
            </Content>
          </Col>
        </Row>
      </Layout>
      ,
    </Router>
  );
};

export default App;
