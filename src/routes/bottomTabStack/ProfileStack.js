import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../../../screens/MainScreen/Profile/Profile";
import EditProfile from "../../../screens/MainScreen/Profile/EditProfile";
import ProfileSetting from "../../../screens/MainScreen/Profile/ProfileSetting";
import AccountDetail from "../../../screens/MainScreen/Profile/AccountDetail";
import PrivacyScreen from "../../../screens/MainScreen/Profile/PrivacyScreen";
import LoadingScreen from "../../../screens/MainScreen/Profile/LoadingScreen";

export default function ProfileStack() {
  const NavigationStack = createNativeStackNavigator();
  return (
    <NavigationStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <NavigationStack.Screen name="hospital" component={Hospital} /> */}
           <NavigationStack.Screen name="Profile" component={Profile} />
           <NavigationStack.Screen name="EditProfile" component={EditProfile} />
           <NavigationStack.Screen name="ProfileSetting" component={ProfileSetting} />
           <NavigationStack.Screen name="AccountDetail" component={AccountDetail} />
           <NavigationStack.Screen name="PrivacyScreen" component={PrivacyScreen} />
           <NavigationStack.Screen name="LoadingScreen" component={LoadingScreen} />

     
    </NavigationStack.Navigator>
  );
}

const styles = StyleSheet.create({});