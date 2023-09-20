import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import { Image } from "react-native";

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
    </Stack.Navigator>
  );
};

export default HomeNavigator;
