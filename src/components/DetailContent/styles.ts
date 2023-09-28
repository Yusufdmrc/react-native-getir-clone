import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  price: { color: "#5D3EBD", fontWeight: "bold", fontSize: 20 },
  name: {
    fontSize: 16,
    marginTop: 12,
    fontWeight: "600",
  },
  quantity: {
    color: "#848897",
    fontWeight: "600",
    marginTop: 8,
    paddingBottom: 18,
  },
});

export default styles;
