import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Notification from "../../../screens/MainScreen/Activity/Notification";
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
     
    </NavigationStack.Navigator>
  );
}

const styles = StyleSheet.create({});