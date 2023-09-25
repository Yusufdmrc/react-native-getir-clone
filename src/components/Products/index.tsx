import React from "react";
import styles from "./styles";
import { Text, View } from "react-native";
import ProductItem from "../ProductItem";
import products from "../../../assets/products";

const index = () => {
  return (
    <View>
      <View style={styles.productItem}>
        {products.slice(0, 2).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>

      <Text style={styles.text}>Çubuk</Text>

      <View style={styles.productItem2}>
        {products.slice(2).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};

export default index;
