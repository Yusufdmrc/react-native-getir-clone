import React, { useState } from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";

const index = () => {
  const [details, setDetails] = useState<string[]>([
    "Sütlü kıtır çikolata ve badem parçacıklarıyla kaplı vanilya lezzeti",
    "İçindekiler",
    "Besin Değerleri",
    "Kullanım",
    "Ek Bilgiler",
  ]);

  const TextComponent = ({
    detail,
    index,
  }: {
    detail: string;
    index: number;
  }) => {
    return (
      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>{detail}</Text>
        {index != 0 && (
          <Feather name="chevron-down" size={24} color="#9f9f9f" />
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {details.map((item, index) => (
        <TextComponent key={index} index={index} detail={item} />
      ))}
    </View>
  );
};

export default index;
