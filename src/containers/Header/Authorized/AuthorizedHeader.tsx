import React, { FunctionComponent } from "react";
import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

interface HeaderProps {
  mobile: boolean;
  collapsed: boolean;
  toggle: () => void;
}

const AuthorizedHeader: FunctionComponent<HeaderProps> = ({
  mobile,
  collapsed,
  toggle,
}: HeaderProps) => {
  const { Header } = Layout;

  return (
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
  );
};

export default AuthorizedHeader;
