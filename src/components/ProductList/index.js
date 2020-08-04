import React from "react";
import ProductCard from "./ProductCard";
import { Row, Col } from "antd";
import { Empty } from "antd";

const ProductList = ({ products = [] }) => {
  const renderProducts = (products) => {
    if (!products || !products.length) {
      return <Empty />;
    }

    return products.map((product) => (
      <Col key={product.id} className="gutter-row" span={6}>
        <ProductCard {...product} />
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
