import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import VerifyCode from "../../screens/OnBoarding/VerifyCode";
import NameInputScreen from "../../screens/OnBoarding/NameInputScreen";
import Carousel from "../../screens/OnBoarding/Carousel";
import SignIn from "../../screens/OnBoarding/SignIn";
import DateOfBirth from "../../screens/OnBoarding/DateOfBirth";
import UserNameScreen from "../../screens/OnBoarding/UserNameScreen";
import ImageUpload from "../../screens/OnBoarding/ImageUpload";
import DiscoverFriends from "../../screens/OnBoarding/DiscoverFriends";
import AddFriendScreen from "../../screens/OnBoarding/AddFriendScreen";
import Location from "../../screens/OnBoarding/Location";
import Splash from "../../screens/OnBoarding/Splash";
// import OnBoarding from "../screens/onBoarding/OnBoarding";

const OnBoardingStack = () => {
  const OnBoardingStack = createNativeStackNavigator();

  return (
    <OnBoardingStack.Navigator
      initialRouteName={"onBoarding"}
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <OnBoardingStack.Screen name="onBoarding" component={OnBoarding} /> */}
      <OnBoardingStack.Screen name="Splash" component={Splash} />
        <OnBoardingStack.Screen name="Carousel" component={Carousel} />

        <OnBoardingStack.Screen name="VerifyCode" component={VerifyCode} />
        <OnBoardingStack.Screen name="NameInputScreen" component={NameInputScreen} />
        <OnBoardingStack.Screen name="SignIn" component={SignIn} />
        <OnBoardingStack.Screen name="DateOfBirth" component={DateOfBirth} />

        <OnBoardingStack.Screen name="UserNameScreen" component={UserNameScreen} />
        <OnBoardingStack.Screen name="ImageUpload" component={ImageUpload} />
        <OnBoardingStack.Screen name="DiscoverFriends" component={DiscoverFriends} />
        <OnBoardingStack.Screen name="AddFriendScreen" component={AddFriendScreen} />
        <OnBoardingStack.Screen name="Location" component={Location} />


    </OnBoardingStack.Navigator>
  );
};

export default OnBoardingStack;

const styles = StyleSheet.create({});