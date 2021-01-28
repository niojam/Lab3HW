import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Row, Col } from "antd";
import { Header, Login } from "./containers";
import { BrowserRouter as Router } from "react-router-dom";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PageLayout from "./containers/Headerr";

const App = () => {
  const { Content } = Layout;

  return (
    <Router>
      <PageLayout />
    </Router>
  );
};

export default App;
