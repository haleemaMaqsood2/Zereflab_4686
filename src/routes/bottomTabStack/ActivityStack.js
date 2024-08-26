import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Notification from "../../../screens/MainScreen/Activity/Notification";
import Friends from "../../../screens/MainScreen/Friends/Friends";
export default function ActivityStack() {
  const NavigationStack = createNativeStackNavigator();
  return (
    <NavigationStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <NavigationStack.Screen name="hospital" component={Hospital} /> */}
      <NavigationStack.Screen
        name="Notification"
        component={Notification}
      />
      <NavigationStack.Screen
        name="Friends"
        component={Friends}
      />
     
    </NavigationStack.Navigator>
  );
}

const styles = StyleSheet.create({});