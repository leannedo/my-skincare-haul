import React, { Component } from "react";
import Date from "../Form/Date/index";
import TextInput from "../Form/TextInput/index";
import PriceInput from "../Form/PriceInput/index";
import Select from "../Form/Select/index";
import "./Form.css";
import { Button } from "antd";
import validate from "./../Form/validation";

class Form extends Component {
  state = {
    formControls: {
      // initial state of valid depends on whether the field is required
      // isRequired => valid = false and vice versa
      product_name: {
        name: "product_name",
        label: "PRODUCT NAME",
        placeholder: "Input product's name",
        valid: false,
        touched: false,
        validationRules: {
          minLength: 2,
          isRequired: true,
        },
      },
      brand: {
        name: "brand",
        label: "BRAND",
        placeholder: "Input brand",
        valid: true,
        touched: false,
        validationRules: {
          minLength: 2,
        },
      },
      product_price: {
        name: "product_price",
        label: "PRICE",
        defaultValue: 0.0,
        valid: true,
      },
      start_date: {
        name: "start_date",
        label: "START DATE",
        defaultValue: null,
        placeholder: "Select date",
        valid: true,
      },
      target_treatment: {
        name: "target_treatment",
        label: "TARGET TREATMENT",
        mode: "tags",
        options: [
          { value: "acne", label: "acne" },
          { value: "wrinkle", label: "wrinkle" },
          { value: "oily_skin", label: "oily skin" },
        ],
        placeholder: "Select product's target treatment",
        valid: true,
      },
      category: {
        name: "category",
        label: "CATEGORY",
        placeholder: "Select category",
        options: [
          { value: "cleanser", label: "Cleanser" },
          { value: "toner", label: "Toner" },
          { value: "lotion", label: "Lotion" },
          { value: "sunscreen", label: "Sunscreen" },
          { value: "exfoliate", label: "Exfoliate" },
          { value: "serum", label: "Serum" },
          { value: "treatment", label: "Treatment" },
          { value: "moisturizer", label: "Moisturizer" },
        ],
        valid: false,
        validationRules: {
          isRequired: true,
        },
      },
    },
    formIsValid: false,
  };

  inputChangedHandler = (value, name) => {
    const updatedFormControls = { ...this.state.formControls };
    const updatedFormElement = { ...updatedFormControls[name] };

    // update value
    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    updatedFormElement.valid = validate(
      value,
      updatedFormElement.validationRules
    );

    updatedFormControls[name] = updatedFormElement;

    // update form state
    let formIsValid = true;
    formIsValid = Object.entries(updatedFormControls).every(
      ([key, value]) => value.valid && formIsValid
    );

    this.setState({
      formControls: updatedFormControls,
      formIsValid: formIsValid,
    });
  };

  updateOptionHandler = (newOption, name) => {
    const { formControls } = this.state;
    const updatedFormControls = { ...formControls };
    const formElement = { ...updatedFormControls[name] };

    // update options
    formElement.options = [...formElement.options, newOption];

    updatedFormControls[name] = formElement;
    this.setState({ formControls: updatedFormControls });
  };

  sendFormData = () => {
    const productData = {};
  };

  formSubmitHandler = () => {
    alert("Success");
  };

  render() {
    const {
      formControls: {
        product_name,
        brand,
        product_price,
        start_date,
        category,
        target_treatment,
      },
      formIsValid,
    } = this.state;
    console.log(this.state.formControls);
    return (
      <div className="msh-form-container">
        <div className="msh-form-input-group">
          <div className="msh-product-cover">
            <img alt="example" src={require(`../../assets/prism.svg`)} />
          </div>
          <div className="product-form">
            <TextInput
              {...product_name}
              changedHandler={this.inputChangedHandler}
            />
            <TextInput {...brand} changedHandler={this.inputChangedHandler} />
            <PriceInput
              {...product_price}
              changedHandler={this.inputChangedHandler}
            />
            <Date {...start_date} changedHandler={this.inputChangedHandler} />
            <Select {...category} changedHandler={this.inputChangedHandler} />
            <Select
              {...target_treatment}
              changedHandler={this.inputChangedHandler}
            />
          </div>
        </div>
        <Button
          key="submit"
          type="primary"
          onClick={this.formSubmitHandler}
          disabled={!formIsValid}
        >
          Create Product
        </Button>
      </div>
    );
  }
}

export default Form;
