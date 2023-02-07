import React from "react";
import { Text, View, StyleSheet, useWindowDimensions } from "react-native";

import CusText from "./CusText"
export default function SwipeLevel({ item,style }) {
  return (
    <View style={[styles.container,style]}>
          <CusText style={styles.heading}>{item.Heading}</CusText>
          <CusText style={styles.subHeading}>{item.SubHeading}</CusText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      top: -30,
      alignItems: "center",
    },
    heading: {
      fontSize: 26,
      width:"90%" ,
      textAlign: "center",
      paddingBottom: 5,
      fontFamily:'semibold'
    },
    subHeading: {
      textAlign: "center",
      width: "90%",
      fontFamily:"regular",
      fontSize:14,
  },
});
