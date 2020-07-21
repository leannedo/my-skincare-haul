import React, { Component } from "react";
import ProductList from "../../components/ProductList";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { StyleSheet, css } from "aphrodite";
import Modal from "../../components/Layout/Modal/index";
import Form from "../../components/Form/index";

class Dashboard extends Component {
  state = {
    products: [
      {
        id: "a1",
        product_name: "Paula's Choice BHA",
        // category: {
        //   id: "1",
        //   technical_name: "makeup_remover",
        //   name: "Makeup Remover",
        // },
        category: "exfoliate",
        image: "001-serum.svg",
        targets: ["acne", "pore"],
      },
      {
        id: "a2",
        product_name: "Cerave Cleanser",
        category: "cleanser",
        image: "001-serum.svg",
        targets: ["oily skin", "sebum"],
      },
    ],
    categories: [
      {
        id: "1",
        technical_name: "makeup_remover",
        name: "Makeup Remover",
      },
      {
        id: "1",
        technical_name: "makeup_remover",
        name: "Makeup Remover",
      },
    ],
    productFormData: {},
    showModal: false,
  };

  // fetchProducts = () => {
  //   // Todo calling API
  //
  //   const result = [];
  //
  //   // const products = mapProducts(result);
  //   // this.setState({ products: products });
  // };
  //
  // mapProducts = (products) => {
  //   // return products.map(el => el);
  //   // return [];
  // };
  //
  // getFormData = (formData) => {
  //   this.setState();
  // };
  //
  putProducts = (formData) => {
    const productData = this.getFormData();

    // TODO: PUT to api

    const res = {};

    this.setState({ products: [...this.state.products, res] });
  };

  // removeProduct = (productId) => {
  //   // TODO: DELETE to api
  // };
  showModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
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
          onClick={this.showModal}
        />

        <Modal
          title="New Product"
          visibility={this.state.showModal}
          close={this.closeModal}
          width="60%"
          footer={null}
          wrapClassName="product-edit-modal"
        >
          <Form />
        </Modal>
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
