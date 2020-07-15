import React from "react";
import { Layout, Menu } from "antd";
import style from "../../constants/styleVariables";
import { StyleSheet, css } from "aphrodite";
import Dashboard from "../../views/Dashboard/index";
import {
  CrownOutlined,
  ExperimentOutlined,
  StarOutlined,
  StopOutlined,
} from "@ant-design/icons";

const { Content, Sider } = Layout;

class App_Layout extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          theme="light"
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
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
        <Layout className="site-layout">
          <Content style={{ margin: "0 16px" }}>
            <Dashboard />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

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

export default App_Layout;
