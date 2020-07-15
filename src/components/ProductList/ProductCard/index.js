import React from "react";
import { Card } from "antd";
import Category from "../../Form/InputSuggestion";
import TargetTag from "../../Form/MultiSelectionTag";
import ProductName from "../../Form/TextInput";
import bottle from "../../../assets/cosmetic_bottle.jpg";
import { StyleSheet, css } from "aphrodite";

const ProductCard = ({ id, name, category, image }) => (
  <Card className={css(styles.productCard)}>
    <img src={bottle} alt="cosmetic_bottle" className={css(styles.img)} />
    <div>{name}</div>
    <div>{category}</div>
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
});

export default ProductCard;
