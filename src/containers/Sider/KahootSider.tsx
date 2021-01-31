import React, { FunctionComponent } from "react";
import "antd/dist/antd.css";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Icon } from "components";
import TalTechLogo from "assets/images/talTech.svg";
import { Layout } from "antd";
import { SiderMenu } from "containers";

const { Sider } = Layout;

interface SiderProps {
  mobile: boolean;
  collapsed: boolean;
  setMobile: any;
  toggle: () => void;
}

const KahootSider: FunctionComponent<SiderProps> = ({
  mobile,
  collapsed,
  setMobile,
  toggle,
}: SiderProps) => {
  return (
    <Sider
      collapsible
      style={mobile ? { position: "absolute" } : {}}
      collapsedWidth={mobile ? 0 : 90}
      onCollapse={toggle}
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
      <SiderMenu />
    </Sider>
  );
};

export default KahootSider;
