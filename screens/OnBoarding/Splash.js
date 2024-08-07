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
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { color } from '../../src/styles/color';
import { useSelector } from 'react-redux';
// import { Svg } from 'react-native-svg';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Set a timer for 5 seconds and navigate to VerifyCode screen
    const timer = setTimeout(() => {
      // navigation.navigate('VerifyCode');
      navigation.navigate('Carousel');

    }, 1000);

    // Cleanup the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, [navigation]);


  {
    return (
      <SafeAreaView style={styles.safeArea}>
        <SafeAreaView style={styles.safeArea}>


          <View style={styles.centeredContainer}>
            <View style={styles.imageContainer}>
            
              <Image
              style={styles.Logo}
                source={require('../../src/assets/images/logo1.png')}
                resizeMode='contain'
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
    backgroundColor:color.backgroundColor,

  },
  
  imageContainer:{
    // width:'50%',
    justifyContent:'center',
    // backgroundColor:'red'

  },
  centeredContainer: {
    backgroundColor: '#050507',
    // backgroundColor: 'red',

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  Logo: {
    alignSelf: 'center',
    height:'20%'

  },

});
export default Splash;