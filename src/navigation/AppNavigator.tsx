import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import UploadDocumentsScreen from "../screens/UploadDocumentsScreen";
import AIAnalysisScreen from "../screens/AIAnalysisScreen";
import LoanResultScreen from "../screens/LoanResultScreen";
import EMICalculatorScreen from "../screens/EMICalculatorScreen";
import ProfileScreen from "../screens/ProfileScreen";
import LoanHistoryScreen from "../screens/LoanHistoryScreen";
import NotificationScreen from "../screens/NotificationScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
        />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />

        <Stack.Screen
          name="Register"
          component={RegisterScreen}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="UploadDocuments"
          component={UploadDocumentsScreen}
        />

        <Stack.Screen
          name="AIAnalysis"
          component={AIAnalysisScreen}
        />

        <Stack.Screen
          name="LoanResult"
          component={LoanResultScreen}
        />

        <Stack.Screen
          name="EMICalculator"
          component={EMICalculatorScreen}
        />

        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
        />

        <Stack.Screen
          name="LoanHistory"
          component={LoanHistoryScreen}
        />

        <Stack.Screen
          name="Notifications"
          component={NotificationScreen}
        />

        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}