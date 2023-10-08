import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenBottom: {
    height: height * 0.12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "4%",
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#f8f8f8",
  },
  btnLeft: {
    height: height * 0.06,
    flex: 3,
    backgroundColor: "#5d3ebd",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -10,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
  btnRight: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -10,
    height: height * 0.06,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  price: {
    color: "#5D3EBD",
    fontWeight: "bold",
  },
});

export default styles;
