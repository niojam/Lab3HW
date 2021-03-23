import React, { FunctionComponent } from "react";
import "./AuthorizedHeader.scss";
import { Button, Layout } from "antd";
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";

interface HeaderProps {
  mobile: boolean;
  collapsed: boolean;
  setCollapsed: (isCollapsed: boolean) => void;
}

const AuthorizedHeader: FunctionComponent<HeaderProps> = ({
  mobile,
  collapsed,
  setCollapsed,
}: HeaderProps) => {
  const { Header } = Layout;

  return (
    <Header className={"p-0"}>
      {(mobile &&
        React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: "trigger",
          onClick: () => setCollapsed(!collapsed),
        })) || (
        <Button className={"header--sign-out-button"} type="text">
          <LogoutOutlined />
          Sign out
        </Button>
      )}
    </Header>
  );
};

export default AuthorizedHeader;
