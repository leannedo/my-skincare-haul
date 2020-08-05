import React from "react";
import { Select as AntSelect } from "antd";

const Select = ({
  name,
  label,
  mode,
  value,
  options,
  placeholder,
  changedHandler,
}) => {
  const onMultipleSelect = (selectedValue) => {
    const currentValue = value || [];
    const updatedValue = [...currentValue, selectedValue];
    changedHandler(updatedValue, name);
  };

  const onMultipleDeselect = (deselectedValue) => {
    const currentValue = value || [];
    const updatedValue = currentValue.filter((el) => el !== deselectedValue);
    changedHandler(updatedValue, name);
  };

  const isMultipleSelection = mode === "tags" || mode === "multiple";

  return (
    <div className="product-form-input">
      <label htmlFor={name}>{label}</label>
      <br />
      <AntSelect
        id={name}
        mode={mode}
        placeholder={placeholder}
        options={options}
        style={{ width: 300 }}
        onSelect={
          isMultipleSelection
            ? onMultipleSelect
            : (value) => changedHandler(value, name)
        }
        onDeselect={
          isMultipleSelection
            ? onMultipleDeselect
            : (value) => changedHandler(value, name)
        }
        value={value}
      />
      <br />
    </div>
  );
};

export default Select;
