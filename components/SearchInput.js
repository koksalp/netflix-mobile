import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

// a component where user can type to
// filter contents through all dataset
// regardless of the category
export default function SearchInput({
  handleSearch,
  resetPrograms,
  textInputRef,
}) {
  // variable that stores info about whether programs
  // need to be reset according to the last filter selected by user
  const [isResetNeeded, setIsResetNeeded] = useState(false);

  // search through all dataset when user types and
  // the input field contains at least 3 letters
  // otherwise display contents according to
  // the last filter selected by user
  function handleInput(userInput) {
    if (userInput.length >= 3) {
      handleSearch(userInput);
      if (!isResetNeeded) {
        setIsResetNeeded(true);
      }
    } else if (isResetNeeded) {
      resetPrograms();
      setIsResetNeeded(false);
    }
  }

  return (
    <TextInput
      style={styles.textInput}
      placeholder="Film / Dizi Ara"
      onChangeText={handleInput}
      ref={textInputRef}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    marginVertical: 8,
    marginHorizontal: 12,
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
});
