import React, { useState } from "react";
import "antd/dist/antd.css";
import "./index.scss";
import { Layout } from "antd";
import { AuthorizedHeader, KahootNavigation } from "containers";
import { routes } from "./router/config";
import CustomRouter from "./router/CustomRouter";

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
      </Layout>
    </Layout>
  );
};

export default App;
