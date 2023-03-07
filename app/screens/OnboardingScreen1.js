import React from "react";
import { ImageBackground, StyleSheet, View, Button } from "react-native";
import CusText from "../components/CusText";
import Screen from "../components/Screen";

export default function OnboardingScreen1({ navigation }) {
  return (
    <Screen style={styles.container}>
      <ImageBackground
        source={require("../assets/images/OnboardingScreen1.png")}
        style={styles.background}
      >
        <View style={styles.content}>
          <CusText>Josh dey build the splash screen</CusText>
          <CusText style={styles.title}>This is the description</CusText>
          <CusText style={styles.title}>This is the </CusText>
        </View>
        <View style={styles.footer}>
          <View style={[styles.circle, styles.activeCircle]} />
          <View style={styles.circle} />
          <View style={styles.circle} />
          <Button
            title="Next"
            onPress={() => navigation.navigate("OnboardingScreen2")}
          />
        </View>
      </ImageBackground>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 34,
    fontFamily: "bold",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: "#d8d8d8",
  },
  activeCircle: {
    backgroundColor: "#fff",
  },
});