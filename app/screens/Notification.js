import React, { useState } from "react";
import {
    View, SafeAreaView, FlatList, Image, Text, Pressable

} from "react-native";
import { StatusBar } from "expo-status-bar";

import Styles from "../config/Styles";
import CusText from "../components/CusText";


export default function Notifications({ navigation }) {
    const DATA = [{
        id: 1,
        title: "Request Accepted",
        subtitle: "blah blah blah",
        image: require("../assets/images/worker.png")
    }, {
        id: 2,
        title: "Request Accepted",
        subtitle: "blah blah blah",
        image: require("../assets/images/worker.png")
    }]


    const NotificationItem = ({ item }) => (
        <Pressable onPress={() => { console.log("card " + `${item.id}` + " tapped"); navigation.navigate('aboutworker') }} style={{ flex: 1, flexDirection: "row", alignItems: "center", marginHorizontal: 10, paddingLeft: 10, marginBottom: 20, backgroundColor: "#FCF7F7", borderRadius: 15, height: 70, ...Styles.shadow }}>
            <Image
                style={{ width: 60, height: 60, borderRadius: 15, marginRight: 20 }}
                source={item.image}
            />
            <View>
                <CusText style={{ marginVertical: 5, fontFamily: "semibold", fontSize: 18, color: Styles.colors.primary }}>{item.title}</CusText>
                <CusText style={{ marginVertical: 5, fontFamily: "medium", fontSize: 14, }}>{item.subtitle}</CusText>
            </View>
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
                      Notifications
                    </CusText>
                </View>
            </View>


            <SafeAreaView style={{ flex: 1, paddingHorizontal: 10 }}>
                <FlatList
                    data={DATA}
                    renderItem={NotificationItem}
                    keyExtractor={item => item.id}
                    // numColumns={2}
                    style={{ flex: 1 }}
                    contentContainerStyle={{ paddingVertical: 20 }}
                />
            </SafeAreaView>
        </View>
    );
}
