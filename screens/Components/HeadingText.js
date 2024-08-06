import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { color } from '../../src/styles/color';
import PhoneInput from "react-native-phone-number-input";
import LineWithText from './LineWithText';


const HeadingText = ({title}) => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('Email')
  const phoneInput = useRef < PhoneInput > (null);
  const phoneRef = useRef(null);
  const [phone, setPhone] = useState()
  const [formattedValue, setFormattedValue] = useState("");

  const [value, setValue] = useState();
  const [email, setEmail] = useState('')
  const EmailRef = useRef(null);
  const [countryCode, setCountryCode] = useState('US'); // Default country code

  const handleChange = (value) => {
    setEmail(value);
    // EmailRef.current.focus();


  };
  const moveNext = () => {
    navigation.navigate('VerifyCode');
  };
  // useEffect(() => {
  //   const focusTimeout = setTimeout(() => {
  //     EmailRef.current.focus();
  //   }, 500);

  //   return () => clearTimeout(focusTimeout);
  // }, []);


  return (
    <View style={styles.container}>
                      <View style={styles.titleContainer}>

                        <Text style={styles.titleText}>{title}</Text>

                        </View>

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: wp('100%'),
    alignSelf: 'center'
  },
  titleContainer: {
    width: wp('95%'),
    alignSelf: 'center',
    // marginTop: hp('1%'),
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:'red'
},
titleText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
    width:wp('75%'),
    textAlign:'center',
   fontFamily:'inter',
//    backgroundColor:'red'
//    lineHeight:128.646,
    // font:'urbanist'
},
  

});

export default HeadingText;
