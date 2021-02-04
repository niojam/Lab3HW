import React from "react";
import { Drawer } from "antd";
import "./KahootDrawer.scss";
import { TalTechLogo } from "assets/images";
import { Icon, SiderMenu } from "components";

interface DrawerProps {
  mobile: boolean;
  collapsed: boolean;
  setCollapsed: (isCollapsed: boolean) => void;
}

const KahootDrawer = ({ mobile, collapsed, setCollapsed }: DrawerProps) => {
  return (
    <Drawer
      style={mobile ? {} : { display: "none" }}
      closable={false}
      title={<Icon src={TalTechLogo} size="medium" />}
      placement="left"
      onClose={() => setCollapsed(true)}
      visible={!collapsed}
    >
      <SiderMenu />
    </Drawer>
  );
};

export default KahootDrawer;
