import React from "react";
import { ScrollView } from "react-native";
import styles from "./styles";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Categories from "../../components/Categories";

function index() {
  return (
    <ScrollView
      stickyHeaderIndices={[0]}
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <Header />
      <Banner />
      <Categories />
    </ScrollView>
  );
}

export default index;
