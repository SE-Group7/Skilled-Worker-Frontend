import React, { useRef, useState } from "react";
import {
    Image,
    Text,
    ImageBackground,
    KeyboardAvoidingView,
    Pressable,
    View,StyleSheet
} from "react-native";
// import OtpInputs from 'react-native-otp-inputs';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import Clipboard from "@react-native-community/clipboard";
import CusText from "../components/CusText";
import CusButton from "../components/CusButton";
import CusTextInput from "../components/CusTextInput";
import Styles from "../config/Styles";

export default function OtpScreeen({ navigation }) {
    const [code,setCode] = useState("");



    // code from package 
    // const otpRef = useRef();
    // const [s, setS] = useState(true);
    // const [fourDigit, setFourDigit] = useState(false);


    // const focusOTP = () => {
    //     otpRef.current.focus();
    // };

    // const resetOTP = () => {
    //     otpRef.current.reset();
    // };

    // const toggle = () => {
    //     setFourDigit((fourDigit) => !fourDigit);
    // };

    // const handleChange = (code) => {
    //     console.log('currentCodeReturned', code, s);
    //     setS((s) => !s);
    // };
    // end of package code
    const SignInHandler = () => {
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
            {/* <View style={{ marginTop: 50 }}>

                {fourDigit ? (
                    <OtpInputs
                        clearTextOnFocus
                        handleChange={handleChange}
                        keyboardType="phone-pad"
                        numberOfInputs={4}
                        ref={otpRef}
                        selectTextOnFocus={false}
                        autofillFromClipboard
                        textAlign="center"
                        inputStyles={{ fontSize: 20, fontFamily: "semibold", textAlign: "center" }}
                        inputContainerStyles={{ borderWidth: 1, borderRadius: 10, height: 66, width: 48, alignItems: "center" }}
                    />
                ) : (
                    <OtpInputs keyboardType="phone-pad" numberOfInputs={6} ref={otpRef} autofillFromClipboard
                        textAlign="center"
                        inputStyles={{ fontSize: 20, fontFamily: "semibold", textAlign: "center" }}
                        inputContainerStyles={{ borderWidth: 1, borderRadius: 10, height: 66, width: 48, alignItems: "center" }} />
                )}
            </View> */}
            <OTPInputView
                style={{ width: '80%', height: 200 }}
                pinCount={4}
                code={code}
                onCodeChanged={code=>setCode(code)}
                // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                // onCodeChanged = {code => { this.setState({code})}}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled={(code) => {
                    console.log(`Code is ${code}, you are good to go!`)
                }}
            />
            <KeyboardAvoidingView behavior="position">
                <CusButton style={{ marginTop: 441 }} onPress={SignInHandler}>
                    Verify Code
                </CusButton>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    borderStyleBase: {
      width: 30,
      height: 45
    },
  
    borderStyleHighLighted: {
      borderColor: "#03DAC6",
    },
  
    underlineStyleBase: {
      width: 30,
      height: 45,
      borderWidth: 0,
      borderBottomWidth: 1,
    },
  
    underlineStyleHighLighted: {
      borderColor: "#03DAC6",
    },
  });