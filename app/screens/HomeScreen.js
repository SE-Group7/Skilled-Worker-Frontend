import React, { useState } from "react";
import { Image, View, FlatList, Pressable } from "react-native";
import Constants from "expo-constants";
import { AntDesign } from "@expo/vector-icons";

import defaultStyles from "../config/Styles";

import Screen from "../components/Screen";
import CusText from "../components/CusText";
import CusSearchField from "../components/CusSearchField";
import FeaturedCard from "../components/FeaturedCard";
import NearbyCard from "../components/NearbyCard";

export default function HomeScreen({ navigation }) {
  const topPadding = 71 - Constants.statusBarHeight;
  const [hostel, setHostel] = useState([]);

  return (
    <Screen style={{ backgroundColor: "#fbfdff" }}>
      <View
        style={[
          {
            borderBottomEndRadius: 30,
            borderBottomStartRadius: 30,
            backgroundColor: "#fbfdff",
            paddingHorizontal: 25,
          },
          Platform.OS === "ios"
            ? defaultStyles.iosShadow
            : defaultStyles.androidShadow,
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: topPadding,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../assets/images/location.png")}
              style={{ width: 18, height: 18, marginRight: 5 }}
            />
            <CusText style={{ fontFamily: "medium", fontSize: 14 }}>
              Cape Coast
            </CusText>
          </View>
          <Image
            source={require("../assets/images/avatar.png")}
            style={{ marginBottom: 14 }}
          />
        </View>
        <CusSearchField
          icon="magnify"
          placeholder="Search hostel by location,name..."
          style={{
            fontSize: 12,
            fontFamily: "regular",
          }}
        />
      </View>
      <View>
        <CusText style={{ fontFamily: "medium", fontSize: 16, marginLeft: 25 }}>
          Featured Listing
        </CusText>
        <FlatList
          style={{ marginLeft: 25 }}
          data={[{}, {}, {}]}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item?.id?.toString()}
          renderItem={({ item }) => <FeaturedCard />}
        />
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 25,
        }}
      >
        <CusText style={{ fontFamily: "medium", fontSize: 16 }}>
          Nearby your location
        </CusText>
        <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
          <CusText
            style={{
              fontFamily: "medium",
              fontSize: 12,
              color: defaultStyles.colors.Gray_color,
              marginRight: 4,
            }}
          >
            View all
          </CusText>
          <AntDesign
            name="right"
            size={10}
            color={defaultStyles.colors.Gray_color}
            style={{ paddingBottom: 3 }}
          />
        </Pressable>
      </View>
      <FlatList
        data={[{}, {}, {}]}
        horizontal
        keyExtractor={(item) => item?.id?.toString()}
        renderItem={({ item }) => <NearbyCard />}
      />
    </Screen>
  );
}
