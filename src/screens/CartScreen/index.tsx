import React from "react";
import styles from "./styles";
import { FlatList, Text, View } from "react-native";
import products from "../../../assets/products";
import CartItem from "../../components/CartItem";

const index = () => {
  return (
    <FlatList
      data={products.slice(3, 4)}
      renderItem={({ item }) => <CartItem product={item} />}
    />
  );
};

export default index;
