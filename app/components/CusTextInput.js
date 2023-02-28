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
  return (
    <View style={styles.container}>
      {title && <Text style={defaultStyles.text}>{title}</Text>}
      <View style={styles.fieldWrapper}>
        <TextInput
          style={[defaultStyles.text, styles.textField]}
          {...otherProps}
          value={value}
          secureTextEntry={secureTextEntry && show}
          onFocus={handleFocus}
          blurOnSubmit
          onChangeText={onChangeText}
        />
        {secureTextEntry && (
          <AntDesign
            name={show ? "eyeo" : "eye"}
            size={24}
            color={defaultStyles.colors.Gray_color}
            style={styles.icon}
            onPress={() => setShow(!show)}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  icon: {
    marginRight: 10,
  },
  textField: {
    flex: 1,
  },
  fieldWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: defaultStyles.colors.Gray_color,
    borderWidth: 1,
    width: "100%",
    borderRadius: 10,
    height: 51,
    paddingHorizontal: 12,
  },
});

export default CusTextInput;
