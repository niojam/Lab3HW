import React, { useState } from "react";
import "antd/dist/antd.css";
import "./index.scss";
import { Button, Layout } from "antd";
import { KahootSider, AuthorizedHeader } from "containers";
import { routes } from "./router/config";
import CustomRouter from "./router/CustomRouter";
import { useQuery } from "react-query";
import { getQuizzes } from "./common/client/BackOfficeApplicationClient";

const App = () => {
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
        <CustomRouter routes={routes} isAuthenticated={false} />
        <Button href="https://quiz-bo.cs.taltech.ee/api/login/oauth2/code/azure">
          Login
        </Button>
      </Layout>
    </Layout>
  );
};

export default App;
