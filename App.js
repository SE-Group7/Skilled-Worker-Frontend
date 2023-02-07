import React, { useCallback, useEffect, useState } from "react";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Font from "expo-font";
import HomeIcon from "./app/assets/images/Menu.png";
import FavoriteIcon from "./app/assets/images/Shape.png";
import InboxIcon from "./app/assets/images/Comment.png";
import NotificationIcon from "./app/assets/images/Notification.png";
import { Image, Platform, View } from "react-native";

import OnboardingScreen from "./app/screens/OnboardingScreen";
import SignUpScreen from "./app/screens/SignUpScreen";
import SignInScreen from "./app/screens/SignInScreen";
import VerificationNumberScreen from "./app/screens/VerificationNumberScreen";
import VerificationEmailScreen from "./app/screens/VerificationNumberScreen copy";
import ConfirmOTPScreen from "./app/screens/ConfirmOTPScreen";
import HomeScreen from "./app/screens/HomeScreen";
import RoleSelectionScreen from "./app/screens/RoleSelectionScreen";
import defaultStyles from "./app/config/Styles";
// import Test from "./app/screens/Test";

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
  //
  // const BottomTabs = () => {
  //   return (
  //     <Tab.Navigator>
  //       <Tab.Screen name="home" component={HomeScreen} />

  //     </Tab.Navigator>
  //   );
  // }

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
        <Stack.Screen name="onboarding" component={OnboardingScreen} />
        <Stack.Screen name="signup" component={SignUpScreen} />
        <Stack.Screen name="signin" component={SignInScreen} />
        <Stack.Screen
          name="verifyNumber"
          component={VerificationNumberScreen}
        />
        <Stack.Screen name="verifyEmail" component={VerificationEmailScreen} />
        <Stack.Screen name="confirmOTP" component={ConfirmOTPScreen} />
        <Stack.Screen name="main" component={BottomNavigation} />
        <Stack.Screen name="role" component={RoleSelectionScreen} />
        {/* <Stack.Screen name="test" component={Test} /> */}
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
        name="Discover"
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
        name="Favorites"
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
        name="Inbox"
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
        name="Notifications"
        component={HomeScreen}
      />
    </BottomTab.Navigator>
  </View>
);
