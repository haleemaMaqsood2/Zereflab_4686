import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../../screens/MainScreen/HomePage";
import BottomTabStack from "./bottomTabStack";


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
        </MainStack.Navigator>
    );
}

// const styles = StyleSheet.create({});