import React from "react";
import { Image, Text, View, Dimensions } from "react-native";
import { Product } from "../../models";
import styles from "./styles";

const { height, width } = Dimensions.get("window");

type CartItemProps = {
  product: Product;
};

const index = ({ product }: CartItemProps) => {
  return (
    <View style={styles.productContainer}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image style={styles.img} source={{ uri: product.image }} />
          <View style={styles.productDetail}>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.quantity}>{product.quantity}</Text>
            <Text style={styles.price}>
              <Text>{"\u20BA"}</Text>
              {product.price}
            </Text>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Text>-</Text>
          </View>
          <View
            style={[
              styles.btn,
              {
                backgroundColor: "#5D3EBD",
                height: height * 0.036,
                justifyContent: "center",
              },
            ]}
          >
            <Text style={styles.count}>1</Text>
          </View>
          <View style={styles.btn}>
            <Text>+</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default index;
