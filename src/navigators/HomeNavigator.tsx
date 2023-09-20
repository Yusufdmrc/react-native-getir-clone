import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CategoryScreen from "../screens/CategoryScreen";
import { Image, Text } from "react-native";

const Stack = createStackNavigator();

const HomeNavigator = () => {
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
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
