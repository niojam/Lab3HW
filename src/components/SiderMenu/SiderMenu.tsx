import React from "react";
import "antd/dist/antd.css";
import { Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const SiderMenu = () => {
  return (
    <Menu theme={"dark"} mode={"inline"} defaultSelectedKeys={["1"]}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        <Link to={"/home"}>Home</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<VideoCameraOutlined />}>
        <Link to={"/my-quizzes"}>My quizzes</Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<UploadOutlined />}>
        <Link to={"/edit-quiz/-1"}>Statistics</Link>
      </Menu.Item>
    </Menu>
  );
};

export default SiderMenu;
