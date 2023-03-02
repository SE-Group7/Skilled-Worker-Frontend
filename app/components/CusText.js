import React from "react";
import { Text } from "react-native";

import Styles from "../config/Styles";

function CusText({ children, style ,onPress}) {
  return <Text  onPress={onPress} style={[Styles.text, style]}>{children}</Text>;
}

export default CusText;
