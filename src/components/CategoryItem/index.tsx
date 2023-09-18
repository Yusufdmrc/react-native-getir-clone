import React from "react";
import { TouchableOpacity, Image, Text, Dimensions } from "react-native";
import styles from "./styles";
import { Category } from "../../models";

const { width, height } = Dimensions.get("window");

type categoryItemProps = {
  item: Category;
};

const index = ({ item }: categoryItemProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: item.src,
        }}
      />
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default index;
