import React from "react";
import { ImageBackground, StyleSheet, View, Pressable } from "react-native";
import CusText from "../components/CusText";

export default function OnboardingScreen1({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/images/onboarding_screen1.png")}
      style={{ flex: 1 }}
    >
      <View style={styles.footer}>
        <CusText style={styles.title}>Josh dey build the splash screen</CusText>
        <CusText style={styles.subTitle}>
          Need a skilled Worker? No problem, we’ve got you covered.
        </CusText>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={[styles.circle, styles.activeCircle]} />
            <View style={styles.circle} />
            <View style={styles.circle} />
          </View>
          <Pressable
            onPress={() => navigation.navigate("OnboardingScreen3")}
            style={{ width: 89, height: 47, borderRadius: 10 }}
          >
            <CusText>Next</CusText>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 34,
    fontFamily: "semibold",

    fontWeight: 600,
    fontSize: 20,
    lineHeight: 30,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 400,
    fontFamily: "regular",
    lineHeight: 27,
  },
  footer: {
    justifyContent: "space-between",
    marginTop: 554,
    marginHorizontal: 25,
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
    width: 16,
    height: 16,
  },
});
