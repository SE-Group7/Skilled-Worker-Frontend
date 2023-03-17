import React from "react";
import { ImageBackground, Pressable, StyleSheet, View } from "react-native";
import CusText from "../components/CusText";
import Screen from "../components/Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function OnboardingScreen2({ navigation }) {
  return (
    <Screen style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/images/onboarding screen2.png")}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <CusText style={styles.title}>This is Onboarding Screen 2</CusText>
          <CusText style={styles.description}>
            Here is some information about our app that you may find helpful.
          </CusText>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.indicatorsContainer}>
            <MaterialCommunityIcons
              name="circle"
              color="white"
              size={14}
              style={styles.activeIndicator}
            />
            <MaterialCommunityIcons
              name="circle-outline"
              color="white"
              size={14}
              style={styles.inactiveIndicator}
            />
            <MaterialCommunityIcons
              name="circle-outline"
              color="white"
              size={14}
              style={styles.inactiveIndicator}
            />
          </View>
          <Pressable onPress={() => navigation.navigate("OnboardingScreen3")}>
            <CusText>title</CusText>
          </Pressable>
        </View>
      </ImageBackground>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    color: "white",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  indicatorsContainer: {
    flexDirection: "row",
  },
  activeIndicator: {
    marginRight: 10,
  },
  inactiveIndicator: {
    opacity: 0.5,
    marginRight: 10,
  },
});
