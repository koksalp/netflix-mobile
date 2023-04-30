import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

import { filterOptions } from "../helpers/constants";

// a component with dropdown menu
export default function DropDown({ handleFilters, clearSearchInput }) {
  // filter info that user selected
  const [selectedFilter, setSelectedFilter] = useState("");

  // clear input of search bar and filter contents
  function handleSelect() {
    clearSearchInput();
    handleFilters(selectedFilter);
  }

  return (
    <View style={styles.container}>
      <SelectList
        setSelected={(value) => setSelectedFilter(value)}
        data={filterOptions}
        save="key"
        onSelect={handleSelect}
        placeholder="Sırala"
        searchPlaceholder="Ara"
        notFoundText="Sonuç Bulunamadı"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
    marginHorizontal: 12,
  },
});
