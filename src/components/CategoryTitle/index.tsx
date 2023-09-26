import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import { Category } from "../../models";
import categories from "../../../assets/categories";
import CategoryBox from "../CategoryBox";

const index = ({ categoryy }: { categoryy: Category }) => {
  const [category, setCategory] = useState<Category[]>(categories);
  return (
    <ScrollView
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
    >
      {categories.map((item) => (
        <CategoryBox key={item.id} item={item} active={categoryy} />
      ))}
    </ScrollView>
  );
};

export default index;
