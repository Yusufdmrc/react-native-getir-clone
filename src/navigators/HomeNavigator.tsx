import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CategoryScreen from "../screens/CategoryScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import CartScreen from "../screens/CartScreen";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { connect } from "react-redux";
import * as actions from "../redux/actions/cartActions";
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
} from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Product } from "../models";

const Stack = createStackNavigator();

const { width, height } = Dimensions.get("window");

const MyStack = ({
  navigation,
  route,
  cartItems,
  clearCart,
}: {
  cartItems: { product: Product; quantity: number }[];
  clearCart: () => void;
}) => {
  const tabHiddenRoutes = ["ProductDetails", "CartScreen"];
  const [totalPrice, setTotalPrice] = useState<number>(0);

  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    console.log("Route Name is ", routeName);
    if (tabHiddenRoutes.includes(routeName)) {
      console.log("Kapat ", routeName);
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      console.log("Aç ", routeName);
      navigation.setOptions({ tabBarStyle: { display: "true" } });
    }
  }, [navigation, route]);

  const getProductPrice = () => {
    let total = 0;
    cartItems.forEach((cartItem) => {
      const price = (total += cartItem.product.price);
      setTotalPrice(price);
    });
  };

  useEffect(() => {
    getProductPrice();
  }, [cartItems, navigation]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTitle: () => (
            <Image
              source={require("../../assets/logo.png")}
              style={{ width: 80, height: 30 }}
            />
          ),
        }}
      />

      <Stack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTitle: () => (
            <Text style={{ color: "#fff", fontSize: 16 }}>Ürünler</Text>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("CartScreen")}
              style={{
                width: width * 0.22,
                height: 33,
                backgroundColor: "#fff",
                marginRight: width * 0.03,
                borderRadius: 9,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  width: 23,
                  height: 23,
                  marginLeft: 6,
                }}
                source={require("../../assets/cart.png")}
              />
              <View
                style={{
                  flex: 1,
                  height: 33,
                  borderTopRightRadius: 9,
                  borderBottomRightRadius: 9,
                  backgroundColor: "#F3EFFE",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ fontWeight: "bold", color: "#5D3EBD", fontSize: 12 }}
                >
                  <Text>{"\u20BA"}</Text>
                  {totalPrice.toFixed(2)}
                </Text>
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        component={ProductDetailsScreen}
        name="ProductDetails"
        options={{
          headerBackTitleVisible: false,
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", color: "#fff" }}>
              Ürün Detayı
            </Text>
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={{ paddingLeft: 8 }}
              onPress={() => navigation.goBack()}
            >
              <AntDesign name="close" size={24} color="#fff" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 12 }}>
              <AntDesign name="heart" size={24} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerTintColor: "#fff",
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "#fff" }}>
              Sepetim
            </Text>
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={{ paddingLeft: 6 }}
              onPress={() => navigation.goBack()}
            >
              <AntDesign name="close" size={25} color="#fff" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => clearCart()}
              style={{ paddingRight: 6 }}
            >
              <Feather name="trash-2" size={24} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
  };
};

export default function HomeNavigator({
  navigation,
  route,
  cartItems,
  clearCart,
}: {
  clearCart: () => void;
}) {
  return (
    <MyStack
      navigation={navigation}
      route={route}
      cartItems={cartItems}
      clearCart={clearCart}
    />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeNavigator);
