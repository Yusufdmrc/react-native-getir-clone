import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: height * 0.25,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 25,
  },
  flatlist: {
    width: width * 0.5,
    height: height * 0.2,
  },
  flatlistImage: {
    width: width * 0.5,
    height: height * 0.21,
    resizeMode: "stretch",
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 30,
    height: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 20,
  },
});

export default styles;
