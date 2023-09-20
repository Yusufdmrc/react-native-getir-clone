import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import HomeNavigator from "./HomeNavigator";
import { TouchableOpacity } from "react-native";

const RootNavitator = () => {
  const CustomTabBar = ({ children }) => {
    return (
      <TouchableOpacity
        style={{
          width: 60,
          height: 60,
          marginTop: -10,
          backgroundColor: "#5C3EBC",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 35,
        }}
      >
        <Entypo name="list" size={34} color="#FFD00C" />
      </TouchableOpacity>
    );
  };

  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#5C3EBC",
        tabBarInactiveTintColor: "#959595",
        headerShown: false,
        tabBarStyle: {
          height: 75,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="search1" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ props }) => <CustomTabBar {...props} />,
        }}
      />
      <Tab.Screen
        name="User"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Gift"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="gift" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavitator;
