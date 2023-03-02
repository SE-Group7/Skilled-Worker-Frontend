import React, { useState } from "react";

import Screen from "../components/Screen";
import CusText from "../components/CusText";
import { Text } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <Screen style={{ backgroundColor: "#fbfdff" }}>
      <CusText>Home screen</CusText>
      <CusText>josh and clem</CusText>
      <CusText>Start here and create the other pages too</CusText>
    </Screen>
  );
}
