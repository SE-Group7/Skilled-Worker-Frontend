import React, { useState } from "react";
import {
  View,
  TextInput,
  Image,
  Text,
  Animated,
  ScrollView,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";

import Styles from "../config/Styles";
import CusText from "../components/CusText";
import CusSearchField from "../components/CusSearchField";
import WorkerCard from "../components/WorkerCard";

export default function AboutRecentWorker({ navigation }) {
  const bookings = [
    {
      id: 1,
      Worker: "Plumber",
      title: "Fix My Pipe",
      WorkerName: "John Doe",
      rating: "4.5",
    },
    {
      id: 2,
      Worker: "Electrician",
      title: "Fix My Light",
      WorkerName: "John Doe",
      rating: "4.2",
    },
    {
      id: 3,
      Worker: "Plumber",
      title: "Fix My Pipe",
      WorkerName: "John Doe",
      rating: "3.5",
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
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}
        >
          <Pressable
            style={{ flexDirection: "row" }}
            onPress={() => navigation.navigate("main")}
          >
            <AntDesign name="left" size={24} color="white" />
            <CusText
              style={{
                color: "white",
                fontSize: 18,
                fontFamily: "bold",
                top: -2,
              }}
            >
              Back
            </CusText>
          </Pressable>
        </View>
      </View>
      <CusText
        style={{
          fontFamily: "semibold",
          fontSize: 14,
          marginTop: 20,
          marginLeft: 20,
        }}
      >
        Service Offered :
      </CusText>
      <CusText
        style={{
          fontFamily: "semibold",
          fontSize: 24,
          marginLeft: 20,
          marginBottom: 20,
        }}
      >
        Changed Ceiling fan
      </CusText>

      <View style={{ paddingHorizontal: 20 }}>
        <View
          style={{
            padding: 10,
            borderRadius: 10,
            backgroundColor: "#FCF7F7",
            ...Styles.shadow,
          }}
        >
          <Image
            source={require("../assets/images/client.jpg")}
            style={{
              borderRadius: 10,
              width: "100%",
              height: 279,
              marginBottom: 10,
            }}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{marginRight:"auto"}}>
              <CusText
                style={{ fontFamily: "medium", fontSize: 18, color: "#342F95" }}
              >
                Electrician
              </CusText>
              <CusText style={{ fontFamily: "medium", fontSize: 18 }}>
                Mr. Peter Asel
              </CusText>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <CusText style={{ fontFamily: "semibold", fontSize: 14 }}>
                  Location :{" "}
                </CusText>
                <CusText style={{ fontFamily: "regular", fontSize: 14 }}>
                  Kwaprow, Cape coast
                </CusText>
              </View>
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
                  4.5
                </CusText>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
