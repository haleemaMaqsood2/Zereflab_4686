import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { navigate, navigationRef } from "./RootNavigator/RootNavigation"
import OnBoardingStack from "./OnBoardingStack";
import { useSelector } from "react-redux";
import MainStack from "./MainStack";

const Router = () => {
  
  return (
    <NavigationContainer ref={navigationRef}>
      
        <OnBoardingStack />
     
        {/* <MainStack /> */}
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({});