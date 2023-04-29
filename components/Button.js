import { Pressable, StyleSheet, Text } from "react-native";

// a custom button component whose style can be configurable depending on project needs 
// the component is created since react native's Button component is insufficient in terms of styling 
export default function Button(props) {
  const { backgroundStyle, textStyle, text, onPressFn } = props;

  return (
    <Pressable
      style={[styles.button, backgroundStyle]}
      onPress={onPressFn ? onPressFn : null}
    >
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    color: "black",
  },
});
