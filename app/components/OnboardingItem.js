import React from "react";
import { Text, View,StyleSheet } from "react-native";

import defaultStyles from "../config/Styles";

function OnboardingItem({ item, style }) {

  return (
    <View style={[styles.container]}>
      <Text style={[defaultStyles.text, styles.header]}>{item.Header}</Text>
      <Text style={[defaultStyles.text, styles.subHeader]}>
        {item.subHeader}
      </Text>
    </View>
  );
}

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItem: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },
  subHeader: {
    textAlign: "center",
    color: defaultStyles.colors.Gray_color,
  },
});
