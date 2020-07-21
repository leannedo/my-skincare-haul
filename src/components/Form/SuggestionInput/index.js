import React, { useState } from "react";
import { Select, Input } from "antd";
const { Option } = Select;

const SuggestionInput = ({
  name,
  value,
  label,
  defaultValue,
  placeholder,
  options,
  changedHandler,
}) => {
  const [addedOption, setAddedOption] = useState("");

  const addOptionHandler = () => {
    if (!addedOption) {
      return;
    }
    const updatedOptions = [...options, addedOption];
    console.log(updatedOptions);
  };

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Select
        id={name}
        style={{ width: 240 }}
        placeholder={placeholder}
        dropdownRender={(menu) => (
          <div>
            {menu}
            <div style={{ display: "flex", flexWrap: "nowrap", padding: 8 }}>
              <Input
                style={{ flex: "auto" }}
                value={addedOption}
                onChange={(e) => {
                  setAddedOption(e.target.value);
                }}
              />
              <a
                style={{
                  flex: "none",
                  padding: "8px",
                  display: "block",
                  cursor: "pointer",
                }}
                onClick={addOptionHandler}
              >
                Add item
              </a>
            </div>
          </div>
        )}
      >
        {options.map((item) => (
          <Option key={item}>{item}</Option>
        ))}
      </Select>
    </>
  );
};

export default SuggestionInput;
