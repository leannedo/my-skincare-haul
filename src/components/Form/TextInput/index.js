import React, { Component } from "react";
import { Typography } from 'antd';

const { Text } = Typography;

class ProductName extends Component {
    state = {
        str: 'Product Name',
    };

    onChange = str => {
        console.log('Content change:', str);
        this.setState({ str });
    };

    render() {
        const text = {
            fontWeight: 'bold'
        }
        return (
            <>
                <br/>
                <Text style={text} editable={{ onChange: this.onChange }}>{this.state.str}</Text>
                <br/>
            </>
        );
    }
}

export default ProductName;