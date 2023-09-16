import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  header: {
    height: height * 0.064,
    backgroundColor: "#F7D102",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  HeaderLeft: {
    width: "80%",
    height: height * 0.064,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "4%",
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  image: {
    width: 30,
    height: 30,
  },
  HeaderLeftView: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 8,
    borderLeftWidth: 3,
    borderLeftColor: "#F3F2FD",
    paddingLeft: 8,
    height: height * 0.035,
  },
  textTitle: {
    fontWeight: "700",
    fontSize: 16,
  },
  textAdress: {
    fontWeight: "500",
    fontSize: 12,
    color: "#6E7480",
    marginLeft: 6,
    marginRight: 3,
  },
  HeaderRight: {
    width: "20%",
    height: height * 0.064,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 10,
  },
  tvs: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#5D3EBD",
  },
  minute: { fontSize: 20, fontWeight: "bold", color: "#5D3EBD" },
  span: {
    fontSize: 16,
  },
});

export default styles;
