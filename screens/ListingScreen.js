import { useState } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";

import ImageContainer from "../components/ImageContainer";
import { imageHeightListing, imageWidthListing } from "../helpers/constants";

import { initProgramsArray } from "../helpers/functions";

export default function ListingScreen({ route }) {
  const { programType } = route.params;

  const [programsArray, setProgramsArray] = useState(
    initProgramsArray(programType)
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={programsArray}
        keyExtractor={(item) => item.id}
        numColumns={2}
        ListEmptyComponent={
          <Text style={{ textAlign: "center" }}>Sonuç Bulunamadı </Text>
        }
        renderItem={({ item }) => (
          <ImageContainer
            width={imageWidthListing}
            height={imageHeightListing}
            imageUrl={item.images["Poster Art"].url}
            text={item.title}
            textStyle={{ fontSize: 16 }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
