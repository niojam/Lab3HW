import React, { useState } from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { AuthorizedHeader, KahootNavigation } from "containers";

interface MyProps {
  children?: React.ReactNode;
}

const MainLayout = (props: React.PropsWithChildren<MyProps>) => {
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
        {props.children}
      </Layout>
    </Layout>
  );
};

export default MainLayout;
