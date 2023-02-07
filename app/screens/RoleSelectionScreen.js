import React, { useState } from "react";
import {
  Image,
  View,
  Pressable,
  Text,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { OTP } from "react-native-otp-form";

import CusButton from "../components/CusButton";
import CusText from "../components/CusText";
import Screen from "../components/Screen";
import defaultStyles from "../config/Styles";

export default function VerificationScreen({ navigation, phone }) {
  const [role, setRole] = useState(null);
  const DATA = [
    {
      id: "1",
      title: "Student",
      description: "I am a university student looking for the perfect hostel",
      icon: require("../assets/images/Students.png"),
    },
    {
      id: "2",
      title: "Host",
      description:
        "I am a hostel(s) operator on or out of a  university campus.",
      icon: require("../assets/images/host.png"),
    },
  ];
  const onPressHandler = () => {
    role !== null && navigation.navigate("home");
  };
  const Item = ({ item }) => (
    <Pressable
      style={[
        {
          borderWidth: 1,
          backgroundColor:
            role === `${item.title}` ? defaultStyles.colors.primary : "#ffffff",
          borderColor: "white",
          borderRadius: 15,
          marginBottom: 10,
          flexDirection: "row",
          padding: 12,
          height: 100,
          width: 340,
        },
        Platform.OS === "ios"
          ? defaultStyles.iosShadow
          : defaultStyles.androidShadow,
      ]}
      onPress={() => setRole(`${item.title}`)}
    >
      <Image
        source={item.icon}
        style={{ height: 30, width: 30, marginRight: 10 }}
      />
      <View>
        <CusText
          style={{
            fontSize: 16,
            marginTop: 0,
            fontFamily: "regular",
            color:
              role === `${item.title}`
                ? defaultStyles.colors.white
                : defaultStyles.colors.black,
          }}
        >
          {item.title}
        </CusText>
        <CusText
          style={{
            fontSize: 12,
            marginTop: 5,
            fontFamily: "regular",
            width: 234,
            color:
              role === `${item.title}`
                ? defaultStyles.colors.white
                : defaultStyles.colors.Gray_color_dark,
          }}
        >
          {item.description}
        </CusText>
      </View>
    </Pressable>
  );

  return (
    <Screen
      style={{
        paddingTop: 40,
        paddingBottom: 10,
        paddingHorizontal: 10,
        justifyContent: "space-between",
        backgroundColor: "#FBFDFF",
      }}
    >
      <Image
        resizeMode="contain"
        style={{ height: 25, width: 96 }}
        source={require("../assets/images/logo.png")}
      />
      <CusText style={{ fontSize: 24, marginTop: 19, fontFamily: "medium" }}>
        Role Setup
      </CusText>
      <CusText style={{ fontSize: 12, marginTop: 5, fontFamily: "regular" }}>
        Choose your role on Hostella, are you a student or hostel host?
      </CusText>
      <FlatList
        style={{ marginTop: 25 }}
        data={DATA}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />

      <CusButton
        style={{
          marginTop: 300,
          backgroundColor:
            role === null
              ? defaultStyles.colors.Gray_color_dark
              : defaultStyles.colors.primary,
        }}
        onPress={onPressHandler}
      >
        Continue
      </CusButton>
    </Screen>
  );
}
