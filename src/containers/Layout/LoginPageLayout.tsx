import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import { Icon } from "components";
import { TalTechLogo } from "../../assets/images";
import { LoginPage } from "containers";

const LoginPageLayout = () => {
  const { Header } = Layout;

  return (
    <Layout>
      <Header className="p-0">
        <Menu theme="dark" mode="horizontal">
          <div className="logo pb-1 pl-4 pt-2">
            <Icon src={TalTechLogo} size="medium" />
          </div>
        </Menu>
      </Header>
      <LoginPage />
    </Layout>
  );
};

export default LoginPageLayout;
