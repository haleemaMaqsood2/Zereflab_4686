import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../../../screens/MainScreen/Profile/Profile";
import EditProfile from "../../../screens/MainScreen/Profile/EditProfile";

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

     
    </NavigationStack.Navigator>
  );
}

const styles = StyleSheet.create({});