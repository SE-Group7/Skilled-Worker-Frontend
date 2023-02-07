import { Text, View, Image } from "react-native";
import React, { Component } from "react";
import CusText from "./CusText";
import defaultStyles from "../config/Styles";
export default class FeaturedCard extends Component {
  render() {
    return (
      <View
        style={[
          {
            borderRadius: 25,
            backgroundColor: "white",
            height: 332,
            width: 340,
            marginRight: 15,
          },
          Platform.OS === "ios"
            ? defaultStyles.iosShadow
            : defaultStyles.androidShadow,
        ]}
      >
        <Image
          source={require("../assets/images/cardimage.png")}
          style={{
            width: 320,
            height: 215,
            borderRadius: 15,
            marginTop: 10,
            marginHorizontal: 10,
          }}
        />
        <View style={{ marginHorizontal: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <CusText
                style={{
                  marginTop: 15,
                  fontFamily: "medium",
                  fontSize: 18,
                }}
              >
                Aseda Hostel
              </CusText>
              <View style={{ flexDirection: "row", alignItems: "center",marginLeft:15,marginTop:11 }}>
                <Image
                  source={require("../assets/images/Star.png")}
                  style={{ width: 12, height: 12, marginRight: 5 }}
                />
                <CusText style={{ fontSize: 12 ,fontFamily:"regular"}}>4.5</CusText>
              </View>
            </View>
            <Image source={require("../assets/images/Heart.png")} />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Image
              source={require("../assets/images/location.png")}
              style={{
                width: 18,
                height: 18,
                marginRight: 5,
                tintColor: "black",
              }}
            />
            <CusText style={{ fontSize: 12 }}>123 New Rd, Cape Coast</CusText>
          </View>
          <CusText style={{ fontSize: 12, marginTop: 5 }}>
            7 Rooms currently available
          </CusText>
        </View>
      </View>
    );
  }
}
