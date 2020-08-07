import React from "react";
import { Menu } from "antd";
import { useDashboard } from "../../../../context/dashboard-hooks";

const ControlMenu = ({ id, handleMenuClick }) => {
  const { editProduct, deleteProduct, duplicateProduct } = useDashboard();

  const editProductHandler = () => {
    handleMenuClick();
    setTimeout(() => editProduct(id), 100);
  };

  const duplicateProductHandler = () => {
    handleMenuClick();
    duplicateProduct(id);
  };

  const deleteProductHandler = () => {
    handleMenuClick();
    deleteProduct(id);
  };

  return (
    <Menu>
      <Menu.Item key="0">
        <a onClick={editProductHandler}>Edit</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a onClick={duplicateProductHandler}>Duplicate</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a onClick={deleteProductHandler}>Delete</a>
      </Menu.Item>
    </Menu>
  );
};

export default ControlMenu;
