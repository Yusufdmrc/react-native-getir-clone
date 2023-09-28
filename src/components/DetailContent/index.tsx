import React from "react";
import styles from "./styles";
import { View, Text } from "react-native";

type DetailContentProps = {
  price: number;
  name: string;
  quantity: string;
};

const index = ({ price, quantity, name }: DetailContentProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.price}>
        <Text>{"\u20BA"}</Text>
        {price}
      </Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.quantity}>{quantity}</Text>
    </View>
  );
};

export default index;
