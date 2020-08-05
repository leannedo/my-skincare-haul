import React, { createContext, useState, useContext } from "react";
import productsData from "./../mock/products-data.json";
import uuid from "react-uuid";

const DashboardContext = createContext();
export const useDashboard = () => useContext(DashboardContext);

const DashboardHooks = ({ children }) => {
  const [products, setProducts] = useState(productsData);
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const addProduct = (form, callback) => {
    const newProducts = [
      ...products,
      {
        id: uuid(),
        product_name: form.product_name.value,
        category: {
          id: uuid(),
          technical_name: "makeup_remover",
          name: "Makeup Remover",
        },
        image: "001-serum.svg",
        targets: ["acne", "pore"],
      },
    ];

    // TODO: POST to /products API
    // axios.post('/products', {form})
    //   .then(//success callback())
    //   .catch(//error)

    setProducts(newProducts);
    closeModalHandler();
    callback();
  };

  const editProduct = () => {
    showModalHandler();
  };

  return (
    <DashboardContext.Provider
      value={{
        products,
        showModal,
        showModalHandler,
        closeModalHandler,
        addProduct,
        editProduct,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardHooks;
