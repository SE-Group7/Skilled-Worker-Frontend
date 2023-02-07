import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/Styles";

function CusRoundTextInput({ icon, ...otherProps }) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={styles.container}>
      {icon && !isFocused && (
        <MaterialCommunityIcons
          name={icon}
          size={25}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        style={[defaultStyles.text, styles.inputText, isFocused && {width:'100%'}]}
        placeholder={otherProps.placeholder}
        value={otherProps.value || ""}
        {...otherProps}
        clearButtonMode
        onFocus={() => setIsFocused(true)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: defaultStyles.colors.Gray_color,
    borderWidth: 1,
    borderRadius: 30,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: defaultStyles.colors.white,
    textAlign: "center",
  },
  icon: {
    // marginRight: 10,
    color: defaultStyles.colors.Gray_color,
    // position:"absolute",
    marginRight: 5,
    textAlign: "center",
  },
  inputText: {
    fontSize: 16,
    textAlign: "center"
  },
});

export default CusRoundTextInput;
