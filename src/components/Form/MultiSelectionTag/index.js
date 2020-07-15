import React from "react";
import { Select } from 'antd';

const { Option } = Select;

const children = [];
const tags = ['acne', 'sebum', 'pore', 'dark spots', 'wrinkle', 'skin whitening']
for (let i = 0; i < tags.length; i++) {
    children.push(<Option key={i.toString} value={tags[i]}>{tags[i]}</Option>);
}

function handleChange(value) {
    console.log(`selected ${value}`);
}

const TargetTag = () => (
    <Select
        mode="multiple"
        style={{ width: '100%' }}
        placeholder="Product's target treatment"
        defaultValue={['acne', 'sebum']}
        onChange={handleChange}
    >
        {children}
    </Select>
);

export default TargetTag;