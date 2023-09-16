import React from "react";
import { ScrollView } from "react-native";
import styles from "./styles";
import Header from "../../components/Header";
import Banner from "../../components/Banner";

function index() {
  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <Header />
      <Banner />
    </ScrollView>
  );
}

export default index;
