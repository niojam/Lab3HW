import React from "react";
import "antd/dist/antd.css";
import { Menu } from "antd";
import {
  LogoutOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import {
  HOME_PAGE_PATH,
  LOGOUT_PATH,
  MY_QUIZZES_PAGE_PATH,
  STATISTICS_PAGE_PATH,
} from "../../router/config";

interface SiderMenuProps {
  isMobile: boolean;
}

const SiderMenu = ({ isMobile }: SiderMenuProps) => {
  const history = useHistory();
  return (
    <Menu
      theme={"dark"}
      mode={"inline"}
      defaultSelectedKeys={[history.location.pathname]}
    >
      <Menu.Item key={HOME_PAGE_PATH} icon={<UserOutlined />}>
        <Link to={HOME_PAGE_PATH}>Home</Link>
      </Menu.Item>
      <Menu.Item key={MY_QUIZZES_PAGE_PATH} icon={<VideoCameraOutlined />}>
        <Link to={MY_QUIZZES_PAGE_PATH}>My quizzes</Link>
      </Menu.Item>
      <Menu.Item key={STATISTICS_PAGE_PATH} icon={<UploadOutlined />}>
        <Link to={STATISTICS_PAGE_PATH}>Statistics</Link>
      </Menu.Item>
      {isMobile && (
        <Menu.Item key="4" icon={<LogoutOutlined />}>
          <Link to={LOGOUT_PATH}>Sign Out</Link>
        </Menu.Item>
      )}
    </Menu>
  );
};

export default SiderMenu;
