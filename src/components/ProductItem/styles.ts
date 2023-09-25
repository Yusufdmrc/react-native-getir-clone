import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  image: {
    width: width * 0.28,
    height: width * 0.28,
    borderWidth: 0.2,
    borderColor: "gray",
    borderRadius: 11,
  },
  container: {
    width: width * 0.28,
    height: height * 0.25,
    marginTop: 12,
    marginLeft: 12,
    marginBottom: 6,
  },
  content: {
    flexDirection: "row",
    marginTop: 12,
    alignItems: "center",
  },
  price: {
    fontSize: 12,
    color: "#747990",
    textDecorationLine: "line-through",
  },
  discountPrice: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#5D3EBD",
    marginLeft: 7,
  },
  productName: {
    fontSize: 11,
  },
  amount: {
    fontSize: 12,
    marginTop: 2,
    fontWeight: "bold",
    color: "#747990",
  },
  plus: {
    width: 30,
    height: 30,
    position: "absolute",
    top: -6,
    right: 10,
    borderWidth: 0.4,
    borderColor: "lightgray",
    borderRadius: 5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowRadius: 4,
    shadowOpacity: 0.05,
  },
});

export default styles;
