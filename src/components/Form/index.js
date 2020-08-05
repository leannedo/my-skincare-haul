import React, { useState } from "react";
import Date from "../Form/Date/index";
import TextInput from "../Form/TextInput/index";
import PriceInput from "../Form/PriceInput/index";
import Select from "../Form/Select/index";
import "./Form.css";
import { Button } from "antd";
import initialFormControls from "./form-controls.js";
import validate from "./validation";
import { useDashboard } from "../../hooks/dashboard-hooks";

const Form = () => {
  const { addProduct, editProduct } = useDashboard();

  const [form, setForm] = useState(initialFormControls);
  const [formValid, setFormValid] = useState(false);

  const inputChangedHandler = (value, name) => {
    const updatedFormElement = { ...form[name] };
    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    updatedFormElement.valid = validate(
      value,
      updatedFormElement.validationRules
    );

    setForm({ ...form, [name]: updatedFormElement });
    setFormValid(checkFormValid());
  };

  const checkFormValid = () => {
    let formValid = true;
    return Object.entries(form).every(
      ([key, value]) => value.valid && formValid
    );
  };

  const resetForm = () => {
    setForm(initialFormControls);
  };

  const formSubmitHandler = (e) => {
    if (!formValid) {
      return;
    }

    addProduct(form, resetForm);
  };

  const {
    product_name,
    brand,
    product_price,
    start_date,
    category,
    target_treatment,
  } = form;

  return (
    <div className="msh-form-container">
      <div className="msh-form-input-group">
        <div className="msh-product-cover">
          <img alt="example" src={require(`../../assets/prism.svg`)} />
        </div>
        <div className="product-form">
          <TextInput {...product_name} changedHandler={inputChangedHandler} />
          <TextInput {...brand} changedHandler={inputChangedHandler} />
          <PriceInput {...product_price} changedHandler={inputChangedHandler} />
          <Date {...start_date} changedHandler={inputChangedHandler} />
          <Select {...category} changedHandler={inputChangedHandler} />
          <Select {...target_treatment} changedHandler={inputChangedHandler} />
        </div>
      </div>
      <Button key="submit" type="primary" onClick={formSubmitHandler}>
        Create Product
      </Button>
    </div>
  );
};

export default Form;
