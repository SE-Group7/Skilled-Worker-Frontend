import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/Styles";

function CusSearchField({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon  && (
        <MaterialCommunityIcons
          name={icon}
          size={28}
          color={defaultStyles.colors.Gray_color}
          style={styles.icon}
        />
      )}
      <TextInput
        style={[defaultStyles.text, styles.textField]}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: defaultStyles.colors.white,
    backgroundColor: defaultStyles.colors.white,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    width: 293,
    height: 40,
    paddingLeft: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  textField: {
    flex: 1,
    // alignSelf: "flex-end",
    color: defaultStyles.colors.Gray_color,
  },
});

export default CusSearchField;
