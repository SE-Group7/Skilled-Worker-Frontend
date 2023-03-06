import React from "react";
import { ImageBackground,Button } from "react-native";
import CusText from "../components/CusText";
import Screen from "../components/Screen";

export default function OnboardingScreen1 ({navigation}){
    
    return(
        <Screen style={{flex:1}}>
            <ImageBackground source={require("../assets/images/background.jpg")} style={{flex:1}}>
                <CusText>Josh dey build the splash screen</CusText>
                    <CusText style={{fontSize:34,fontFamily:"bold"}}>this is the description</CusText>
                    <Button title="next" onPress={
                        navigation.navigate("main")
                    }/>
            </ImageBackground>
        </Screen>
    )
}