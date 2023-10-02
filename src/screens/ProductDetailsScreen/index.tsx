import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, View } from "react-native";
import { Product } from "../../models";
import ImageCarousel from "../../components/ImageCarousel";
import DetailContent from "../../components/DetailContent";
import DetailProperty from "../../components/DetailProperty";
import CardButton from "../../components/CardButton";
import styles from "./styles";
import { Text } from "react-native";

function index(props) {
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    setProduct(props.route.params.product);
  }, []);
  if (!product) {
    return <ActivityIndicator color={"#5D3EBD"} />;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageCarousel images={product.images} />
        <DetailContent
          price={product.price}
          name={product.name}
          quantity={product.quantity}
        />
        <Text style={styles.detailText}>Detaylar</Text>
        <DetailProperty />
      </ScrollView>
      <CardButton />
    </View>
  );
}

export default index;
