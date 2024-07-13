import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../screens/MainScreen/HomePage";


export default function MainStack() {
    const MainStack = createNativeStackNavigator();


    return (
        <MainStack.Navigator
        // initialRouteName={"Main"}
        screenOptions={{
                headerShown: false,
            }}
        >
            <MainStack.Screen name="HomePage" component={HomePage} />
        </MainStack.Navigator>
    );
}

// const styles = StyleSheet.create({});