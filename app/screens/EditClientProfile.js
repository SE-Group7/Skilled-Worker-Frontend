import React, { useState } from "react";
import {
    View, SafeAreaView, FlatList, TextInput, Image, Text, Pressable, ScrollView, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard,ActivityIndicator

} from "react-native";
import { StatusBar } from "expo-status-bar";
import ImagePicker from 'react-native-image-picker';

import Styles from "../config/Styles";
import CusText from "../components/CusText";
import CusButton from "../components/CusButton";
import defaultAvatar from "../assets/images/avatar.png";


export default function EditClientProfile({ navigation }) {
    const [fullname, setFullname] = useState("John Doe");
    const [age, setAge] = useState("24");
    const [gender, setGender] = useState("male");
    const [phone, setPhone] = useState("0240000000");
    const [location, setLocation] = useState("Accra, Ghana");
    const [avatar, setAvatar] = useState(defaultAvatar);


    const user = {
        fullname, age, gender, phone, location
    }
    const handlePicker = () => {
        console.log('edit');
        // ImagePicker.showImagePicker({}, (response) => {
        //     console.log('Response = ', response);
        //     if (response.didCancel) {
        //         console.log('User cancelled image picker');
        //     } else if (response.error) {
        //         console.log('ImagePicker Error: ', response.error);
        //     } else if (response.customButton) {
        //         console.log('User tapped custom button: ', response.customButton);
        //     } else {
        //         setAvatar({ uri: response.uri });
        //         // here we can call a API to upload image on server
        //     }
        // });
    }


    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>

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
                            Edit Profile
                        </CusText>
                    </View>
                </View>


                <View style={{ flex: 1, paddingHorizontal: 10 }}>
                    <TouchableWithoutFeedback onPress={() => handlePicker()}>
                        <View style={{ marginTop: 15, justifyContent: "center", alignItems: "center", }}>

                            <Image source={avatar}  PlaceholderContent={<ActivityIndicator />}/>
                            <View style={{ backgroundColor: Styles.colors.primary, width: 34, height: 34, justifyContent: "center", alignItems: "center", borderRadius: 17, top: -30, left: 50 }}>
                                <Image source={require("../assets/images/plus.png")} style={{ tintColor: "white" }} /></View>

                        </View>
                    </TouchableWithoutFeedback>
                    <View style={{ paddingHorizontal: 10 }}>

                        <CusText style={{ fontFamily: "medium", fontSize: 16, marginBottom: 5 }}>Full Name</CusText>
                        <TextInput
                            maxLength={25}
                            value={user.fullname}
                            onChangeText={(text) => setFullname(text)}
                            numberOfLines={2}
                            style={{ borderWidth: 1, borderRadius: 6, height: 40, fontFamily: "medium", paddingHorizontal: 10, color: Styles.colors.primary }}

                        />
                        <CusText style={{ fontFamily: "medium", fontSize: 16, marginBottom: 5, marginTop: 10 }}>Age</CusText>
                        <TextInput
                            maxLength={25}
                            value={user.age}
                            onChangeText={(text) => setAge(text)}
                            numberOfLines={2}
                            style={{ borderWidth: 1, borderRadius: 6, height: 40, fontFamily: "medium", paddingHorizontal: 10, color: Styles.colors.primary }}

                        />
                        <CusText style={{ fontFamily: "medium", fontSize: 16, marginBottom: 5, marginTop: 10 }}>Phone Number</CusText>
                        <TextInput
                            maxLength={25}
                            value={user.phone}
                            onChangeText={(text) => setPhone(text)}
                            numberOfLines={2}
                            style={{ borderWidth: 1, borderRadius: 6, height: 40, fontFamily: "medium", paddingHorizontal: 10, color: Styles.colors.primary }}

                        />
                        <View style={{ flexDirection: "row", columnGap: 20, marginTop: 20 }}>
                            <Pressable onPress={() => setGender("male")} style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                                <View style={{ borderWidth: 1, borderRadius: 20, width: 20, height: 20, justifyContent: "center", alignItems: "center" }}>
                                    <View style={{ borderRadius: 15, width: 10, height: 10, backgroundColor: (user.gender == "male") ? Styles.colors.primary : "transparent" }} />
                                </View>
                                <CusText>Male</CusText>
                            </Pressable>
                            <Pressable onPress={() => setGender("female")} style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                                <View style={{ borderWidth: 1, borderRadius: 20, width: 20, height: 20, justifyContent: "center", alignItems: "center" }}>
                                    <View style={{ borderRadius: 15, width: 10, height: 10, backgroundColor: (user.gender == "female") ? Styles.colors.primary : "transparent" }} />
                                </View>
                                <CusText>Female</CusText>
                            </Pressable>
                        </View>
                        <CusText style={{ fontFamily: "medium", fontSize: 16, marginBottom: 5, marginTop: 10 }}>Location</CusText>
                        <TextInput
                            maxLength={25}
                            value={user.location}
                            onChangeText={(text) => setLocation(text)}
                            numberOfLines={2}
                            style={{ borderWidth: 1, borderRadius: 6, height: 40, fontFamily: "medium", paddingHorizontal: 10, color: Styles.colors.primary }}

                        />
                    </View>
                    <KeyboardAvoidingView behavior="height">
                        <CusButton style={{ marginTop: 20 }} onPress={() => console.log('update')} >
                            UPDATE
                        </CusButton>
                    </KeyboardAvoidingView>

                </View>
            </View>
        </TouchableWithoutFeedback>

    );
}
