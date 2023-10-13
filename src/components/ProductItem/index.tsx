import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { Entypo } from "@expo/vector-icons";
import { Product } from "../../models";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/cartActions";

type productItemType = {
  item: Product;
  addItemToCart: (a: Product) => void;
};

const index = ({ item, addItemToCart }: productItemType) => {
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
          {item.price}
        </Text>
        <Text style={styles.discountPrice}>
          <Text>{"\u20BA"}</Text>
          {item.discountPrice}
        </Text>
      </View>

      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.amount}>{item.miktar}</Text>
      <TouchableOpacity
        onPress={() => {
          addItemToCart(item);
        }}
        style={styles.plus}
      >
        <Entypo name="plus" size={22} color="#5D3EBD" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const mapDistpatchToProps = (dispatch) => {
  return {
    addItemToCart: (product: Product) => {
      dispatch(actions.addToCart({ quantity: 1, product }));
    },
  };
};

export default connect(null, mapDistpatchToProps)(index);
