import React, { useState } from "react";
import {
  View,
  TextInput,
  Image,
  Text,
  Animated,
  ScrollView,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";


import Styles from "../config/Styles";
import CusText from "../components/CusText";
import CusSearchField from "../components/CusSearchField";
import WorkerCard from "../components/WorkerCard";
import ModalContainer from "../components/ModalContainer";

export default function HomeScreen({ navigation }) {
  const [menuOpened, setMenuOpened] = useState(false);

  const bookings = [
    {
      id: 1,
      Worker: "Plumber",
      title: "Fix My Pipe",
      WorkerName: "John Doe",
      rating: "4.5",
    },
    {
      id: 2,
      Worker: "Electrician",
      title: "Fix My Light",
      WorkerName: "John Doe",
      rating: "4.2",
    },
    {
      id: 3,
      Worker: "Plumber",
      title: "Fix My Pipe",
      WorkerName: "John Doe",
      rating: "3.5",
    }
  ];




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
          <Pressable onPress={() => setMenuOpened(true)}>

            <Image
              source={require("../assets/images/client.jpg")}
              style={{ width: 38, height: 38, borderRadius: 38 }}
            />
          </Pressable>
          <CusSearchField icon="magnify" placeholder="Search Recent Service" />
        </View>
      </View>

      <CusText
        style={{
          fontFamily: "semibold",
          fontSize: 24,
          marginTop: 15,
          marginLeft: 20,
        }}
      >
        Recent Bookings
      </CusText>
      <ScrollView style={{ paddingHorizontal: 20 }}>
        {bookings.map((booking) => (
          <Pressable onPress={()=>navigation.navigate("aboutworker")}>
          <WorkerCard
            key={booking.id}
            title={booking.title}
            Worker={booking.Worker}
            WorkerName={booking.WorkerName}
            rating={booking.rating}
          /></Pressable>
        ))}
      </ScrollView>

        <ModalContainer show={menuOpened} height={180}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>

            <Image
              source={require("../assets/images/client.jpg")}
              style={{ width: 52, height: 52, borderRadius: 26 }}
            />
            <View style={{ marginLeft: 20 }}>

              <CusText style={{ fontFamily: "medium", fontSize: 18 }}>George Anku-Mensah</CusText>
              <CusText style={{ fontFamily: "regular", fontSize: 14 }}>View Profile</CusText>
            </View>

          </View><View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 0.5,
              marginTop: 18
            }}
          />
          <Pressable onPress={()=>{setMenuOpened(false); navigation.navigate("SignIn")}} style={{marginTop:15,flexDirection:"row"}}>
            <Image source={require("../assets/images/log-out.png")}/>
          <CusText style={{ fontFamily: "medium", fontSize: 18 ,marginLeft:20}}>Log Out</CusText>

          </Pressable>
        </ModalContainer>     

    </View>

  );
}
