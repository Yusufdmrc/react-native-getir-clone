import React, { useState } from "react";
import { FlatList, Image, View, Dimensions } from "react-native";
import styles from "./styles";

const { width, height } = Dimensions.get("window");

function index({ images }: { images: string[] }) {
  const [active, setActive] = useState(0);

  const onViewRef = React.useRef((viewableItems) => {
    if (viewableItems.viewableItems.length) {
      setActive(viewableItems.viewableItems[0].index || 0);
    }
  });

  const viewConfigRef = React.useRef({
    viewAreaCoveragePercentThreshold: "50%",
  });

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatlist}
        data={images}
        renderItem={(item) => (
          <Image source={{ uri: item.item }} style={styles.flatlistImage} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        snapToAlignment={"center"}
        decelerationRate={"fast"}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}
      ></FlatList>
      <View>
        <View style={styles.dotContainer}>
          {images.map((image, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                { backgroundColor: active == index ? "#5D3EBD" : "#F2F0FD" },
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

export default index;
