import React from "react";
import ProductList from "../../components/ProductList";
import { StyleSheet, css } from "aphrodite";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Modal from "../../components/Layout/Modal";
import Form from "../../components/Form";
import { useDashboard } from "../../hooks/dashboard-hooks";

const Dashboard = () => {
  const { showModalHandler, closeModalHandler, showModal } = useDashboard();

  return (
    <div className={css(styles.container)}>
      <h1 className={css(styles.title)}>Dashboard</h1>
      <ProductList />
      <Button
        type="primary"
        shape="circle"
        icon={<PlusOutlined className={css(styles.addIcon)} />}
        size="large"
        className={css(styles.addButton)}
        onClick={() => showModalHandler()}
      />
      <Modal
        title="New Product"
        visibility={showModal}
        close={() => closeModalHandler()}
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
