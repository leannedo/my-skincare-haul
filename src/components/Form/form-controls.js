export default {
  product_name: {
    name: "product_name",
    label: "PRODUCT NAME",
    value: "",
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
    placeholder: "Input product's brand",
    valid: true,
    value: "",
    touched: false,
    validationRules: {
      minLength: 2,
    },
  },
  product_price: {
    name: "product_price",
    label: "PRICE",
    value: 0,
    valid: true,
  },
  start_date: {
    name: "start_date",
    label: "START DATE",
    value: null,
    placeholder: "Select date",
    valid: true,
  },
  target_treatment: {
    name: "target_treatment",
    label: "TARGET TREATMENT",
    mode: "tags",
    options: [
      {
        value: "acne",
        label: "acne",
      },
      {
        value: "wrinkle",
        label: "wrinkle",
      },
      {
        value: "oily_skin",
        label: "oily skin",
      },
    ],
    placeholder: "Select product's target treatment",
    valid: true,
  },
  category: {
    name: "category",
    label: "CATEGORY",
    placeholder: "Select category",

    options: [
      {
        value: "cleanser",
        label: "Cleanser",
      },
      {
        value: "toner",
        label: "Toner",
      },
      {
        value: "lotion",
        label: "Lotion",
      },
      {
        value: "sunscreen",
        label: "Sunscreen",
      },
      {
        value: "exfoliate",
        label: "Exfoliate",
      },
      {
        value: "serum",
        label: "Serum",
      },
      {
        value: "treatment",
        label: "Treatment",
      },
      {
        value: "moisturizer",
        label: "Moisturizer",
      },
    ],
    valid: false,
    validationRules: {
      isRequired: true,
    },
  },
};
