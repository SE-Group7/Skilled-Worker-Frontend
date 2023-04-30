import React, { useState } from "react";
import {
    View, SafeAreaView, FlatList, Image, Text, Pressable

} from "react-native";
import { StatusBar } from "expo-status-bar";

import Styles from "../config/Styles";
import CusText from "../components/CusText";


export default function ClientProfile({ navigation }) {
    const DATA = [
        {
            id: "1",
            title: "RUSTY DRIVE",
            image:
                "https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg"
        },
        {
            id: "2",
            title: "SABOR MORENO",
            image:
                "https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg"
        },
        {
            id: "3",
            title: "0 MESTRE PUB",
            image:
                "https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg"
        },
        {
            id: "4",
            title: "GRILL 54 CHEF",
            image:
                "https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg"
        },
        {
            id: "5",
            title: "RUSTY DRIVE",
            image:
                "https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg"
        },
        {
            id: "6",
            title: "SABOR MORENO",
            image:
                "https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg"
        },
        {
            id: "7",
            title: "0 MESTRE PUB",
            image:
                "https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg"
        },
        {
            id: "8",
            title: "GRILL 54 CHEF",
            image:
                "https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg"
        }
    ];

    const WorkCard = ({ item }) => (
        <Pressable onPress={()=>{console.log("card "+ `${item.id}` +" tapped");navigation.navigate('bookingDetails')}} style={{ flex: 1, marginHorizontal: 10, marginBottom: 20,backgroundColor:Styles.colors.primary ,borderRadius:15}}>
            <Image
                style={{ width: "100%", height: 140 ,borderRadius:15}}
                source={{ uri: item.image }}
            />
            <CusText style={{ textAlign: "center", marginVertical: 5,fontFamily:"medium",fontSize:14 ,color:Styles.colors.white}}>{item.title}</CusText>
        </Pressable>
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
                    <Image source={require("../assets/images/edit.png")} style={{width:20,height:20}}/>
                </View>
            </View>


            <SafeAreaView style={{ flex: 1,paddingHorizontal:10 }}>
                <FlatList
                    data={DATA}
                    renderItem={WorkCard}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    style={{ flex: 1 }}
                    contentContainerStyle={{ paddingVertical: 20 }}
                />
            </SafeAreaView>
        </View>
    );
}
