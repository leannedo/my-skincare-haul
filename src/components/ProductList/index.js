import React from "react";
import ProductCard from "./ProductCard";
import { Row, Col } from "antd";

const ProductList = ({ products }) => {
  const renderProducts = (products) => {
    if (!products) {
      return;
    }
    const [a, ...rest] = products;

    return products.map((el, i) => (
      <Col className="gutter-row" span={6} key={i}>
        <ProductCard {...rest} />
      </Col>
    ));
  };

  return (
    <div>
      <Row gutter={16}>{renderProducts(products)}</Row>
    </div>
  );
};

export default ProductList;
