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
const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Set a timer for 5 seconds and navigate to VerifyCode screen
    const timer = setTimeout(() => {
      // navigation.navigate('VerifyCode');
      navigation.navigate('Carousel');

    }, 3000);

    // Cleanup the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, [navigation]);


  {
    return (
      <SafeAreaView style={styles.safeArea}>
        <SafeAreaView style={styles.safeArea}>


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
export default Splash;