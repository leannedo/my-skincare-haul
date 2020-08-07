import React, { createContext, useState, useContext, useEffect } from "react";
import productsData from "../mock/products-data.json";
import uuid from "react-uuid";

const DashboardContext = createContext();
export const useDashboard = () => useContext(DashboardContext);

const DashboardHooks = ({ children }) => {
  const [products, setProducts] = useState(productsData);
  const [isModalShown, setIsModalShown] = useState(false);
  const [currentProductId, setCurrentProductId] = useState("");
  const [editing, setEditing] = useState(false);

  const showModalHandler = () => {
    setIsModalShown(true);
  };

  const closeModalHandler = () => {
    setIsModalShown(false);
  };

  const putProduct = (form, callback) => {
    const newProduct = {
      id: currentProductId || uuid(),
      product_name: form.product_name.value,
      category: {
        id: uuid(),
        technical_name: form.category.value,
        name: form.category.value,
      },
      image: "001-serum.svg",
      target_treatment: form.target_treatment.value,
    };

    if (currentProductId) {
      setProducts(
        products.map((product) =>
          product.id === currentProductId ? newProduct : product
        )
      );
    } else {
      setProducts([...products, newProduct]);
    }

    // TODO: POST to /products API
    // axios.post('/products', {form})
    //   .then(//success callback())
    //   .catch(//error)

    setCurrentProductId("");
    closeModalHandler();
    callback();
  };

  const getProductById = (id) => {
    return products.find((product) => product.id === id);
  };

  const editProduct = (id) => {
    setEditing(true);
    setCurrentProductId(id);
    showModalHandler();
  };

  const createProduct = () => {
    setEditing(false);
    showModalHandler();
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const duplicateProduct = (id) => {
    setCurrentProductId(id);
    const newProduct = getProductById(id);
    setProducts([...products, { ...newProduct, id: uuid() }]);
    setCurrentProductId("");
  };

  return (
    <DashboardContext.Provider
      value={{
        products,
        isModalShown,
        showModalHandler,
        closeModalHandler,
        putProduct,
        editing,
        editProduct,
        deleteProduct,
        duplicateProduct,
        createProduct,
        currentProductId,
        getProductById,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardHooks;
