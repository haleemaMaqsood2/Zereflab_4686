import React, { useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import { color } from '../../../src/styles/color';
// import CircularProgress from 'react-native-circular-progress-indicator';
import { CircularProgress } from 'react-native-svg-circular-progress';
import { RFPercentage } from 'react-native-responsive-fontsize';
// import CircularProgress from 'react-native-circular-progress-indicator';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const LoadingScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    // Set a timer for 5 seconds to navigate back
    const timer = setTimeout(() => {
      navigation.goBack();
    }, 1500);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeArea}>


      {/* 
                  <Progress.Bar progress={0.3} width={200} />
                  <Progress.Pie progress={0.4} size={50} />
                  <Progress.Circle size={30} indeterminate={true} /> */}

      {/* <CircularProgress value={58} /> */}

      {/* <Progress.CircleSnail color={['red', 'green', 'blue']} /> */}


      <View style={styles.centeredContainer}>
        <View style={styles.textContainer}>
          {/* <Progress.Circle size={35} indeterminate={true} /> */}
          {/* Circular Progress Component */}
          <AnimatedCircularProgress
            size={50}
            width={3}
            fill={50}
            tintColor="#0082FB"//#0082FB
            // backgroundColor="color.whiteWithfiftypercentOpacity"
            backgroundColor="#CDFEE426"
            >
            {
              (fill) => (
                <View style={styles.innerCircle}>
                <Text style={styles.text}>
                  50%
                </Text>
              </View>
              )
            }
          </AnimatedCircularProgress>
          {/* <Image
                        source={require('../src/assets//images/loadingIcon.png')}
                    /> */}
          <Text style={styles.addingText}>Adding your Contacts</Text>
          <Text style={styles.waitingText}>This may will take a minute</Text>
        </View>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: color.backgroundColor,

  },
  background: {
    flex: 1,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    // backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  addingText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Inter',
    paddingTop: '5%',
  },
  waitingText: {
    color: 'white',
    paddingTop: '1%',
    fontSize: 14,
    fontWeight: '300',
    fontFamily: 'Inter',


  },
  textContainer1: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.inputFieldColor
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
    color: 'white',
    fontFamily: 'inter',
    alignSelf:'center'
  },
  innerCircle: {
    width: 44,  // Slightly smaller than the size of the progress circle
    height: 44,  // Slightly smaller than the size of the progress circle
    borderRadius: 22,  // Half of the inner circle size to make it a circle
    backgroundColor: "#CDFEE426",  // Your desired background color inside the circle
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default LoadingScreen;
