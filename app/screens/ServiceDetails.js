import React, { useState } from "react";
import { View, Image, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Entypo } from "@expo/vector-icons";

import Styles from "../config/Styles";
import CusText from "../components/CusText";
import CusSearchField from "../components/CusSearchField";
import WorkerCard from "../components/WorkerCard";

export default function ServiceDetails({ navigation }) {
  const Service = [
    {
      id: 1,
      Worker: "Plumber",
      title: "Fix My Pipe",
      WorkerName: "John Doe",
      rating: "4.5",
    },
  ];
  return (
    <View style={{ backgroundColor: "#fbfdff", flex: 1 }}>
      <StatusBar style="light" />
      <View
        style={{
          backgroundColor: Styles.colors.primary,
          height: 125,
          flexDirection: "column",
          justifyContent: "flex-end",
          borderBottomRightRadius: 30,
          borderBottomLeftRadius: 30,
          paddingBottom: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            paddingHorizontal: 20,
          }}
        >
          <Entypo name="chevron-left" size={24} color="white" />
          <CusText
            style={{ fontFamily: "medium", fontSize: 18, color: "white" }}
          >
            Back
          </CusText>
        </View>
      </View>

      <CusText
        style={{
          fontFamily: "medium",
          fontSize: 14,
          marginTop: 20,
          marginLeft: 20,
        }}
      >
        Service offered:
      </CusText>
      <CusText
        style={{
          fontFamily: "semibold",
          fontSize: 20,
          marginLeft: 20,
        }}
      >
        Changed Ceiling fan
      </CusText>

      <View
        style={{
          backgroundColor: Styles.colors.pink,
          height: 384,
          width: 351,
          borderRadius: 10,
          marginHorizontal: 20,
          padding: 10,
          marginTop: 10,
        }}
      >
        <Image
          source={require("../assets/images/client.jpg")}
          style={{
            width: 331,
            height: 279,
            borderRadius: 10,
          }}
        />
        <View style={{ marginTop: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <View>
              <CusText
                style={{
                  fontFamily: "semibold",
                  fontSize: 18,
                  color: Styles.colors.primary,
                }}
              >
                Electrician
              </CusText>
              <CusText style={{ fontSize: 18, fontFamily: "medium" }}>
                Mr. Peter Asel
              </CusText>
              <View style={{ flexDirection: "row" }}>
                <CusText style={{ fontSize: 14, fontFamily: "semibold" }}>
                  Location :{" "}
                </CusText>
                <CusText style={{ fontSize: 14, fontFamily: "regular" }}>
                  Kwaprow, Cape coast{" "}
                </CusText>
              </View>
            </View>
          </View>
          <View>
            <CusText>RATED</CusText>
            <View
              style={{
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../assets/images/Star.png")}
                style={{ width: 21, height: 20, top: -5 }}
              />
              <CusText style={{ fontFamily: "medium", fontSize: 18 }}>
                4.5
              </CusText>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
