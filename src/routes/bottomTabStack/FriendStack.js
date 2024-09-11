import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Notification from "../../../screens/MainScreen/Activity/Notification";
import Friends from "../../../screens/MainScreen/Friends/Friends";
import FriendProfile from "../../../screens/MainScreen/Profile/FriendProfile";
FriendProfile
export default function FriendStack() {
  const NavigationStack = createNativeStackNavigator();
  return (
    <NavigationStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <NavigationStack.Screen name="hospital" component={Hospital} /> */}
   
      <NavigationStack.Screen
        name="Friends"
        component={Friends}
      />
       <NavigationStack.Screen
        name="FriendProfile"
        component={FriendProfile}
      />
     
    </NavigationStack.Navigator>
  );
}

const styles = StyleSheet.create({});