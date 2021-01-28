import React, { useState } from "react";
import "antd/dist/antd.css";
import "./index.scss";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Icon } from "../components";
import TalTechLogo from "../assets/images/talTech.svg";

const { Header, Sider, Content } = Layout;

const PageLayout = () => {
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
      <Sider
        collapsible
        style={mobile ? { position: "absolute" } : {}}
        collapsedWidth={mobile ? 0 : 90}
        onCollapse={() => toggle()}
        breakpoint={"md"}
        trigger={
          mobile ? null : collapsed ? (
            <MenuUnfoldOutlined />
          ) : (
            <MenuFoldOutlined />
          )
        }
        onBreakpoint={(isMobile) => setMobile(isMobile)}
        collapsed={collapsed}
      >
        <div className="logo">
          <Icon src={TalTechLogo} size="medium" />
        </div>
        <Menu theme={"dark"} mode={"inline"} defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" onClick={handleClick}>
        <Header style={{ padding: 0 }}>
          {mobile
            ? React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: toggle,
                }
              )
            : null}
        </Header>
        <Content />
      </Layout>
    </Layout>
  );
};

export default PageLayout;
