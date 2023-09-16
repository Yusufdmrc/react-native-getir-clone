import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { Entypo } from "@expo/vector-icons";

function index() {
  return (
    <View style={styles.header}>
      <View style={styles.HeaderLeft}>
        <Image
          style={styles.image}
          source={{ uri: "https://cdn.getir.com/misc/emoji/house.png" }}
        />
        <View style={styles.HeaderLeftView}>
          <Text style={styles.textTitle}>Ev</Text>
          <Text style={styles.textAdress}>
            Aşkale Sok. Kurtköy Mahallesi...
          </Text>
          <Entypo name="chevron-right" size={21} color="5D3EBD" />
        </View>
      </View>
      <View style={styles.HeaderRight}>
        <Text style={styles.tvs}>TVS</Text>
        <Text style={styles.minute}>
          13<Text style={styles.span}>dk</Text>
        </Text>
      </View>
    </View>
  );
}

export default index;
