import React from "react";
import { Image, Text, View } from "react-native";

import Styles from "../config/Styles";
import CusText from "./CusText";

function WorkerCard({ title, WorkerName, Worker, rating }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 15,
        width: "100%",
        height: 85,
        backgroundColor: Styles.colors.pink,
        marginBottom: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        ...Styles.shadow

      }}
    >
      <Image
        source={require("../assets/images/client.jpg")}
        style={{ height: 65, width: 65, borderRadius: 10, marginRight: 10 }}
      />
      <View
        style={{ flexDirection: "column", width: 178, paddingHorizontal: 10 }}
      >
        <CusText
          style={{
            fontFamily: "semibold",
            fontSize: 18,
            color: Styles.colors.primary,
          }}
        >
          {Worker}
        </CusText>
        <CusText style={{ fontSize: 14 }}>{WorkerName}</CusText>
        <CusText
          style={{
            fontSize: 14,
            color: Styles.colors.dark_blue,
            fontFamily: "medium",
          }}
        >
          {title}
        </CusText>
      </View>
      <View style={{ alignItems: "center" }}>
        <CusText style={{ fontSize: 12, fontFamily: "semibold" }}>
          RATED
        </CusText>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../assets/images/Star.png")}
            style={{ height: 20, width: 21, marginRight: 5, top: -3 }}
          />
          <CusText style={{ fontFamily: "medium", fontSize: 18 }}>
            {rating}
          </CusText>
        </View>
      </View>
    </View>
  );
}

export default WorkerCard;
