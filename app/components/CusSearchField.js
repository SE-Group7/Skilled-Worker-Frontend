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
          size={18}
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
    borderRadius: 15,
    flexDirection: "row",
    width: "100%",
    height: 50,
    paddingLeft: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  textField: {
    flex: 1,
    color: defaultStyles.colors.Gray_color,
  },
});

export default CusSearchField;
