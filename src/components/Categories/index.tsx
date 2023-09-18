import React, { useState } from "react";
import { View } from "react-native";
import categories from "../../../assets/categories";
import styles from "./styles";
import { Category } from "../../models";
import CategoryItem from "../CategoryItem";

const index = () => {
  const [categoriess, setCategoriess] = useState<Category[]>(categories);
  return (
    <View style={styles.container}>
      <View style={styles.categories}>
        {categoriess.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};

export default index;
