import React, { FunctionComponent } from "react";
import "./AuthorizedHeader.scss";
import { Layout } from "antd";
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { LOGOUT_PATH } from "../../../router/config";

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
        <Link to={LOGOUT_PATH}>
          <span className={"header--sign-out-button pr-3"}>
            <LogoutOutlined className={"header--sign-out-icon pr-1"} />
            Sign out
          </span>
        </Link>
      )}
    </Header>
  );
};

export default AuthorizedHeader;
