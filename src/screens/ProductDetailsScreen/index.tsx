import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { Product } from "../../models";
import ImageCarousel from "../../components/ImageCarousel";
import DetailContent from "../../components/DetailContent";

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
      <ImageCarousel images={product.images} />
      <DetailContent
        price={product.price}
        name={product.name}
        quantity={product.quantity}
      />
    </View>
  );
}

export default index;
