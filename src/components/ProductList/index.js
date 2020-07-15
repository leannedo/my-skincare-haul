import React, {Component} from "react";
import ProductCard from "./ProductCard";

class ProductList extends Component {
    render() {
        return(
            <div>
                <h1>Product List</h1>
                <ProductCard/>
            </div>
        )
    }
}

export default ProductList;