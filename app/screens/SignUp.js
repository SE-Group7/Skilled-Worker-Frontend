import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Pressable,
  View,
  ScrollView,
} from "react-native";


import CusText from "../components/CusText";
import CusButton from "../components/CusButton";
import CusTextInput from "../components/CusTextInput";
// import jobData from "../config/jobData.json";
import Styles from "../config/Styles";

export default function SignIn({ navigation }) {
  const [role, setRole] = useState("client");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [location, setLocation] = useState("");
  const [occupation, setOccupation] = useState("");
  const [skill, setSkill] = useState("");
  const [id, setId] = useState("");

  //   const config: SelectConfig = {
  //     fontSize: 18,
  //     backgroundColor: "#404040",
  //     textColor: "white",
  //     selectedBackgroundColor: "white",
  //     selectedTextColor: "black",
  //     selectedFontWeight: "bold",
  //   };

  const SignInHandler = () => {
    navigation.navigate("otp");
  };
  return (
    <ImageBackground
      source={require("../assets/images/signin.png")}
      style={{ flex: 1, paddingHorizontal: 20 }}
    >
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100}>
        <Image
          source={require("../assets/images/logo.png")}
          style={{ width: 104, height: 99, marginTop: 90, alignSelf: "center" }}
        />
        <CusText style={{ fontSize: 24 }}>Sign Up</CusText>
        <View
          style={{
            width: "100%",
            height: 2,
            backgroundColor: Styles.colors.primary,
            marginTop: 13,
          }}
        />
        <View style={{ flexDirection: "row" }}>
          <Pressable
            onPress={() => setRole("client")}
            style={{
              flex: 0.5,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:
                role == "client" ? Styles.colors.primary : "transparent",
              paddingVertical: 8,
              borderBottomLeftRadius: 15,
            }}
          >
            <CusText style={{ color: role == "client" ? "#fff" : "#000" }}>
              CLIENT
            </CusText>
          </Pressable>
          <Pressable
            onPress={() => setRole("worker")}
            style={{
              flex: 0.5,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:
                role == "worker" ? Styles.colors.primary : "transparent",
              paddingVertical: 8,
              borderBottomRightRadius: 15,
            }}
          >
            <CusText style={{ color: role == "worker" ? "#fff" : "#000" }}>
              WORKER
            </CusText>
          </Pressable>
        </View>
        <ScrollView
          style={{ height: 440 }}
          indicatorStyle="black"
          alwaysBounceVertical
          automaticallyAdjustKeyboardInsets
          keyboardDismissMode="on-drag"
        >
          {/* <Select
            data={data}
            onSelect={(value) => setOccupation(value)}
            value={selectedItem}
            config={config}
          /> */}
          <CusTextInput
            title="Full Name"
            value={name}
            onChangeText={(e) => setName(e)}
          />
          <CusTextInput
            title="Age"
            keyboardType="number-pad"
            value={age}
            onChangeText={(e) => setAge(e)}
          />
          <CusTextInput
            title="Phone Number"
            keyboardType="number-pad"
            value={phoneNumber}
            onChangeText={(e) => setPhoneNumber(e)}
          />
          <CusTextInput
            title="Location"
            value={location}
            onChangeText={(e) => setLocation(e)}
          />
          <CusTextInput
            title="National Identification Number"
            value={id}
            onChangeText={(e) => setId(e)}
          />
          <CusTextInput
            title="Password"
            secureTextEntry
            keyboardType="password"
            value={password}
            onChangeText={(e) => setPassword(e)}
          />
          <CusTextInput
            title="Confirm Password"
            secureTextEntry
            keyboardType="password"
            value={confirmPassword}
            onChangeText={(e) => setConfirmPassword(e)}
          />
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 2,
          }}
        >
          <CusText style={{ fontSize: 14 }}>Already have an account? </CusText>
          <Pressable onPress={() => navigation.navigate("SignIn")}>
            <CusText
              style={{
                color: Styles.colors.primary,
                fontFamily: "semibold",
                fontSize: 14,
              }}
            >
              Sign In
            </CusText>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
      <KeyboardAvoidingView behavior="position">
        <CusButton style={{ marginTop: 15 }} onPress={SignInHandler}>
          Sign Up
        </CusButton>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
