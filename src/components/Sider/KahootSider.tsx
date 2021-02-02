import React, { FunctionComponent } from "react";
import "antd/dist/antd.css";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Icon, SiderMenu } from "components/index";
import { TalTechLogo } from "assets/images/index";
import { Layout } from "antd";
import "./KahootSider.scss";

const { Sider } = Layout;

interface SiderProps {
  collapsed: boolean;
  mobile: boolean;
  setMobile: (isMobile: boolean) => void;
  setCollapsed: (isCollapsed: boolean) => void;
}

const KahootSider: FunctionComponent<SiderProps> = ({
  collapsed,
  mobile,
  setMobile,
  setCollapsed,
}: SiderProps) => {
  return (
    <Sider
      style={mobile ? { display: "none" } : {}}
      collapsible
      collapsedWidth={90}
      onCollapse={() => {
        setCollapsed(!collapsed);
      }}
      breakpoint={"md"}
      trigger={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      onBreakpoint={(isMobile) => {
        setMobile(isMobile);
        if (isMobile) {
          setCollapsed(true);
        }
      }}
      collapsed={collapsed}
    >
      <div className="logo">
        <Icon src={TalTechLogo} size="medium" />
      </div>
      <SiderMenu />
    </Sider>
  );
};

export default KahootSider;
