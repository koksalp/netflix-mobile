import { Pressable, View, StyleSheet, Text } from "react-native";

import Button from "./Button";
import { createAlert } from "../helpers/functions";
import { alertMessage } from "../helpers/constants";

// header component that includes company name, a button for starting a trial
// and a text indicating titles that are popular
export default function Header(props) {
  // props object destruction
  const {
    companyName = "BulutMD",
    headerText = "Popüler Başlıklar",
    trialButtonText = "Deneme Başlat",
    goToMainScreenFn,
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.mainHeader}>
        <Pressable onPress={goToMainScreenFn ? goToMainScreenFn : null}>
          <Text style={styles.companyName}>{companyName}</Text>
        </Pressable>
        <Button
          text={trialButtonText}
          backgroundStyle={styles.trialButton}
          textStyle={styles.trialButtonText}
          onPressFn={() => createAlert("Deneme Başlatıldı", alertMessage)}
        />
      </View>
      <View style={styles.popularTitles}>
        <Text style={styles.popularTitlesText}>{headerText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: 150,
  },
  mainHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 8,
    backgroundColor: "black",
  },
  companyName: {
    fontSize: 36,
    color: "white",
  },
  popularTitles: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 16,
    backgroundColor: "#777",
  },
  popularTitlesText: {
    color: "white",
    fontSize: 32,
  },
  trialButton: {
    backgroundColor: "red",
    paddingHorizontal: 16,
  },
  trialButtonText: {
    color: "white",
    fontSize: 20,
  },
});
