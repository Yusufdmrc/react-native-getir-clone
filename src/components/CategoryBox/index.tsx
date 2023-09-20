import React from "react";
import { Category } from "../../models";
import { Text, View } from "react-native";

const index = ({ item, active }: { item: Category; active: Category }) => {
  return (
    <View
      style={[
        {
          paddingHorizontal: 9,
          flexDirection: "row",
          alignItems: "center",
        },
        item.name == active.name && {
          borderBottomColor: "#FFD00C",
          borderBottomWidth: 2.5,
        },
      ]}
    >
      <Text style={{ color: "#fff", fontWeight: "600", fontSize: 14 }}>
        {item.name}
      </Text>
    </View>
  );
};

export default index;
