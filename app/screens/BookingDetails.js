import React, { useState } from "react";
import {
    View,
    TextInput,
    Image,
    Text,
    Animated,
    ScrollView,
    Pressable,
    KeyboardAvoidingView,
    Keyboard, TouchableWithoutFeedback
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";

import Styles from "../config/Styles";
import CusText from "../components/CusText";
import CusRoundTextInput from "../components/CusRoundTextInput";
import CusSearchField from "../components/CusSearchField";
import CusButton from "../components/CusButton";
import WorkerCard from "../components/WorkerCard";

export default function BookingDetails({ navigation }) {
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
    const [requested, setRequested] = useState(true)
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
                <View style={{ marginHorizontal: 25 }}>

                    <CusText>Carpenters construct, repair, and install building frameworks and structures made from wood and other materials.</CusText>
                    <CusText style={{ marginVertical: 10, fontFamily: "medium", fontSize: 18 }}>Task Name :</CusText>
                    <TextInput
                        maxLength={25}

                        numberOfLines={2}
                        style={{ borderWidth: 1, borderRadius: 6, height: 40, fontFamily: "medium", paddingHorizontal: 10 }}

                    />
                    <CusText style={{ marginVertical: 10, fontFamily: "medium", fontSize: 18 }}>Task Description :</CusText>
                    <TextInput
                        multiline={true}
                        maxLength={60}
                        numberOfLines={2}
                        returnKeyType='done'

                        style={{ borderWidth: 1, borderRadius: 6, height: 80, fontFamily: "medium", paddingHorizontal: 10 }}

                    />
                    <KeyboardAvoidingView behavior="position">
                        {
                            requested ?
                                <CusButton style={{ marginTop: 220 }} onPress={() => setRequested(false)} >
                                    SEND REQUEST
                                </CusButton> :
                                <View style={{marginTop: 185}}>
                                    <CusText style={{textAlign:"center"}}>Requesting..</CusText>
                                    <CusButton style={{  backgroundColor: "#E31D1D" }} onPress={() => setRequested(true)}  >
                                        CANCEL REQUEST
                                    </CusButton>

                                </View>}
                    </KeyboardAvoidingView>
                </View>
            </View>
        </TouchableWithoutFeedback>

    );
}
