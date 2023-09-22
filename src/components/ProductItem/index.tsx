import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { Entypo } from "@expo/vector-icons";

const index = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://cdn.getir.com/product/5ced4830d349d10001e7055f_tr_1584536178243.jpeg",
        }}
      />
      <View style={styles.content}>
        <Text style={styles.price}>
          <Text>{"\u20BA"}</Text>15.99
        </Text>
        <Text style={styles.discountPrice}>
          <Text>{"\u20BA"}</Text>12.45
        </Text>
      </View>

      <Text style={styles.productName}>Granny Smith Elma</Text>
      <Text style={styles.amount}>1kg</Text>
      <View style={styles.plus}>
        <Entypo name="plus" size={22} color="#5D3EBD" />
      </View>
    </TouchableOpacity>
  );
};

export default index;
