import React from "react";
import "antd/dist/antd.css";
import { Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
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
  return (
    <Menu theme={"dark"} mode={"inline"} defaultSelectedKeys={["1"]}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        <Link to={HOME_PAGE_PATH}>Home</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<VideoCameraOutlined />}>
        <Link to={MY_QUIZZES_PAGE_PATH}>My quizzes</Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<UploadOutlined />}>
        <Link to={STATISTICS_PAGE_PATH}>Statistics</Link>
      </Menu.Item>
      {isMobile && (
        <Menu.Item key="4" icon={<UploadOutlined />}>
          <Link to={LOGOUT_PATH}>Sign Out</Link>
        </Menu.Item>
      )}
    </Menu>
  );
};

export default SiderMenu;
