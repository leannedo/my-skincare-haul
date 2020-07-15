import React from "react";
import { Layout, Menu } from 'antd';
import style from "../../constants/styleVariables";
import { StyleSheet, css } from 'aphrodite';
import Dashboard from "../../views/Dashboard/index";

const { Content, Sider } = Layout;

class App_Layout extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        return (
            <Layout style={{minHeight: "100vh"}}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className={css(styles.logo)}>My Skincare Haul</div>
                    <Menu defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" className={css(styles.menuItem)}>
                            My Haul
                        </Menu.Item>
                        <Menu.Item key="2">
                            My Routine
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Content style={{ margin: '0 16px' }}>
                        <Dashboard/>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        height: "32px",
        background: style.primaryColor,
        margin: "16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: style.primaryColor
    },
    layout: {
        minHeight: "100vh",
    },
    menuItem: {
        backgroundColor: "#fff"
    }
});

export default App_Layout;