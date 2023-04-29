import { View, StyleSheet, ScrollView, Text } from "react-native";

import ImageContainer from "../components/ImageContainer";
import {
  movieImageUrl,
  seriesImageUrl,
  imageHeightMain,
  imageWidthMain,
} from "../helpers/constants";

export default function MainScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageContainer
          width={imageWidthMain}
          height={imageHeightMain}
          imageUrl={movieImageUrl}
          onPressFn={() => console.log("movie")}
          text="Film"
        />
        <ImageContainer
          width={imageWidthMain}
          height={imageHeightMain}
          imageUrl={seriesImageUrl}
          onPressFn={() => console.log("series")}
          text="Dizi"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
  },
  text: {
    fontSize: 24,
  },
});
