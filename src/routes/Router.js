import React, { useEffect, useState } from "react";
import { StyleSheet ,Alert} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { navigate, navigationRef } from "./RootNavigator/RootNavigation"
import OnBoardingStack from "./OnBoardingStack";
import { useSelector } from "react-redux";
import MainStack from "./MainStack";

const Router = () => {
  const onBoardingComplete = useSelector(
    (state) => state.onBoardingSlice.onBoardingComplete
  );
  // Alert.alert(JSON.stringify(onBoardingComplete))
  console.log("OnbOading complerte ststaus::::",onBoardingComplete)
  return (
    <NavigationContainer ref={navigationRef}>
      
        {onBoardingComplete ? <MainStack /> : <OnBoardingStack />}
        {/* <OnBoardingStack /> */}


     
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({});