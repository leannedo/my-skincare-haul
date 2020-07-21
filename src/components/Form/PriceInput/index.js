import React, { useState } from "react";
import { InputNumber } from "antd";

const PriceInput = ({ name, label, defaultValue, changedHandler }) => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="product-form-input">
      <label htmlFor={name}>{label}</label>
      <div
        onFocus={() => setIsEditing(true)}
        onBlur={() => setIsEditing(false)}
      >
        <span> &#8364; </span>
        <InputNumber
          id={name}
          step={0.1}
          min={0.0}
          defaultValue={defaultValue}
          onChange={(value) => changedHandler(value, name)}
          style={{
            ...{ border: "none" },
            ...(isEditing ? { boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.2)" } : {}),
          }}
        />
      </div>
    </div>
  );
};

export default PriceInput;
