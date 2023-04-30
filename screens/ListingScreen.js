import { useRef, useState } from "react";
import { FlatList, StyleSheet, View , Text } from "react-native";

import Header from "../components/Header"; 
import ImageContainer from "../components/ImageContainer";
import DropDown from "../components/DropDown";
import SearchInput from "../components/SearchInput"; 
import { imageHeightListing, imageWidthListing} from "../helpers/constants";

// import all the necessary functions to perform sorting operations 
// except initProgramsArray which is used to initializing the array 
// with the first 18 programs on selected category 
import {
  initProgramsArray,
  sortProgramsByReleaseYear,
  sortProgramsRandomly, 
  searchInPrograms,
  sortProgramsByScore, 
} from "../helpers/functions"; 
import Footer from "../components/Footer";

// a screen component for displaying the contents 
export default function ListingScreen({ route , navigation }) { 

  // get program type 
  const { programType } = route.params; 

  // store info about which filter was used last 
  const [lastFilter, setLastFilter]=useState(); 

  // ref for textInput element in search bar 
  // to clear input when a filter is selected in dropdown menu 
  const searchInputRef = useRef(); 
  
  // stores programs 
  // when this page is visited, only the first 18 programs 
  // in selected category get displayed 
  const [programsArray, setProgramsArray] = useState(
    initProgramsArray(programType)
  );

  // go to main screen
  function goToMainScreen() { 
    navigation.navigate("MainScreen"); console.log("navigating to main scr "); 
  } 

  // clear input in search bar 
  function clearSearchInput() {
    searchInputRef.current.clear(); 
  } 

  // display programs according to last filter
  function resetPrograms() { 

    // display first 18 programs if no filters selected last 
    if (lastFilter===undefined) {
      setProgramsArray(initProgramsArray(programType)); 
    } else { 
      
      // display content according to last filter 
      handleFilters(lastFilter); 
    }
  } 

  // change programs array using filter type 
  // and store last filter info 
  function handleFilters(filterType) { 
    setLastFilter(filterType); 
    if (filterType === "new") {
      setProgramsArray(sortProgramsByReleaseYear(programType, false));
    } else if (filterType === "old") {
      setProgramsArray(sortProgramsByReleaseYear(programType));
    } else if (filterType === "random") {
      setProgramsArray(sortProgramsRandomly(programType));
    } else if (filterType === "score") {
      setProgramsArray(sortProgramsByScore(programType)); 
    } 
  }

  // filter displayed contents using user input 
  // that is inside of search bar 
  function filterProgramsBySearch(userInput) {
    setProgramsArray(searchInPrograms(userInput)); 
  } 

  // return a flatlist with corresponding contents 
  // there is a header component on the top 
  // and a footer component on the bottom 
  // as a part of flatlist 
  return (
    <View style={styles.container}>
      <FlatList
        data={programsArray}
        keyExtractor={(item) => item.id} 
        ListEmptyComponent={<Text style={{textAlign: "center"}}>Sonuç Bulunamadı </Text >} 
        ListHeaderComponent={
          <> 
            <Header goToMainScreenFn={goToMainScreen} />
            <SearchInput handleSearch={filterProgramsBySearch} resetPrograms={resetPrograms } textInputRef={searchInputRef} /> 
            <DropDown handleFilters={handleFilters} clearSearchInput={clearSearchInput} /> 
          </>
        } 
        ListFooterComponent={
          <Footer   containerStyle={styles.footerContainerStyle} goToMainScreenFn={goToMainScreen}/> 
        } 
        numColumns={2}
        renderItem={({ item }) => (
          <ImageContainer
            width={imageWidthListing}
            height={imageHeightListing}
            imageUrl={item.images["Poster Art"].url}
            text={item.releaseYear + " " + item.imdbScore + " " + item.title}
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
  footerContainerStyle: {
    marginTop: 32,  
  }
});
