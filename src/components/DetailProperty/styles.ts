import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: "#fff",
  },
  detailsContainer: {
    paddingVertical: 12,
    borderBottomWidth: 0.4,
    borderBottomColor: "lightgray",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  detailText: {
    color: "#687482",
    fontSize: 13,
    fontWeight: "500",
  },
});

export default styles;
