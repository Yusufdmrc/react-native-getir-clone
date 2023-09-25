import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  productItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    color: "gray",
    fontWeight: "bold",
    padding: 14,
  },
  productItem2: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
  },
});

export default styles;
