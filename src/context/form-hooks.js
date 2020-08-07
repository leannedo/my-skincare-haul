import React, { createContext, useState, useContext } from "react";
import productsData from "./../mock/products-data.json";

const FormContext = createContext();
export const useForm = () => useContext(FormContext);

const FormHooks = ({ children }) => {
  return <FormContext.Provider value={}>{children}</FormContext.Provider>;
};

export default FormHooks;
