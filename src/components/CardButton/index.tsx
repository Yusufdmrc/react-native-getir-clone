import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/cartActions";
import { Product } from "../../models";

type cartButtonType = {
  addItemToCart: (a: Product) => void;
  item: Product;
};

const index = ({ item, addItemToCart }: cartButtonType) => {
  return (
    <TouchableOpacity onPress={() => addItemToCart()} style={styles.container}>
      <View style={styles.button}>
        <Text style={styles.text}>Sepete Ekle</Text>
      </View>
    </TouchableOpacity>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product: Product) =>
      dispatch(actions.addToCart({ quantity: 1, product })),
  };
};

export default connect(null, mapDispatchToProps)(index);
