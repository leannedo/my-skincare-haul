import React, { useState, useEffect } from "react";
import Date from "../Form/Date/index";
import TextInput from "../Form/TextInput/index";
import PriceInput from "../Form/PriceInput/index";
import Select from "../Form/Select/index";
import { Skeleton } from "antd";
import "./Form.css";
import { Button } from "antd";
import initialFormControls from "./form-controls.js";
import validate from "./validation";
import { useDashboard } from "../../context/dashboard-hooks";

const Form = () => {
  const {
    putProduct,
    editing,
    currentProductId,
    getProductById,
  } = useDashboard();

  const [form, setForm] = useState(initialFormControls);
  const [formValid, setFormValid] = useState(false);
  const [isMapping, setIsMapping] = useState(false);

  const inputChangedHandler = (value, name) => {
    const updatedFormElement = { ...form[name] };
    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    updatedFormElement.valid = validate(
      value,
      updatedFormElement.validationRules
    );

    setForm({ ...form, [name]: updatedFormElement });
  };

  const checkFormValid = () => {
    let formValid = true;
    return Object.entries(form).every(
      ([key, value]) => value.valid && formValid
    );
  };

  const resetForm = () => {
    setForm(initialFormControls);
    setFormValid(false);
  };

  const formSubmitHandler = (e) => {
    if (!formValid) {
      return;
    }
    putProduct(form, resetForm);
  };

  const mapProductDataToForm = () => {
    if (!currentProductId) {
      return;
    }

    setIsMapping(true);

    const product = getProductById(currentProductId);

    const updatedForm = { ...initialFormControls };

    for (const property in product) {
      if (property in updatedForm) {
        if (property === "category") {
          updatedForm.category = {
            ...updatedForm.category,
            value: product.category.technical_name,
            valid: true,
          };
          continue;
        }
        updatedForm[property] = {
          ...updatedForm[property],
          value: product[property],
          valid: true,
        };
      }
    }

    setForm(updatedForm);

    setTimeout(() => setIsMapping(false), 200);
  };

  useEffect(resetForm, [editing]);
  useEffect(mapProductDataToForm, [currentProductId]);
  useEffect(() => setFormValid(checkFormValid()), [form]);

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
        <div className="product-form-wrapper">
          {isMapping ? (
            <>
              <div style={{ marginBottom: 30 }}>
                <Skeleton.Input
                  style={{ width: 200 }}
                  active={true}
                  size="small"
                />
              </div>

              <div style={{ marginBottom: 30 }}>
                <Skeleton.Input
                  style={{ width: 250 }}
                  active={true}
                  size="small"
                />
              </div>

              <div style={{ marginBottom: 30 }}>
                <Skeleton.Input
                  style={{ width: 350 }}
                  active={true}
                  size="small"
                />
              </div>

              <div style={{ marginBottom: 30 }}>
                <Skeleton.Input
                  style={{ width: 400 }}
                  active={true}
                  size="small"
                />
              </div>

              <div style={{ marginBottom: 30 }}>
                <Skeleton.Input
                  style={{ width: 300 }}
                  active={true}
                  size="small"
                />
              </div>

              <div style={{ marginBottom: 30 }}>
                <Skeleton.Input
                  style={{ width: 450 }}
                  active={true}
                  size="small"
                />
              </div>
            </>
          ) : (
            <div className="product-form">
              <TextInput
                {...product_name}
                changedHandler={inputChangedHandler}
              />
              <TextInput {...brand} changedHandler={inputChangedHandler} />
              <PriceInput
                {...product_price}
                changedHandler={inputChangedHandler}
              />
              <Date {...start_date} changedHandler={inputChangedHandler} />
              <Select {...category} changedHandler={inputChangedHandler} />
              <Select
                {...target_treatment}
                changedHandler={inputChangedHandler}
              />
            </div>
          )}
        </div>
      </div>
      <Button
        disabled={!formValid}
        key="submit"
        type="primary"
        onClick={formSubmitHandler}
      >
        {editing ? "Edit Product" : "Create Product"}
      </Button>
    </div>
  );
};

export default Form;
