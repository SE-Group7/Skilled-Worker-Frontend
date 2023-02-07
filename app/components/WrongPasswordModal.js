import React, { useState } from "react";
import { Image, View, Text } from "react-native";

import CusButton from "../components/CusButton";
import CusText from "../components/CusText";
import CusTextInput from "../components/CusTextInput";
import Screen from "../components/Screen";
import defaultStyles from "../config/Styles";

export default function WrongPasswordModal({ navigation, phone }) {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const handleSignIn = () => {
    (email && password) != ""
      ? console.log("Email : ", email, "Password : ", password)
      : console.log("no credentials");
    setEmail("");
    setPassword("");
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
      <Image
        resizeMode="contain"
        style={{ height: 175, width: 155, alignSelf: "center", marginTop: 52 }}
        source={require("../assets/images/OTP_verification.png")}
      />
      <CusText
        style={{
          fontSize: 24,
          fontFamily: "medium",
          marginTop: 18,
          textAlign: "center",
        }}
      >
        Confirm OTP
      </CusText>
      <CusText
        style={{
          textAlign: "center",
          fontSize: 12,
          fontFamily: "regular",
          marginTop: 5,
        }}
      >
        Please enter the code we send over SMS to{"\n"}{" "}
        <Text
          style={{
            color: defaultStyles.colors.primary,
            fontSize: 12,
            fontWeight: "bold",
          }}
        >
          +233 12 345 6789
          {/* {phoneNumber} */}
        </Text>
      </CusText>
      <CusTextInput
        title="Phone Number"
        type="numeric"
        value={number}
        onChangeText={(e) => setNumber(e)}
      />
      <CusText style={{ fontSize: 12, textAlign: "center", marginTop: 184 }}>
        Didn’t get a code?
        <Text
          style={{
            color: defaultStyles.colors.primary,
            fontSize: 12,
            fontWeight: "bold",
          }}
          onPress={() => navigation.navigate("home")}
        >
          {" "}
          Resend
        </Text>
      </CusText>
      <CusButton style={{ marginTop: 18 }}>Continue</CusButton>
    </Screen>
  );
}
