import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import CusText from "../components/CusText";
import Screen from "../components/Screen";

export default function OnboardingScreen3({ navigation }) {
  return (
    <Screen style={styles.container}>
      <ImageBackground
        source={require("../assets/images/onboarding screen3.png")}
        style={styles.background}
      >
        <View style={styles.contentContainer}>
          <CusText style={styles.title}>Welcome to Our App</CusText>
          <CusText style={styles.subtitle}>
            You can do amazing things with it
          </CusText>
          <CusText style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            mauris neque, iaculis nec efficitur sit amet, vestibulum ut turpis.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Integer lacinia, mauris vel lobortis
            ullamcorper, lectus dolor venenatis mauris, ac ultrices quam lorem
            vel massa.
          </CusText>
        </View>
        <View style={styles.footer}>
          <View style={styles.pagination}>
            <View style={styles.circleFilled} />
            <View style={styles.circleEmpty} />
            <View style={styles.circleEmpty} />
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
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "space-between",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  pagination: {
    flexDirection: "row",
  },
  circleFilled: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#fff",
    marginHorizontal: 5,
  },
  circleEmpty: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#fff",
    opacity: 0.3,
    marginHorizontal: 5,
  },
});





