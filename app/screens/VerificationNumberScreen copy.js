import React, { useState } from "react";
import { Image, View, Text } from "react-native";

import CusButton from "../components/CusButton";
import CusText from "../components/CusText";
import CusTextInput from "../components/CusTextInput";
import Screen from "../components/Screen";
import defaultStyles from "../config/Styles";

import { validationSchema } from "../utils/Validation";

export default function VerificationScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleVerify = () => {
    validationSchema
      .validate({ phoneNumber })
      .then((valid) => {
        if (valid) {
          console.log("Phone Numberr : ", phoneNumber);
        } else {
          console.log("no number");
        }
      })
      .catch((error) => {
        console.log(error, phoneNumber);
      });
      navigation.navigate("confirmOTP", { phoneNumber: phoneNumber });
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
        source={require("../assets/images/verifynumber.png")}
      />
      <CusText
        style={{
          fontSize: 24,
          fontFamily: "medium",
          marginTop: 18,
          textAlign: "center",
        }}
      >
        Let’s get you verified
      </CusText>
      <CusText
        style={{
          textAlign: "center",
          fontSize: 12,
          fontFamily: "regular",
          marginTop: 5,
        }}
      >
        Enter your registered number to continue, we {"\n"} will send you OTP to
        verify
      </CusText>
      <CusTextInput
        title="Phone Number"
        keyboardType="number-pad"
        value={phoneNumber}
        onChangeText={(e) => setPhoneNumber(e.trim())}
      />
      <CusText style={{ fontSize: 12, textAlign: "center", marginTop: 184 }}>
        By signing up, you agree with our
        <Text
          style={{
            color: defaultStyles.colors.primary,
            marginLeft: 3,
            fontSize: 12,
            textDecorationLine: "underline",
          }}
          onPress={() => navigation.navigate("signin")}
        >
          Terms &{"\n"} Conditions
        </Text>
        <CusText style={{ fontSize: 12 }}> and </CusText>
        <Text
          style={{
            color: defaultStyles.colors.primary,
            marginLeft: 3,
            fontSize: 12,
            textDecorationLine: "underline",
          }}
          onPress={() => navigation.navigate("signin")}
        >
          Privacy Policy
        </Text>
        .
      </CusText>
      <CusButton
        style={{ marginTop: 18 }}
        onPress={handleVerify}
      >
        Continue
      </CusButton>
    </Screen>
  );
}
