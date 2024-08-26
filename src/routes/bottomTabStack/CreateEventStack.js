import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EventForm from "../../../screens/MainScreen/CreateEvent/EventForm";

export default function CreateEventStack() {
  const NavigationStack = createNativeStackNavigator();
  return (
    <NavigationStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <NavigationStack.Screen name="hospital" component={Hospital} /> */}
      <NavigationStack.Screen name="EventForm" component={EventForm}/>
      
    </NavigationStack.Navigator>
  );
}

const styles = StyleSheet.create({});