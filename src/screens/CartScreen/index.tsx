import React from "react";
import styles from "./styles";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import products from "../../../assets/products";
import CartItem from "../../components/CartItem";
import ProductItem from "../../components/ProductItem";
import { connect } from "react-redux";
import { Product } from "../../models";

const index = ({
  cartItems,
}: {
  cartItems: { product: Product; quantity: number }[];
}) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <FlatList
          data={cartItems}
          renderItem={({ item }) => <CartItem product={item.product} />}
        />
        <Text style={{ padding: 15, fontWeight: "bold", color: "#5d3ebd" }}>
          Önerilen Ürünler
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          bounces={true}
          style={{ backgroundColor: "#fff" }}
        >
          {products.map((item, index) => (
            <ProductItem key={index} item={item} />
          ))}
        </ScrollView>
      </ScrollView>
      <View style={styles.screenBottom}>
        <TouchableOpacity style={styles.btnLeft}>
          <Text style={styles.text}>Devam </Text>
        </TouchableOpacity>
        <View style={styles.btnRight}>
          <Text style={styles.price}>
            <Text>{"\u20BA"}</Text>
            24,00
          </Text>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

export default connect(mapStateToProps, null)(index);
