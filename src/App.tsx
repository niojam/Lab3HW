import React, { useState } from "react";
import "antd/dist/antd.css";
import "./index.scss";
import { Layout } from "antd";
import { AuthorizedHeader, KahootNavigation } from "containers";
import { CreateQuiz } from "views";

const App = () => {
  const { Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);

  const [mobile, setMobile] = useState(false);

  return (
    <Layout>
      <KahootNavigation
        mobile={mobile}
        setMobile={setMobile}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />
      <Layout className="site-layout">
        <AuthorizedHeader
          mobile={mobile}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />
        <Content className="site-layout__content">
          <CreateQuiz />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
