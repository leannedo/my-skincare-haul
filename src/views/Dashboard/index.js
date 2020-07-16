import React, { Component } from "react";
import ProductList from "../../components/ProductList";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { StyleSheet, css } from "aphrodite";

class Dashboard extends Component {
  state = {
    products: [
      {
        id: "a1",
        name: "Paula's Choice BHA",
        category: "exfoliate",
        image: "cosmetic_bottle.jpg",
        targets: ["acne", "pore"],
      },
      {
        id: "a2",
        name: "Cerave Cleanser",
        category: "cleanser",
        image: "cosmetic_bottle.jpg",
        targets: ["oily skin", "sebum"],
      },
    ],
  };

  render() {
    return (
      <div className={css(styles.container)}>
        <h1 className={css(styles.title)}>Dashboard</h1>
        <ProductList products={this.state.products} />
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
