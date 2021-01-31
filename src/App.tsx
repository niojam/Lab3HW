import React, { useState } from "react";
import "antd/dist/antd.css";
import "./index.scss";
import { Layout } from "antd";
import { KahootSider, AuthorizedHeader } from "containers";
import { CreateQuiz } from "views";

const App = () => {
  const { Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);

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
        <Content className="site-layout__content">
          <CreateQuiz />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
