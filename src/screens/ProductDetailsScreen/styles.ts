import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: { flex: 1 },
  detailText: {
    color: "#808B99",
    fontWeight: "600",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
});

export default styles;
