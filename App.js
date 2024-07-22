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
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from './src/store/Store';
import Router from './src/routes/Router';


const Stack = createNativeStackNavigator();

function App() {
  return (
   
    <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            <Router />
    </PersistGate>
  </Provider>
  );
}

const styles = StyleSheet.create({
 
});
export default App;