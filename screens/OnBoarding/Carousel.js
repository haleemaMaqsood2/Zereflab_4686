import React, { useState, useRef, useEffect } from 'react';
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
    KeyboardAvoidingView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { color } from '../../src/styles/color';
import Header from '../Components/Header';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Swiper from 'react-native-swiper';


const Carousel = ({ navigation }) => {
    const swiper = useRef(null);

    function moveNext() {
        navigation.navigate('SignIn')
    }

    const RenderDot = () => {
        return (
          <View
            style={{
              backgroundColor: color.dotsGrey,
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        );
      };
      const RenderActiveDot = () => {
    return (
      <View
        style={{
          backgroundColor: color.activeDot,
          width: 25,
          height: 8,
          borderRadius: 4,
          marginLeft: 3,
          marginRight: 3,
          marginTop: 3,
          marginBottom: 3,
        }}
      />
    );
  };

    {
        return (
            <SafeAreaView style={styles.safeArea}>
                        <Swiper
                                ref={swiper}
                            // style={styles.wrapper}
                            dotStyle={styles.dot}
                            activeDotStyle={styles.activeDot}
                            paginationStyle={styles.pagination}
                            loop={false}
                        >
                            <View style={styles.slide}>
                                <Image
                                    style={styles.image}
                                    source={require('../../src/assets/images/crousel1.png')}
                                    resizeMode="contain"
                                />
                                   <View style={styles.shadow} />

                            </View>
                            <View style={styles.slide}>
                                <Image
                                    style={styles.image}
                                    source={require('../../src/assets/images/carousel2.png')}
                                    resizeMode="cover"
                                />
                                   <View style={styles.shadow} />

                            </View>
                            <View style={styles.slide}>
                                <Image
                                    style={styles.image}
                                    source={require('../../src/assets/images/crousel1.png')}
                                    resizeMode="cover"
                                />
                                                    <View style={styles.shadow} />

                            </View>
                        </Swiper>
                        <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Find your crew. Discover your scene</Text>
                </View>
                <TouchableOpacity style={styles.buttonContainer} onPress={moveNext}>
                        <Text style={styles.getStarted}>Get Started</Text>

                    </TouchableOpacity>
                   
                {/* </KeyboardAvoidingView> */}

            </SafeAreaView>

        );
    }



}
const styles = StyleSheet.create({

    safeArea: {
        flex: 1,
        backgroundColor: color.backgroundColor,
        alignItems:'center'
        

    },
    container: {
        width: wp('80%'),
        alignSelf: 'center',
    },
    titleContainer: {
        width: wp('95%'),
        alignSelf: 'center',
        marginTop: hp('1%'),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: hp('5%'),
        // backgroundColor:'red'
    },
    titleText: {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: '600',
        width: wp('70%'),
        textAlign: 'center',
        fontFamily: 'Inter'
        // font:'urbanist'
    },
    buttonContainer: {
        backgroundColor: color.onBoardingButton,
        height: hp('6%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width:wp('85%'),
        marginBottom:hp('3%')
        // bottom:hp('10%'),
        // position: 'absolute',
        // bottom: 50,
        // left: '30%',
        // justifyContent:'center',
        // transform: [{ translateX: -50 }], 
    },
    getStarted: {
        fontSize: 16,
        fontFamily: 'Inter',
        fontweight: '700',
        color: color.whiteFontColor,
    },
    wrapper: {
        // backgroundColor: 'pink'
        height:hp('65%'),
        width:wp('90%'),
        alignContent:'center'

        // width:'80%'

    },

    slide: {
        // flex: 1,
        width: '100%',
        // height: hp(100),
        backgroundColor: 'transparent',
        alignItems:'center'
        
        

        // alignSelf:'center',
    },
    shadow: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '15%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent black
    },

   

    image: {
        marginTop:'15%'
        // width: wp(100),
        // height: hp(100)
    },
    dot: {
        backgroundColor: 'rgba(255,255,255,.3)',
        width: 8,
        height: 8,
        // marginBottom:'50%'
    },
    activeDot: {
        backgroundColor: '#fff',
        width: 8,
        height: 8,
        // marginBottom:'50%'

    },
    // pagination: {
    //     bottom: 20, // Adjust the position of pagination dots
    // },

});
export default Carousel;