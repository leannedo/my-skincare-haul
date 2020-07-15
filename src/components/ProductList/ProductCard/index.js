import React from "react";
import { Card } from 'antd';
import { Switch } from 'antd';
import { Input } from 'antd';
import { InputNumber } from 'antd';
import StatusTag from "./ProductCardElement/StatusTag";
import Category from "../../Form/InputSuggestion";
import TargetTag from "../../Form/MultiSelectionTag";
import ProductName from "../../Form/TextInput";
import Brand from "./ProductCardElement/Brand";

const index = (props) => (
    <Card style={productCard}>
        <ProductName/>
        <Brand/>
        <InputNumber max={1000} min={0} defaultValue={20}/><span> €</span>
        <Category/>
        <TargetTag />
    </Card>
)

const productCard = {
    width: '300px',
    marginLeft: '50px'
}

const input = {
    outline: 'none',
    textTransform: 'bold'
}

export default index;