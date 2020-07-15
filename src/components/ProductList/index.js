import React from "react";
import ProductCard from "./ProductCard";
import { Row, Col } from "antd";
import { Empty } from "antd";

const ProductList = ({ products }) => {
  const renderProducts = (products) => {
    if (!products) {
      return <Empty />;
    }

    return products.map((el, i) => (
      <Col className="gutter-row" span={6} key={el.id}>
        <ProductCard {...el} />
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
