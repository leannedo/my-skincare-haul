import React from "react";
import { Menu, Dropdown } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { StyleSheet, css } from "aphrodite";

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="/">Edit</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="/">Duplicate</a>
    </Menu.Item>
    <Menu.Item key="3">Delete</Menu.Item>
  </Menu>
);

const Controls = ({ className }) => (
  <Dropdown overlay={menu} trigger={["click"]} className={className}>
    <a
      href="/"
      className="ant-dropdown-link"
      onClick={(e) => e.preventDefault()}
    >
      <EllipsisOutlined className={css(styles.ellipsis)} />
    </a>
  </Dropdown>
);

const styles = StyleSheet.create({
  ellipsis: {
    fontSize: 30,
  },
});

export default Controls;
