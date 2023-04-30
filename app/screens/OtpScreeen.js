import React, { useRef, useState } from "react";
import {
    Image,
    Text,
    ImageBackground,
    KeyboardAvoidingView,
    Pressable,
    View, StyleSheet
} from "react-native";
// import OtpInputs from 'react-native-otp-inputs';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import Clipboard from "@react-native-community/clipboard";
import CusText from "../components/CusText";
import CusButton from "../components/CusButton";
import CusTextInput from "../components/CusTextInput";
import Styles from "../config/Styles";

export default function OtpScreeen({ navigation }) {
    const [code, setCode] = useState("");



    // code from package 
    const otpRef = useRef();
    const [s, setS] = useState(true);
    const [fourDigit, setFourDigit] = useState(false);


    const focusOTP = () => {
        otpRef.current.focus();
    };

    const resetOTP = () => {
        otpRef.current.reset();
    };

    const toggle = () => {
        setFourDigit((fourDigit) => !fourDigit);
    };
    const resend = () => {
        console.log("resent")
    }

    const handleChange = (code) => {
        console.log('currentCodeReturned', code, s);
        setS((s) => !s);
    };
    // end of package code
    const VerifyHandler = () => {
        navigation.navigate("main");
    };
    return (
        <ImageBackground
            source={require("../assets/images/signin.png")}
            style={{ flex: 1, paddingHorizontal: 20 }}
        >
            <CusText style={{ marginTop: 200, textAlign: "center", fontSize: 18, fontFamily: "medium" }}>
                We have sent an otp code to   +233542991059
            </CusText>

            <OTPInputView
                style={{ width: '80%', height: 200, marginHorizontal: 25 }}
                pinCount={6}
                code={code}
                onCodeChanged={code => setCode(code)}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled={(code) => {
                    console.log(`Code is ${code}, you are good to go!`)
                }}
            />
            <KeyboardAvoidingView behavior="position">
                <CusText style={{ fontFamily: "medium", marginTop: 350, marginHorizontal: 25, }}>Didn't recieve the code? <Pressable onPress={resend}><Text style={{ fontFamily: 'medium', color: Styles.colors.primary }}>Resend</Text></Pressable></CusText>
                <CusButton style={{ marginBottom: 50 }} onPress={VerifyHandler}>
                    Verify Code
                </CusButton>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    borderStyleBase: {
        width: 30,
        height: 45,

    },

    borderStyleHighLighted: {
        borderColor: "#03DAC6",
    },

    underlineStyleBase: {
        width: 40,
        height: 66,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Styles.colors.primary,
        color: "black", fontFamily: "medium",
        fontSize: 24,
    },

    underlineStyleHighLighted: {
        borderColor: "#03DAC6",
    },
});