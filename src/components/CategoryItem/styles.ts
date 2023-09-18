import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: width * 0.25,
    height: height * 0.14,
    marginTop: 10,
  },
  image: {
    width: width * 0.18,
    height: height * 0.1,
    borderRadius: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
    color: "#616161",
  },
});

export default styles;
