import React from "react";
import { TouchableOpacity, Image, Text, Dimensions } from "react-native";
import styles from "./styles";
import { Category } from "../../models";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

type categoryItemProps = {
  item: Category;
};

const index = ({ item }: categoryItemProps) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CategoryScreen", { category: item })}
      style={styles.container}
    >
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
