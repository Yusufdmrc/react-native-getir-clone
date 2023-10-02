import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavitator from "./src/navigators/RootNavitator";
import "react-native-gesture-handler";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function App() {
  return (
    <NavigationContainer>
      <RootNavitator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
