import React, { useState } from "react";
import { Image, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { validateSignUp } from "../utils/Validation";
import { auth } from "../config/firebase";

import CusButton from "../components/CusButton";
import CusText from "../components/CusText";
import CusTextInput from "../components/CusTextInput";
import Screen from "../components/Screen";
import defaultStyles from "../config/Styles";

export default function SignInScreen({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    
    validateSignUp.validate({ fullName,email,password }).then((valid) => {
      if (valid) {auth.createUserWithEmailAndPassword(email, password).then((userCredentials) => {
        auth.currentUser.updateProfile({
          displayName: fullName,
        });
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
        navigation.navigate("home");
      }).catch((error) => alert(error.message));

        console.log("Email : ", email, "Password : ", password)}
      else {console.log("no credentials");}
    }).catch((error)=>{console.log(error,email)});};

  return (
    <Screen
      style={{
        paddingTop: 40,
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
      <CusText style={{ fontSize: 24, fontFamily: "medium", marginTop: 18 }}>
        Sign up to Hostella
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
        Please fill in the fields below to continue
      </CusText>
      <View>
        <CusTextInput
          title="Full Name"
          value={fullName}
          onChangeText={(e) => setFullName(e)}
        />
        <CusTextInput
          title="Email"
          value={email}
          keyboardType="email-address"
          onChangeText={(e) => setEmail(e.trim())}
        />
        <CusTextInput
          title="Password"
          secureTextEntry
          value={password}
          onChangeText={(e) => setPassword(e)}
        />
        <View style={{ marginTop: 5, flexDirection: "row" }}>
          {password.length < 5 && (
            <Feather
              name="info"
              size={18}
              color={defaultStyles.colors.Gray_color_dark}
              style={{ marginRight: 7 }}
            />
          )}

          {password.length >= 5 && (
            <AntDesign
              name="check"
              size={18}
              color={defaultStyles.colors.Gray_color_dark}
              style={{ marginRight: 7 }}
            />
          )}
          <Text style={{ color: defaultStyles.colors.Gray_color }}>
            Password strength:{" "}
            {password.length < 5 && (
              <Text style={{ color: defaultStyles.colors.primary }}>weak</Text>
            )}
            {password.length >= 5 && password.length < 8 && (
              <Text style={{ color: defaultStyles.colors.primary }}>
                medium
              </Text>
            )}
            {password.length >= 8 && (
              <Text style={{ color: defaultStyles.colors.primary }}>
                strong
              </Text>
            )}
          </Text>
        </View>
        <View style={{ marginTop: 5, flexDirection: "row" }}>
          {password.length < 8 && (
            <Feather
              name="info"
              size={18}
              color={defaultStyles.colors.Gray_color_dark}
              style={{ marginRight: 7 }}
            />
          )}

          {password.length >= 8 && (
            <AntDesign
              name="check"
              size={18}
              color={defaultStyles.colors.Gray_color_dark}
              style={{ marginRight: 7 }}
            />
          )}
          <Text style={{ color: defaultStyles.colors.Gray_color }}>
            Must be at least 8 characters{" "}
          </Text>
        </View>
        <View style={{ marginTop: 5, flexDirection: "row" }}>
          {!password.match(
            /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
          ) ? (
            <Feather
              name="info"
              size={18}
              color={defaultStyles.colors.Gray_color_dark}
              style={{ marginRight: 7 }}
            />
          )
           : (
            <AntDesign
              name="check"
              size={18}
              color={defaultStyles.colors.Gray_color_dark}
              style={{ marginRight: 7 }}
            />
          )}
          {/* <Image source={require("../assets/images/eye.png")} style={{width:15,height:15,marginRight:5}}/> */}
          <Text style={{ color: defaultStyles.colors.Gray_color }}>
            Must have at least one symbol or number
          </Text>
        </View>
      </View>

      <CusButton style={{ marginTop: 29 }} onPress={handleSignUp}>Sign Up</CusButton>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
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
              textAlign: "center",
              fontSize: 12,
              color: defaultStyles.colors.Gray_color_dark,
              fontFamily: "medium",
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
          marginTop: 24,
        }}
      >
        <CusText style={{ fontSize: 12 }}>Already have an account?</CusText>
        <CusText
          style={{
            color: defaultStyles.colors.primary,
            marginLeft: 3,
            fontSize: 12,
          }}
          onPress={() => navigation.navigate("signin")}
        >
          Sign In
        </CusText>
      </View>
    </Screen>
  );
}
