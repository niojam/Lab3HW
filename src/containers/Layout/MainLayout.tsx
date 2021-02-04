import React, { lazy, useState } from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { KahootSider, AuthorizedHeader, Login } from "containers";
import { Route } from "react-router-dom";

interface MyProps {
  children?: React.ReactNode;
}

const MainLayout = (props: React.PropsWithChildren<MyProps>) => {
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
        {props.children}
      </Layout>
    </Layout>
  );
};

export default MainLayout;
