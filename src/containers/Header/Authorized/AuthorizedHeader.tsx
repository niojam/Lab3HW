import React, { FunctionComponent } from "react";
import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

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
      {mobile
        ? React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )
        : null}
    </Header>
  );
};

export default AuthorizedHeader;
