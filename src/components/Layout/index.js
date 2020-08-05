import React, { useState } from "react";
import { Layout as AntLayout, Menu } from "antd";
import style from "../../constants/styleVariables";
import { StyleSheet, css } from "aphrodite";
import Dashboard from "../../views/Dashboard/index";
import {
  CrownOutlined,
  ExperimentOutlined,
  StarOutlined,
  StopOutlined,
} from "@ant-design/icons";
import DashboardProvider from "../../hooks/dashboard-hooks";

const { Content, Sider } = AntLayout;

const Layout = () => {
  const [siderCollapsed, setSiderCollapsed] = useState(false);

  const onSiderCollapse = (siderCollapsed) => {
    setSiderCollapsed(siderCollapsed);
  };

  return (
    <AntLayout style={{ minHeight: "100vh" }}>
      <Sider
        theme="light"
        collapsible
        width={300}
        className={css(styles.sider)}
        trigger={null}
      >
        <div className={css(styles.logo)}>
          <span className={css(styles.logoText)}>My Skincare Haul</span>
        </div>
        <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item
            key="1"
            className={css(styles.menuItem)}
            icon={<CrownOutlined />}
          >
            Dashboard
          </Menu.Item>
          <Menu.Item
            key="2"
            className={css(styles.menuItem)}
            icon={<ExperimentOutlined />}
          >
            My Routine
          </Menu.Item>
          <Menu.Item
            key="3"
            className={css(styles.menuItem)}
            icon={<StarOutlined />}
          >
            Favourite list
          </Menu.Item>
          <Menu.Item
            key="4"
            className={css(styles.menuItem)}
            icon={<StopOutlined />}
          >
            Block list
          </Menu.Item>
        </Menu>
      </Sider>
      <AntLayout className="site-layout">
        <Content style={{ margin: "0 16px" }}>
          <DashboardProvider>
            <Dashboard />
          </DashboardProvider>
        </Content>
      </AntLayout>
    </AntLayout>
  );
};

const styles = StyleSheet.create({
  logo: {
    padding: 24,
    paddingTop: 40,
    paddingBottom: 24,
  },
  logoText: {
    color: style.primaryTextColor,
    fontSize: 22,
    fontWeight: 700,
    paddingBottom: 3,
    borderBottom: `4px solid ${style.primaryColor}`,
  },
  layout: {
    minHeight: "100vh",
  },
  sider: {
    padding: 24,
    borderRight: `1px solid ${style.borderColor}`,
  },
  menuItem: {
    backgroundColor: "#fff",
    ":after": {
      borderRight: "none",
    },
    fontWeight: 700,
    fontSize: 16,
    marginTop: 24,
    marginBottom: 24,
  },
});

export default Layout;
