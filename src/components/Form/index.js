import React, { useState } from "react";
import Date from "../Form/Date/index";
import TextInput from "../Form/TextInput/index";
import PriceInput from "../Form/PriceInput/index";
import Select from "../Form/Select/index";
import "./Form.css";
import { Button } from "antd";
import formControls from "../../mock/form-controls.json";

const Form = () => {
  const [form] = useState(formControls);

  // const inputChangedHandler = (value, name) => {
  //   const updatedFormControls = { ...this.state.formControls };
  //   const updatedFormElement = { ...updatedFormControls[name] };
  //
  //   // update value
  //   updatedFormElement.value = value;
  //   updatedFormElement.touched = true;
  //   updatedFormElement.valid = validate(
  //     value,
  //     updatedFormElement.validationRules
  //   );
  //
  //   updatedFormControls[name] = updatedFormElement;
  //
  //   // update form state
  //   let formIsValid = true;
  //   formIsValid = Object.entries(updatedFormControls).every(
  //     ([key, value]) => value.valid && formIsValid
  //   );
  //
  //   this.setState({
  //     formControls: updatedFormControls,
  //     formIsValid: formIsValid,
  //   });
  // };
  //
  // const updateOptionHandler = (newOption, name) => {
  //   const { formControls } = this.state;
  //   const updatedFormControls = { ...formControls };
  //   const formElement = { ...updatedFormControls[name] };
  //
  //   // update options
  //   formElement.options = [...formElement.options, newOption];
  //
  //   updatedFormControls[name] = formElement;
  //   this.setState({ formControls: updatedFormControls });
  // };
  //
  // const sendFormData = () => {
  //   const productData = {};
  // };
  //
  // const formSubmitHandler = () => {
  //   alert("Success");
  // };

  const {
    product_name,
    brand,
    product_price,
    start_date,
    category,
    target_treatment,
  } = form;

  console.log(form);

  return (
    <div className="msh-form-container">
      <div className="msh-form-input-group">
        <div className="msh-product-cover">
          <img alt="example" src={require(`../../assets/prism.svg`)} />
        </div>
        <div className="product-form">
          <TextInput {...product_name} />
          <TextInput {...brand} />
          <PriceInput {...product_price} />
          <Date {...start_date} />
          <Select {...category} />
          <Select {...target_treatment} />
        </div>
      </div>
      <Button key="submit" type="primary">
        Create Product
      </Button>
    </div>
  );
};

export default Form;
