import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavitator from "./src/navigators/RootNavitator";
import "react-native-gesture-handler";
import { LogBox } from "react-native";
import store from "./src/redux/store";
import { Provider } from "react-redux";

LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavitator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
