import React, { useCallback, useEffect, useState } from "react";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Font from "expo-font";
import { Image, Platform, View } from "react-native";

import HomeIcon from "./app/assets/images/home.png";
import AddIcon from "./app/assets/images/plus.png";
import NotificationIcon from "./app/assets/images/bell.png";
import ProfileIcon from "./app/assets/images/user.png";
import SignIn from "./app/screens/SignIn";
import SignUp from "./app/screens/SignUp";
import OtpScreen from "./app/screens/OtpScreeen";

import HomeScreen from "./app/screens/HomeScreen";
import defaultStyles from "./app/config/Styles";
import OnboardingScreen1 from "./app/screens/OnboardingScreen1";
import OnboardingScreen2 from "./app/screens/OnboardingScreen2";
import OnboardingScreen3 from "./app/screens/OnboardingScreen3";
import * as SplashScreen from "expo-splash-screen";
import AboutRecentWorker from "./app/screens/AboutRecentWorker";
import Booking from "./app/screens/Booking";
import BookingDetails from "./app/screens/BookingDetails";
import Notifications from "./app/screens/Notification";
import ClientProfile from "./app/screens/ClientProfile";
import EditClientProfile from "./app/screens/EditClientProfile";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();
const fetchFonts = () => {
  return Font.loadAsync({
    regular: require("./app/assets/fonts/Poppins-Regular.ttf"),
    bold: require("./app/assets/fonts/Poppins-Bold.ttf"),
    semibold: require("./app/assets/fonts/Poppins-SemiBold.ttf"),
    medium: require("./app/assets/fonts/Poppins-Medium.ttf"),
  });
};
const BottomTab = createBottomTabNavigator();

export default function App() {
  const Stack = createNativeStackNavigator();
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await fetchFonts();
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  onLayoutRootView();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        // initialRouteName="main"
        initialRouteName="editclientProfile"

      // initialRouteName="verifyNumber"
      >
        <Stack.Screen name="main" component={BottomNavigation} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="o1" component={OnboardingScreen1} />
        <Stack.Screen name="o2" component={OnboardingScreen2} />
        <Stack.Screen name="o3" component={OnboardingScreen3} />
        <Stack.Screen name="otp" component={OtpScreen} />
        <Stack.Screen name="aboutworker" component={AboutRecentWorker} />
        <Stack.Screen name="bookingDetails" component={BookingDetails} />
        <Stack.Screen name="editclientProfile" component={EditClientProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const BottomNavigation = () => (
  <View style={{ flex: 1, backgroundColor: "#fbfdff" }}>
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: defaultStyles.colors.primary,
        tabBarInactiveTintColor: defaultStyles.colors.Gray_color,
        tabBarItemStyle: {
          marginBottom: 15,
          marginTop: 0,
          gap:12
        },
        tabBarStyle: {
          height: 100,
          paddingTop:20,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          ...(Platform.OS == "android"
            ? defaultStyles.androidShadow
            : defaultStyles.iosShadow),
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "regular",
          marginTop: 0,
        },
      }}
    >
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              style={{
                tintColor: focused
                  ? defaultStyles.colors.primary
                  : defaultStyles.colors.Gray_color,
              }}
              source={HomeIcon}
            />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              style={{
                tintColor: focused
                  ? defaultStyles.colors.primary
                  : defaultStyles.colors.Gray_color,
              }}
              source={AddIcon}
            />
          ),
        }}
        name="Add"
        component={Booking}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              style={{
                tintColor: focused
                  ? defaultStyles.colors.primary
                  : defaultStyles.colors.Gray_color,
              }}
              source={NotificationIcon}
            />
          ),
        }}
        name="Notifications"
        component={Notifications}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              style={{
                tintColor: focused
                  ? defaultStyles.colors.primary
                  : defaultStyles.colors.Gray_color,
              }}
              source={ProfileIcon}
            />
          ),
        }}
        name="Profile"
        component={ClientProfile}
      />
    </BottomTab.Navigator>
  </View>
);
