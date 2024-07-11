import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  TouchableOpacityBase
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from './screens/OnBoarding/Splash';
import VerifyCode from './screens/OnBoarding/VerifyCode';
import NameInputScreen from './screens/OnBoarding/NameInputScreen';
import Carousel from './screens/OnBoarding/Carousel';
import SignIn from './screens/OnBoarding/SignIn';
import DateOfBirth from './screens/OnBoarding/DateOfBirth';
import UserNameScreen from './screens/OnBoarding/UserNameScreen';
import ImageUpload from './screens/OnBoarding/ImageUpload';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Carousel" component={Carousel} />

        <Stack.Screen name="VerifyCode" component={VerifyCode} />
        <Stack.Screen name="NameInputScreen" component={NameInputScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="DateOfBirth" component={DateOfBirth} />

        <Stack.Screen name="UserNameScreen" component={UserNameScreen} />
        <Stack.Screen name="ImageUpload" component={ImageUpload} />




        



      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    // height:'50%'
  },
  Logo: {
    textAlign: 'center',
    color: 'white'
  },
  title: {
    textAlign: 'center',
    color: 'white'
  },
  subTitle: {
    textAlign: 'center',
    color: 'white'
  },
});
export default App;