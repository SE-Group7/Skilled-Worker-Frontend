import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Pressable,
  View,
} from "react-native";

import CusText from "../components/CusText";
import CusButton from "../components/CusButton";
import CusTextInput from "../components/CusTextInput";
import Styles from "../config/Styles";

export default function SignIn({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const SignInHandler = () => {
    navigation.navigate("main");
  };
  return (
    <ImageBackground
      source={require("../assets/images/signin.png")}
      style={{ flex: 1, paddingHorizontal: 20 }}
    >
      <KeyboardAvoidingView behavior="position"  keyboardVerticalOffset={100}>
        <Image
          source={require("../assets/images/logo.png")}
          style={{ width: 104, height: 99, marginTop: 90, alignSelf: "center" }}
        />
        <CusText style={{ fontSize: 24 }}>Sign In</CusText>
        <CusTextInput
          title="Phone Number"
          keyboardType="number-pad"
          value={phoneNumber}
          onChangeText={(e) => setPhoneNumber(e)}
        />
        <CusTextInput
          title="Password"
          secureTextEntry
          keyboardType="password"
          value={password}
          onChangeText={(e) => setPassword(e)}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 16,
          }}
        >
          <CusText style={{ fontSize: 14 }}>
            Dont have an account?{" "}
              </CusText>
            <Pressable onPress={()=>navigation.navigate("SignUp")}>
              <CusText
                style={{
                  color: Styles.colors.primary,
                  fontFamily: "semibold",
                  fontSize: 14,
                }}
              >
                Sign Up
              </CusText>
            </Pressable>
        </View>
      </KeyboardAvoidingView>
      <KeyboardAvoidingView behavior="position">
        <CusButton style={{ marginTop: 280 }} onPress={SignInHandler}>
          Sign In
        </CusButton>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
