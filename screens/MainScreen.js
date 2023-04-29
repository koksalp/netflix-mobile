import { View, StyleSheet, ScrollView, Text } from "react-native";

export default function MainScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Main</Text>
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
});
