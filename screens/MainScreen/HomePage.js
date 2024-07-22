import React, { useState,useEffect } from 'react';
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
  Modal
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { color } from '../../src/styles/color';
import Header from './Components/Header';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import HomeTab from './Components/HomeTab';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { useDispatch } from 'react-redux';
import { setOnBoardingComplete } from '../../src/store/slices/onBoardingSlice/onBoardingSlice';

const HomePage = () => {
  const [modalVisible, setModalVisible] = useState(true); // Start with the modal visible
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const TabData=[
    {
      id:1,
      name:'Popular',
    },
    {
      id:2,
      name:'Upcoming',
    },
    {
      id:3,
      name:'Friends',
    },
  ]

//  useEffect(()=>{
//   dispatch(setOnBoardingComplete(false));

//  })

  {
    return (
      <SafeAreaView style={styles.safeArea}>
        <SafeAreaView style={styles.safeArea}>
        <Header/>
        <HomeTab data={TabData}/>



          <View style={styles.centeredContainer}>
            <View style={styles.textContainer}>
              <Image
                source={require('../../src/assets/images/logo.png')}
              />

            </View>
          </View>

        </SafeAreaView>
        
      </SafeAreaView>
    );
  }

}
const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor:color.backgroundColor,
  },
  centeredContainer: {
    backgroundColor: '#050507',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Logo: {
    backgroundColor: 'red',
    alignSelf: 'center'
  },

});
export default HomePage;