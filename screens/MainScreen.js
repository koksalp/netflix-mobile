import { View, StyleSheet, ScrollView } from "react-native";

import ImageContainer from "../components/ImageContainer";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  movieImageUrl,
  seriesImageUrl,
  imageHeightMain,
  imageWidthMain,
} from "../helpers/constants";

// Main screen component
// users can choose between 2 categories
// and get navigated into listing screen
export default function MainScreen({ navigation }) {
  // navigate into listing screen and pass
  // program type selected by user as argument
  function handlePress(programType) {
    navigation.navigate("ListingScreen", {
      programType: programType,
    });
  }

  // return a scrollable screen where users can select a category
  // there is a header element on the top and footer on the bottom
  return (
    <ScrollView>
      <Header />
      <View style={styles.container}>
        <ImageContainer
          width={imageWidthMain}
          height={imageHeightMain}
          imageUrl={movieImageUrl}
          onPressFn={() => handlePress("movie")}
          text="Film"
        />
        <ImageContainer
          width={imageWidthMain}
          height={imageHeightMain}
          imageUrl={seriesImageUrl}
          onPressFn={() => handlePress("series")}
          text="Dizi"
        />
      </View>
      <Footer />
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
