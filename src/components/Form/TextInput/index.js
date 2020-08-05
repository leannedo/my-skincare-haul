import React, { useState } from "react";
import { AutoComplete, Input } from "antd";
import "../Form.css";

const TextInput = ({ name, label, value, placeholder, changedHandler }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="product-form-input text-input">
      <label htmlFor={name}>{label}</label>
      <AutoComplete
        name={name}
        id={name}
        value={value}
        onChange={(value) => changedHandler(value, name)}
        onFocus={() => setIsEditing(true)}
        onBlur={() => setIsEditing(false)}
      >
        <Input
          placeholder={placeholder}
          onPressEnter={() => setIsEditing(false)}
          style={{
            ...{ border: "none" },
            ...(isEditing ? { boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.2)" } : {}),
          }}
        />
      </AutoComplete>
    </div>
  );
};

export default TextInput;
