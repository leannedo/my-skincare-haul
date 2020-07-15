import React, { Component } from "react";
import ProductList from "../../components/ProductList";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { StyleSheet, css } from "aphrodite";

class Dashboard extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <h1 className={css(styles.title)}>Dashboard</h1>
        <ProductList products={Array.from(Array(100).keys())} />
        <Button
          type="primary"
          shape="circle"
          icon={<PlusOutlined className={css(styles.addIcon)} />}
          size="large"
          className={css(styles.addButton)}
        />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 32,
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  title: {
    fontSize: 48,
    fontWeight: 700,
    marginTop: 16,
  },
  addIcon: {
    fontSize: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  addButton: {
    position: "fixed",
    bottom: 40,
    right: 40,
    width: 60,
    height: 60,
  },
});

export default Dashboard;
