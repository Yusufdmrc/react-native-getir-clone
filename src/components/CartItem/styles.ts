import { Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    height: height * 0.13,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: width * 0.05,
  },
  img: {
    width: height * 0.09,
    height: height * 0.09,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  productDetail: {
    marginLeft: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: "700",
  },
  quantity: {
    fontSize: 13,
    color: "#848897",
    marginTop: 3,
    fontWeight: "600",
  },
  price: {
    color: "#5D3EBD",
    marginTop: 3,
    fontWeight: "bold",
  },
  btnContainer: {
    width: width * 0.22,
    height: height * 0.036,
    borderColor: "lightgrey",
    borderWidth: 0.5,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  btn: {
    flex: 1,
    alignItems: "center",
  },
  count: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
});

export default styles;
