import React, { useState } from "react";
import { ScrollView } from "react-native";
import CategoryTitle from "../../components/CategoryTitle";
import CategorySubtitle from "../../components/CategorySubtitle";

const index = (props) => {
  const [category, , setCategory] = useState(props.route.params.category);
  return (
    <ScrollView>
      <CategoryTitle categoryy={category} />
      <CategorySubtitle />
    </ScrollView>
  );
};

export default index;
