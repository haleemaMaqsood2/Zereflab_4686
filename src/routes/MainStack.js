import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../../screens/MainScreen/HomePage";
import BottomTabStack from "./bottomTabStack";
import EventDetails from "../../screens/MainScreen/EventDetails";
import Attendees from "../../screens/MainScreen/Attendees";

export default function MainStack() {
    const MainStack = createNativeStackNavigator();


    return (
        <MainStack.Navigator
        // initialRouteName={"Main"}
        screenOptions={{
                headerShown: false,
            }}
        >
                  <MainStack.Screen name="bottomTab" component={BottomTabStack} />

            <MainStack.Screen name="HomePage" component={HomePage} />
            <MainStack.Screen name="EventDetails" component={EventDetails} />
            <MainStack.Screen name="Attendees" component={Attendees} />

        </MainStack.Navigator>
    );
}

// const styles = StyleSheet.create({});