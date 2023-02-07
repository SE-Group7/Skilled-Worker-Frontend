import React from "react";
import { Text } from "react-native";

import defaultStyles from "../config/Styles";

function CusText({ children, style ,onPress}) {
  return <Text  onPress={onPress} style={[defaultStyles.text, style]}>{children}</Text>;
}

export default CusText;
