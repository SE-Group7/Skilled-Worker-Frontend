import React, { useState } from "react";
import { Image, View, Text, Modal, StyleSheet, Dimensions } from "react-native";
import { validateSignIn } from "../utils/Validation";
import {auth} from "../config/firebase";

import CusButton from "../components/CusButton";
import CusText from "../components/CusText";
import CusTextInput from "../components/CusTextInput";
import Screen from "../components/Screen";
import defaultStyles from "../config/Styles";

export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [wrongPassword, setWrongPassword] = useState(false);
  const handleRetry = () => {
    setWrongPassword(false);
    setEmail("");
    setPassword("");
  };
  const handleSignIn = () => {
    validateSignIn
      .validate({ email, password })
      .then((valid) => {
        if (valid) {
            auth
              .signInWithEmailAndPassword(email, password)
              .then((userCredentials) => {
                const user = userCredentials.user;
                console.log("Logged in with:", user.email);
                navigation.navigate("home");
              })
              .catch((error) =>{ 
                // alert(error.message);
                setWrongPassword(true);}
);
          
           
          console.log("Email : ", email, "Password : ", password);
        } else {
          console.log("no credentials");
        }
      })
      .catch((error) => {
        setWrongPassword(true);
        console.log(error, email, password);
      });
  };
  return (
    <Screen
      style={{
        paddingTop: 40,
        paddingBottom: 10,
        paddingHorizontal: 10,
        justifyContent: "space-between",
        backgroundColor: defaultStyles.colors.white,
      }}
    >
      <Image
        resizeMode="contain"
        style={{ height: 25, width: 96 }}
        source={require("../assets/images/logo.png")}
      />
      <CusText style={{ fontSize: 25, fontFamily: "medium", marginTop: 18 }}>
        Sign in to Hostella
      </CusText>
      <CusText
        style={{
          fontSize: 12,
          color: defaultStyles.colors.Gray_color_dark,
          fontFamily: "regular",
          marginTop: 5,
          marginBottom: 10,
        }}
      >
        Hello there, Happy to see you once again
      </CusText>
      <View>
        <CusTextInput
          title="Email"
          value={email}
          keyboardType="email-address"
          onChangeText={(e) => setEmail(e)}
        />
        <CusTextInput
          title="Password"
          secureTextEntry
          value={password}
          onChangeText={(e) => setPassword(e)}
        />
      </View>
      <CusText
        style={{
          textAlign: "right",
          color: defaultStyles.colors.primary,
          fontSize: 14,
          marginTop: 15,
        }}
      >
        Forgotten Password?
      </CusText>

      <CusButton onPress={handleSignIn} style={{ marginTop: 45 }}>
        Sign In
      </CusButton>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 30,
        }}
      >
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: defaultStyles.colors.Gray_color_light,
          }}
        />
        <View>
          <CusText
            style={{
              width: 50,
              textAlign: "center",
              fontFamily: "medium",
              fontSize: 12,
              color: defaultStyles.colors.Gray_color_dark,
              fontWeight: "450",
            }}
          >
            Or
          </CusText>
        </View>
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: defaultStyles.colors.Gray_color_light,
          }}
        />
      </View>
      <CusButton
        logo={require("../assets/images/google-logo.png")}
        style={{
          backgroundColor: defaultStyles.colors.Gray_color_light,
        }}
        textStyles={{ color: defaultStyles.colors.black }}
      >
        Sign In with google
      </CusButton>
      <CusButton
        logo={require("../assets/images/facebook-icon.png")}
        style={{
          backgroundColor: defaultStyles.colors.Gray_color_light,
          color: defaultStyles.colors.black,
        }}
        textStyles={{ color: defaultStyles.colors.black }}
      >
        Sign In with facebook
      </CusButton>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 60,
        }}
      >
        <CusText style={{ fontSize: 12 }}>Dont have an account?</CusText>
        <CusText
          style={{
            color: defaultStyles.colors.primary,
            marginLeft: 3,
            fontSize: 12,
          }}
          onPress={() => navigation.navigate("signup")}
        >
          Sign up
        </CusText>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={wrongPassword}
        onRequestClose={() => {
          setWrongPassword(!wrongPassword);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <CusText style={{ fontSize: 16, fontFamily: "medium" }}>
              Error
            </CusText>
            <Image
              source={require("../assets/images/oops.png")}
              style={{
                width: 160,
                height: 116,
                marginTop: 45,
                marginBottom: 47,
              }}
            />
            <CusText
              style={{
                textAlign: "center",
                fontSize: 12,
                fontFamily: "regular",
                marginBottom: 52,
              }}
            >
              The password you entered is incorrect, please try {"\n"} again or
              reset password
            </CusText>
            <CusButton onPress={handleRetry}>Try Again</CusButton>
            <CusText
              style={{
                fontSize: 12,
                textAlign: "center",
                marginTop: 25,
                fontFamily: "regular",
                color: defaultStyles.colors.primary,
                fontWeight: "bold",
              }}
              onPress={() => {
                navigation.navigate("home");
                setWrongPassword(!wrongPassword);
              }}
            >
              Reset Password
            </CusText>
          </View>
        </View>
      </Modal>
    </Screen>
  );
}
const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    width,
    height,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "flex-end",
  },
  modalView: {
    backgroundColor: "white",
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    padding: 20,
    height: 487,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
