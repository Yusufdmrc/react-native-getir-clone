import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: height * 0.12,
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
  },
  button: {
    width: "90%",
    height: height * 0.06,
    backgroundColor: "#5D39C1",
    marginHorizontal: "5%",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default styles;
