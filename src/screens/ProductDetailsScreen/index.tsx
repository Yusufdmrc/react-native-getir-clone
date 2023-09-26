import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { Product } from "../../models";
import ImageCarousel from "../../components/ImageCarousel";

function index(props) {
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    setProduct(props.route.params.product);
  }, []);
  if (!product) {
    return <ActivityIndicator color={"#5D3EBD"} />;
  }

  return (
    <View>
      <ImageCarousel images={product?.images} />
    </View>
  );
}

export default index;
