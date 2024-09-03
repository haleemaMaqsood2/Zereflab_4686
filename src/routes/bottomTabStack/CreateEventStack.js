import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EventForm from "../../../screens/MainScreen/CreateEvent/EventForm";
import InviteFriend from "../../../screens/MainScreen/CreateEvent/InviteFriend";
import ManagePost from "../../../screens/MainScreen/CreateEvent/ManagePost";
ManagePost
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
      <NavigationStack.Screen name="InviteFriend" component={InviteFriend}/>
      <NavigationStack.Screen name="ManagePost" component={ManagePost}/>

    </NavigationStack.Navigator>
  );
}

const styles = StyleSheet.create({});