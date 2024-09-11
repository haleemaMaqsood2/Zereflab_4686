import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { createNativeStackNavigator,TransitionPresets } from "@react-navigation/native-stack";

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
import SignInEmail from "../../screens/OnBoarding/SignInEmail";

// import OnBoarding from "../screens/onBoarding/OnBoarding";

const OnBoardingStack = () => {
  const OnBoardingStack = createNativeStackNavigator();

  return (
    <OnBoardingStack.Navigator
      initialRouteName={"onBoarding"}
      screenOptions={{
        headerShown: false,
        animationEnabled: false, // Disable the animation

      }}
    >
      {/* <OnBoardingStack.Screen name="onBoarding" component={OnBoarding} /> */}
      <OnBoardingStack.Screen name="Splash" component={Splash} options={{ animationEnabled: false }}/>
        <OnBoardingStack.Screen name="Carousel" component={Carousel} />

        <OnBoardingStack.Screen name="VerifyCode" component={VerifyCode}  options={{ animationEnabled: false }}/>
        <OnBoardingStack.Screen name="NameInputScreen" component={NameInputScreen} />
        <OnBoardingStack.Screen name="SignIn" component={SignIn}  options={{ animationEnabled: false }}
        // options={{
        //   ...TransitionPresets.DefaultTransition, // Use default transition presets
        //   transitionSpec: {
        //     open: {
        //       animation: 'timing',
        //       config: {
        //         duration: 0, // Set duration to 0 to eliminate the animation effect
        //       },
        //     },
        //     close: {
        //       animation: 'timing',
        //       config: {
        //         duration: 0,
        //       },
        //     },
        //   },
        // }}
         />
        <OnBoardingStack.Screen name="DateOfBirth" component={DateOfBirth} />

        <OnBoardingStack.Screen name="UserNameScreen" component={UserNameScreen}  options={{ animationEnabled: false }}/>
        <OnBoardingStack.Screen name="ImageUpload" component={ImageUpload} />
        <OnBoardingStack.Screen name="DiscoverFriends" component={DiscoverFriends}  options={{ animationEnabled: false }}/>
        <OnBoardingStack.Screen name="AddFriendScreen" component={AddFriendScreen}  options={{ animationEnabled: false }} />
        <OnBoardingStack.Screen name="Location" component={Location}  options={{ animationEnabled: false }} />
        <OnBoardingStack.Screen name="SignInEmail" component={SignInEmail}  options={{ animationEnabled: false }} />


    </OnBoardingStack.Navigator>
  );
};

export default OnBoardingStack;

const styles = StyleSheet.create({});