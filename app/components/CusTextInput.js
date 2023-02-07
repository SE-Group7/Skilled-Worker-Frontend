import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, Animated } from "react-native";

import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import defaultStyles from "../config/Styles";

function CusTextInput({
  title,
  secureTextEntry,
  value,
  onChangeText,
  ...otherProps
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [show, setShow] = useState(true);
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () =>
    value.length > 0 ? setIsFocused(true) : setIsFocused(false);
  const labelStyle = {
    position: "absolute",
    top: !isFocused ? 13 : -12,
    left: 10,
    fontSize: !isFocused ? 16 : 14,
    backgroundColor: isFocused ? defaultStyles.colors.white : "transparent",
  };

  return (
    <View style={styles.container}>
      {title && <Text style={[defaultStyles.text, labelStyle]}>{title}</Text>}
      <TextInput
        style={[defaultStyles.text, styles.textField]}
        {...otherProps}
        value={value}
        secureTextEntry={secureTextEntry && show}
        onFocus={handleFocus}
        onBlur={handleBlur}
        blurOnSubmit
        onChangeText={onChangeText}
      />
      {(title == "Password" && !show && (
        <Entypo
          name="eye"
          size={24}
          color={defaultStyles.colors.Gray_color}
          onPress={() => setShow(true)}
        />
      )) ||
        (title == "Password" && show && (
          <Entypo
            name="eye-with-line"
            size={24}
            color={defaultStyles.colors.Gray_color}
            onPress={() => setShow(false)}
          />
        ))}
      {title == "Email" && value.match(/\S+@\S+\.\S+/) && (
        <AntDesign
          name="checkcircle"
          size={16}
          color={defaultStyles.colors.primary}
        />
      )}
      {title == "Email"&& value.length > 0 && !value.match(/\S+@\S+\.\S+/) && (
        <Ionicons name="alert-circle" size={19} color="#FF7000" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: defaultStyles.colors.Gray_color,
    borderWidth: 1,
    height: 54,
    borderRadius: 10,
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 12,
    paddingTop:14,
    paddingBottom: 16,
    marginTop: 15,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  textField: {
    flex: 1,
  },
});

export default CusTextInput;
