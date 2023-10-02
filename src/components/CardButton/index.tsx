import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const index = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.button}>
        <Text style={styles.text}>Sepete Ekle</Text>
      </View>
    </TouchableOpacity>
  );
};

export default index;
