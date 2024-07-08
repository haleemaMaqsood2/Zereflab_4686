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
import OnBoarding from './screens/OnBoarding';

import GetStarted from './screens/GetStarted';
import SignUp from './screens/SignUp';
import OnBoarding2 from './screens/OnBoarding2';
import SuggestedGroups from './screens/SuggestedGroups';
import JoinGroup from './screens/JoinGroup';
import ContactLoading from './screens/ContactLoading';
// import SyncLater from './screens/SyncLater';
import Location from './screens/Location';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="OnBoarding2" component={OnBoarding2} /> 
        <Stack.Screen name="SuggestedGroups" component={SuggestedGroups} />
        <Stack.Screen name="JoinGroup" component={JoinGroup} />
        <Stack.Screen name="ContactLoading" component={ContactLoading} />
        <Stack.Screen name="Location" component={Location} />



        



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