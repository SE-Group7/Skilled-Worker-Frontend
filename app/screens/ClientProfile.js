import React, { useState } from "react";
import {
    View, SafeAreaView, FlatList, Image, Text, Pressable, ScrollView

} from "react-native";
import { StatusBar } from "expo-status-bar";

import Styles from "../config/Styles";
import CusText from "../components/CusText";


export default function ClientProfile({ navigation }) {

    const DATA = [{
        id: 1,
        title: "Fullname",
        value: "John Doe",
    }, {
        id: 2,
        title: "Age",
        value: "24",
    }, {
        id: 3,
        title: "Gender",
        value: "Male",
    }, {
        id: 4,
        title: "Phone Number",
        value: "024 000 0000",
    }, {
        id: 5,
        title: "location",
        value: "Accra, Ghana",
    }]
    const DetailCard = ({ item }) => (
        <View onPress={() => { console.log("card " + `${item.id}` + " tapped"); navigation.navigate('bookingDetails') }} style={{ flex: 1, marginHorizontal: 10, marginBottom: 10, borderRadius: 15 }}>

            <CusText style={{  fontFamily: "medium", fontSize: 16,  }}>{item.title}</CusText>
            <CusText style={{  fontFamily: "medium", fontSize: 14,color: Styles.colors.primary }}>{item.value}</CusText>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 0.5,
                    marginTop: 10
                }}
            />
        </View>
    );


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
                            fontSize: 24,
                            fontFamily: "semibold",
                            top: -2,
                        }}
                    >
                        Profile
                    </CusText>
                    <Pressable onPress={()=>navigation.navigate("editclientProfile")}>

                        <Image source={require("../assets/images/edit.png")} style={{ width: 20, height: 20 }} /></Pressable>
                </View>
            </View>


            <View style={{ flex: 1, paddingHorizontal: 10 }}>
                <View style={{ marginTop: 15,marginBottom:24, justifyContent: "center", alignItems: "center" }}>

                    <Image source={require('../assets/images/avatar.png')} s />
                </View>
                {DATA.map((item) => (<DetailCard item={item} key={item.id}/>))}
              
            </View>
        </View>
    );
}
