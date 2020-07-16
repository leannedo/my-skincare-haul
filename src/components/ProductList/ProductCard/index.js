import React from "react";
import { Card } from "antd";
import { StyleSheet, css } from "aphrodite";
import Controls from "../ProductCard/Controls/index";
import { Tag } from "antd";

const { Meta } = Card;

const ProductCard = ({ id, name, category, image, targets }) => (
  <Card
    style={{ width: 300, position: "relative" }}
    cover={<img alt="example" src={require(`../../../assets/${image}`)} />}
  >
    <Controls className={css(styles.controls)} />
    <Meta title={name} description={category} />
    <div className={css(styles.tags)}>
      {targets && targets.map((el) => <Tag color="#87d068">{el}</Tag>)}
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
    top: 20,
    right: 20,
  },
  tags: {
    marginTop: 16,
  },
});

export default ProductCard;
