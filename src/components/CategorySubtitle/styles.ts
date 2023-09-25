import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: height * 0.072,
    flexDirection: "row",
    paddingVertical: height * 0.014,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  typeBoxContainer: {
    height: height * 0.044,
    paddingHorizontal: 10,
    marginRight: 12,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 6,
  },
  typeBoxActive: {
    backgroundColor: "#5C5EBC",
  },
  typeBoxInActive: {
    borderWidth: 0.2,
    borderColor: "F0EFF7",
  },
  typeBoxText: {
    color: "#7849F7",
    fontSize: 12,
    fontWeight: "700",
  },
  activeText: {
    color: "#fff",
  },
});

export default styles;
