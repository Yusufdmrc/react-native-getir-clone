import React, { useState } from "react";
import { ScrollView } from "react-native";
import CategoryTitle from "../../components/CategoryTitle";
import CategorySubtitle from "../../components/CategorySubtitle";
import Products from "../../components/Products";

const index = (props) => {
  const [category, , setCategory] = useState(props.route.params.category);
  return (
    <ScrollView>
      <CategoryTitle categoryy={category} />
      <CategorySubtitle />
      <Products />
    </ScrollView>
  );
};

export default index;
