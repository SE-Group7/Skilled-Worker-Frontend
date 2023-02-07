import { Text, View, Image } from "react-native";
import React, { Component } from "react";
import CusText from "./CusText";
import defaultStyles from "../config/Styles";
export default class NearbyCard extends Component {
  render() {
    return (
      <View
        style={[
          {
            flexDirection: "row",
            alignItems: "flex-start",
            borderRadius: 25,
            backgroundColor: "white",
     
            width: 340,marginHorizontal:25,marginVertical:9,
            padding: 5,
          },
          Platform.OS === "ios"
            ? defaultStyles.iosShadow
            : defaultStyles.androidShadow,
        ]}
      >
        <Image
          source={require("../assets/images/cardimage.png")}
          style={{
            width: 120,
            height: 115,
            borderRadius: 15,
          }}
        />
        <View style={{ marginLeft: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
              <CusText
                style={{
                  fontFamily: "medium",
                  fontSize: 18,
                }}
              >
                Aseda Hostel
              </CusText>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 15,
           
                }}
              >
                <Image
                  source={require("../assets/images/Star.png")}
                  style={{ width: 12, height: 12, marginRight: 5 }}
                />
                <CusText style={{ fontSize: 12, fontFamily: "regular" }}>
                  4.5
                </CusText>
              </View>
           
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 5,
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
