import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { Entypo } from "@expo/vector-icons";
import { Product } from "../../models";
import { useNavigation } from "@react-navigation/native";

type productItemType = {
  item: Product;
};

const index = ({ item }: productItemType) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetails", { product: item })}
      style={styles.container}
    >
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />
      <View style={styles.content}>
        <Text style={styles.price}>
          <Text>{"\u20BA"}</Text>
          {item.fiyat}
        </Text>
        <Text style={styles.discountPrice}>
          <Text>{"\u20BA"}</Text>
          {item.fiyatIndirimli}
        </Text>
      </View>

      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.amount}>{item.miktar}</Text>
      <View style={styles.plus}>
        <Entypo name="plus" size={22} color="#5D3EBD" />
      </View>
    </TouchableOpacity>
  );
};

export default index;
