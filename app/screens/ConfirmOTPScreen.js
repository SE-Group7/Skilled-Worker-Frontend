import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { OTP } from "react-native-otp-form";

import { auth } from "../config/firebase";

import CusButton from "../components/CusButton";
import CusText from "../components/CusText";
import Screen from "../components/Screen";
import defaultStyles from "../config/Styles";

export default function VerificationScreen({ navigation, route }) {
  const { phoneNumber,confirmationResult } = route.params;
  const [code, setCode] = useState("");
  console.log(code)
   
     

  const onPressHandler = () => {
    if(code.length < 4){
      alert("Please enter the code we send over SMS")
    }else{
      confirmationResult
      .confirm(code)
      .then((result) => {
        console.log(result);
        navigation.navigate("Home");
      })
      .catch((error) => {
        console.log(error);
      });
    }
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
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Image
          resizeMode="contain"
          style={{ height: 25, width: 96 }}
          source={require("../assets/images/logo.png")}
        />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <Image
              resizeMode="contain"
              style={{
                height: 175,
                width: 155,
                alignSelf: "center",
                marginTop: 52,
              }}
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
                +233 {phoneNumber.slice(1, 3)} {phoneNumber.slice(3, 6)}{" "}
                {phoneNumber.slice(6)}
              </Text>
            </CusText>
          </View>
        </TouchableWithoutFeedback>
        <OTP
          codeCount={4}
          containerStyle={{ marginTop: 31, gap: 30 }}
          keyboardType="number-pad"
          onFinish={onPressHandler}    
          value={code}
          maxLength={1}
          onChange={(e)=>{setCode(e)}}
          otpStyles={{
            backgroundColor: "#fff",
            borderRadius: 0,
            borderColor: "#fff",
            borderBottomWidth: 1,
            borderBottomColor: defaultStyles.colors.primary,
            width: 20,
            fontSize: 24,
            fontFamily: "medium",
          }}

        />
      </KeyboardAvoidingView>
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
      <CusButton style={{ marginTop: 18 }} onPress={onPressHandler}>
        Continue
      </CusButton>
    </Screen>
  );
}
