import React, { useCallback, useEffect, useState } from "react";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Font from "expo-font";
import { Image, Platform, View } from "react-native";

import HomeIcon from "./app/assets/images/Menu.png";
import FavoriteIcon from "./app/assets/images/Shape.png";
import InboxIcon from "./app/assets/images/Comment.png";
import NotificationIcon from "./app/assets/images/Notification.png";
import SignIn from "./app/screens/SignIn";
import SignUp from "./app/screens/SignUp";

import HomeScreen from "./app/screens/HomeScreen";
import defaultStyles from "./app/config/Styles";
import OnboardingScreen1 from "./app/screens/OnboardingScreen1";
import OnboardingScreen2 from "./app/screens/OnboardingScreen2";
import OnboardingScreen3 from "./app/screens/OnboardingScreen3";
import * as SplashScreen from "expo-splash-screen";

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
        initialRouteName="main"
        // initialRouteName="verifyNumber"
      >
        <Stack.Screen name="main" component={BottomNavigation} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="o1" component={OnboardingScreen1}/>
        <Stack.Screen name="o2" component={OnboardingScreen2}/>
        <Stack.Screen name="o3" component={OnboardingScreen3}/>
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
          marginBottom: 27,
          marginTop: 15,
        },
        tabBarStyle: {
          height: 85,
          height: 85,
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
              source={FavoriteIcon}
            />
          ),
        }}
        name="Add"
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
              source={InboxIcon}
            />
          ),
        }}
        name="Notifications"
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
              source={NotificationIcon}
            />
          ),
        }}
        name="Profile"
        component={HomeScreen}
      />
    </BottomTab.Navigator>
  </View>
);
