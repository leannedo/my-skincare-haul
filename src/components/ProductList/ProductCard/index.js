import React from "react";
import { Card } from "antd";
import { StyleSheet, css } from "aphrodite";
import Controls from "../ProductCard/Controls/index";
import { Tag } from "antd";

const { Meta } = Card;

const ProductCard = ({ id, product_name, category, image, targets }) => (
  <Card
    key={id}
    style={{ position: "relative" }}
    cover={
      <div style={{ background: "#eaf5f8", padding: 50 }}>
        <img alt="example" src={require(`../../../assets/${image}`)} />
      </div>
    }
  >
    <Controls className={css(styles.controls)} />
    <Meta title={product_name} description={category} />
    <div className={css(styles.tags)}>
      {targets &&
        targets.map((el) => (
          <Tag key={el + "1"} color="#87d068">
            {el}
          </Tag>
        ))}
    </div>
  </Card>
);

const styles = StyleSheet.create({
  productCard: {
    width: "300px",
  },
  input: {
    outline: "none",
    textTransform: "bold",
  },
  img: {
    width: 200,
    height: 200,
  },
  controls: {
    position: "absolute",
    top: 6,
    right: 10,
  },
  tags: {
    marginTop: 16,
  },
});

export default ProductCard;
