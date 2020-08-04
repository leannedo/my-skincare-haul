import React, { useState } from "react";
import ProductList from "../../components/ProductList";
import { StyleSheet, css } from "aphrodite";
import productsData from "./../../mock/products-data.json";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Modal from "../../components/Layout/Modal";
import Form from "../../components/Form";

const Dashboard = () => {
  const [products] = useState(productsData);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={css(styles.container)}>
      <h1 className={css(styles.title)}>Dashboard</h1>
      <ProductList products={products} />
      <Button
        type="primary"
        shape="circle"
        icon={<PlusOutlined className={css(styles.addIcon)} />}
        size="large"
        className={css(styles.addButton)}
        onClick={() => setShowModal(true)}
      />
      <Modal
        visibility={showModal}
        close={() => setShowModal(false)}
        width="60%"
        footer={null}
        wrapClassName="product-edit-modal"
      >
        <Form />
      </Modal>
    </div>
  );
};

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
