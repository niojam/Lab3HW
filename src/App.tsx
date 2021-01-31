import React, { useState } from "react";
import "antd/dist/antd.css";
import "./index.scss";
import { Layout } from "antd";
import { KahootSider, AuthorizedHeader } from "containers";
import { BrowserRouter as Router } from "react-router-dom";
import { useQuery } from "react-query";
import { getQuizzes } from "./common/client/BackOfficeApplicationClient";

const App = () => {
  const { Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const result = useQuery("getQuizzes", getQuizzes);

  console.log(result.data);

  const [mobile, setMobile] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const handleClick = () => {
    if (mobile && !collapsed) {
      setCollapsed(true);
    }
  };
  return (
    <Layout>
      <KahootSider
        collapsed={collapsed}
        mobile={mobile}
        setMobile={setMobile}
        toggle={toggle}
      />
      <Layout className="site-layout" onClick={handleClick}>
        <AuthorizedHeader
          mobile={mobile}
          collapsed={collapsed}
          toggle={toggle}
        />
        <Router>TODO</Router>
        <Content />
      </Layout>
    </Layout>
  );
};

export default App;
