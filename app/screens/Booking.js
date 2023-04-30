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


export default function Booking({ navigation }) {
  
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
                </View>
            </View>



        </View>
    );
}
