import React, { useState } from "react";
import { Dropdown } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { StyleSheet, css } from "aphrodite";
import ControlMenu from "./Menu";

const Controls = ({ className, id }) => {
  const [visible, setVisible] = useState(false);

  const handleVisibleChange = (state) => {
    setVisible(state);
  };

  const handleMenuClick = (e) => {
    setVisible(false);
  };

  return (
    <Dropdown
      overlay={<ControlMenu id={id} handleMenuClick={handleMenuClick} />}
      trigger={["click"]}
      onVisibleChange={handleVisibleChange}
      visible={visible}
      className={className}
    >
      <a
        href="/"
        className="ant-dropdown-link"
        onClick={(e) => e.preventDefault()}
      >
        <EllipsisOutlined className={css(styles.ellipsis)} />
      </a>
    </Dropdown>
  );
};

const styles = StyleSheet.create({
  ellipsis: {
    fontSize: 30,
  },
});

export default Controls;
