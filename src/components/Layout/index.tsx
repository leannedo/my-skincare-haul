import React, { useState } from "react";
import { Layout as AntLayout, Menu } from "antd";
// import Dashboard from "../../views/Dashboard/index";
import './Layout.scss';
import {
  CrownOutlined,
  ExperimentOutlined,
  StarOutlined,
  StopOutlined,
} from "@ant-design/icons";
// import DashboardProvider from "../../context/dashboard-hooks";

const { Content, Sider } = AntLayout;

const Layout = () => {
//   const [siderCollapsed, setSiderCollapsed] = useState(false);

//   const onSiderCollapse = (siderCollapsed) => {
//     setSiderCollapsed(siderCollapsed);
//   };

  return (
    <AntLayout style={{ minHeight: "100vh" }}>
      <Sider
        theme="light"
        collapsible
        width={300}
        className="sider"
        trigger={null}
      >
        <div className="logo">
          <span className="logo-text">My Skincare Haul</span>
        </div>
        <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item
            key="1"
            className="menu-item"
            icon={<CrownOutlined />}
          >
            Dashboard
          </Menu.Item>
          <Menu.Item
            key="2"
            className="menu-item"
            icon={<ExperimentOutlined />}
          >
            My Routine
          </Menu.Item>
          <Menu.Item
            key="3"
            className="menu-item"
            icon={<StarOutlined />}
          >
            Favourite list
          </Menu.Item>
          <Menu.Item
            key="4"
            className="menu-item"
            icon={<StopOutlined />}
          >
            Block list
          </Menu.Item>
        </Menu>
      </Sider>
      {/* <AntLayout className="site-layout">
        <Content style={{ margin: "0 16px" }}>
          <DashboardProvider>
            <Dashboard />
          </DashboardProvider>
        </Content>
      </AntLayout> */}
    </AntLayout>
  );
};

export default Layout;
