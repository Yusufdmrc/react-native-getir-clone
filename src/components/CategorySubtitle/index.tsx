import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Text } from "react-native";

const TypeBox = ({ item, active }: { item: string; active: string }) => {
  return (
    <TouchableOpacity
      style={[
        styles.typeBoxContainer,
        item == active ? styles.typeBoxActive : styles.typeBoxInActive,
      ]}
    >
      <Text style={[styles.typeBoxText, item == active && styles.activeText]}>
        {item}
      </Text>
    </TouchableOpacity>
  );
};

const index = () => {
  const [category, setCategory] = useState<String>("Birlikte İyi Gider");
  return (
    <ScrollView
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
    >
      {["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"].map(
        (item) => (
          <TypeBox item={item} active={category} />
        )
      )}
    </ScrollView>
  );
};

export default index;
