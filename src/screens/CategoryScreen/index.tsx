import React, { useState } from "react";
import { ScrollView } from "react-native";
import CategoryDetails from "../../components/CategoryDetails";
import { Category } from "../../models";

const index = (props) => {
  const [category, , setCategory] = useState(props.route.params.category);
  return (
    <ScrollView>
      <CategoryDetails categoryy={category} />
    </ScrollView>
  );
};

export default index;
