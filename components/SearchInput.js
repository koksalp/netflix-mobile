import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

export default function SearchInput({ handleSearch, resetPrograms , textInputRef }) {
  const [isBackspacePressed, setIsBackspacePressed ] = useState(false); 
  const [isBackspaceAllowed, setIsBackspaceAllowed] = useState(false); 

  function handleKeyPress({ nativeEvent }) { 
    if (nativeEvent.key === "Backspace" && !isBackspacePressed ) { 
      setIsBackspacePressed(true); 
    }
  } 

  function handleInput(userInput) { 
    if (isBackspacePressed) {
      if (isBackspaceAllowed ) { 
        if (userInput.length===0) {
          resetPrograms(); 
          setIsBackspaceAllowed(false); 
        } else {
          handleSearch(userInput); 
        } 
      }
      setIsBackspacePressed(false); 
    } else {
      if (userInput.length >= 3) {
        handleSearch(userInput);
      } 
      if (!isBackspaceAllowed) {
        setIsBackspaceAllowed(true); 
      }
    }
  }

  return (
    <TextInput
      style={styles.textInput}
      placeholder="Film / Dizi Ara"
      onChangeText={handleInput}
      onKeyPress={handleKeyPress} 
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