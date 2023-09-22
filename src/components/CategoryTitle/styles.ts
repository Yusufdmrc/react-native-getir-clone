import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: height * 0.065,
    backgroundColor: "#7849F7",
  },
});

export default styles;
