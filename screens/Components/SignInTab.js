import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { color } from '../../src/styles/color';
import PhoneInput from "react-native-phone-number-input";
import LineWithText from './LineWithText';


const SignInTab = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('Email')
  const phoneInput = useRef < PhoneInput > (null);
  const phoneRef = useRef(null);
  const [phone, setPhone] = useState()
  const [formattedValue, setFormattedValue] = useState("");

  const [value, setValue] = useState();
  const [email, setEmail] = useState('')
  const EmailRef = useRef(null);
  const handleChange = (value) => {
    setEmail(value);
    EmailRef.current.focus();


  };
  const moveNext = () => {
    navigation.navigate('VerifyCode');
  };
  useEffect(() => {
    const focusTimeout = setTimeout(() => {
      EmailRef.current.focus();
    }, 500);

    return () => clearTimeout(focusTimeout);
  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <View style={styles.signInTabContainer}>
          <TouchableOpacity onPress={() => setSelectedTab('Email')} style={[styles.tab, selectedTab === 'Email' && styles.activeTab]}>
            <Text style={[styles.tabText, selectedTab === 'Email' && styles.activeTabText]}>Email</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab('Number')} style={[styles.tab, selectedTab === 'Number' && styles.activeTab]}>
            <Text style={[styles.tabText, selectedTab === 'Number' && styles.activeTabText]}>Number</Text>
          </TouchableOpacity>
        </View>




      </View>
      {selectedTab === 'Email' && (
        <View style={styles.contentContainer}>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              // onChangeText={value => setV1(value)}
              onChangeText={value => handleChange(value)}
              placeholder='Email'
              placeholderTextColor={color.buttonColor}

              keyboardAppearance="dark"
              value={email}
              ref={EmailRef}
            />


          </View>
          <View style={styles.ButtonContainer}>

            <TouchableOpacity onPress={moveNext}>
              <Text style={styles.conTinueText}>Continue</Text>
            </TouchableOpacity>
          </View>
          <LineWithText text="or" />

          <View style={{ ...styles.inputContainer, marginBottom: hp('1%') }}>

            <TouchableOpacity style={styles.accountButton}>
              <Image style={styles.image} source={require('../../src/assets/images/appleIcon.png')} resizeMode="contain" />

              <Text style={styles.buttonText}>Continue with Apple</Text>
            </TouchableOpacity>


          </View>
          <View style={styles.inputContainer}>

            <TouchableOpacity style={styles.accountButton}>
              <Image style={styles.image} source={require('../../src/assets/images/googleIcon.png')} resizeMode="contain" />

              <Text style={styles.buttonText}>Continue with Google</Text>
            </TouchableOpacity>


          </View>
          <View style={styles.privacyPolicyContainer}>
            <Text style={styles.privacyPolicyText1}>By continuing, you agree to our <Text style={styles.privacyText}>Privacy Policy</Text> and <Text style={styles.privacyText}>Terms of Service.</Text> </Text>
          </View>


        </View>
      )}

      {selectedTab === 'Number' && (
        <View style={styles.contentContainer}>
          {/* Your number input field or view goes here */}
          <View style={styles.phonContainer}>
            <PhoneInput
              ref={phoneRef}
              defaultValue={value}
              defaultCode="PK"
              layout="first"
              onChangeText={(text) => {
                setValue(text);
              }}
              onChangeFormattedText={(text) => {
                setFormattedValue(text);
              }}
              withDarkTheme
              withShadow
              autoFocus
              containerStyle={styles.phoneInput}
              textContainerStyle={styles.phoneTextContainer}
              textInputStyle={styles.phoneTextInput}
              codeTextStyle={styles.phoneCodeText}
              textInputProps={{
                placeholder: "Phone number",
                placeholderTextColor: color.placeholderColor
              }}

            />

            {/* <PhoneInput
            ref={phoneRef}
            defaultValue={value}
            defaultCode="DM"
            layout="first"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withDarkTheme
            withShadow
            autoFocus
            containerStyle={styles.phoneInput}

          /> */}
          </View>
          <View style={styles.ButtonContainer}>

            <TouchableOpacity onPress={moveNext}> 
              <Text style={styles.conTinueText}>Continue</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.privacyPolicyContainer}>
            <Text style={styles.privacyPolicyText}>By continuing, you agree to our <Text style={styles.privacyText}>Privacy Policy</Text> and <Text style={styles.privacyText}>Terms of Service.</Text> </Text>
          </View>
        </View>
      )}

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // flex:1,
    height: hp('90%'),
    width: wp('94%'),
    // backgroundColor: 'red',

    alignSelf: 'center'
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal: '5%',
    // paddingVertical: '4%',
    width: wp('87%'),
    height: hp('4%'),
    borderBottomColor: '#ccc',
    // width:'95%',
    backgroundColor: color.inputFieldColor,
    // backgroundColor: 'red',

    alignSelf: 'center'
  },
  signInTabContainer: {
    width: wp('85%'),
    height: hp('4%'),
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:'pink'
    // justifyContent:'space-around',
  },
  tab: {
    // paddingVertical: 15,
    // paddingHorizontal: 20,
    borderRadius: 5,
    width: '50%'
  },
  emailTab: {
    color: color.placeholderColor,
    fontWeight: '400',
    fontSize: 14,
    fontFamily: 'Inter',
  },
  activeTab: {
    backgroundColor: 'white',
    width: '55%',
    height: '100%',
    alignItems: 'center',
    // borderRadius:40

    // heigh:hp('4%'),

  },
  tabText: {
    color: color.placeholderColor,
    fontWeight: '400',
    fontSize: 14,
    fontFamily: 'Inter',
    textAlign: 'center',
    alignItems: 'center'

  },
  activeTabText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    paddingTop: '3%',
    fontWeight: '700',

  },
  contentContainer: {
    marginTop: hp('4%'),
    width: wp('94%'),
    alignItems: 'center',
    // backgroundColor: 'blue' ,   // alignItems: 'center',
  },
  ButtonContainer: {
    backgroundColor: color.buttonColor,
    // height:hp('7%'),
    height: 50,
    // width:363,

    width: wp('90%'),
    marginTop: hp('1%'),
    textAlign: 'center',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'



  },
  conTinueText: {
    alignItems: 'center',
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'inter',

  },
  phonContainer: { alignSelf: 'center', borderWidth: 0.3, borderRadius: 10, paddingHorizontal: '1.5%' },
  phoneInput: {
    width: wp('90%'),
    alignItems: 'center',
    height: hp('7%'),
    backgroundColor: color.inputFieldColor,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 0.3,
    paddingHorizontal: '1.5%',
    paddingVertical: '0.5%'


  },
  phoneTextContainer: {
    backgroundColor: color.inputFieldColor, // Adjust as necessary
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    color: 'white',
    paddingRight: '1%'


  },
  phoneTextInput: {
    color: 'white',
    fontSize: 16,
    backgroundColor: color.inputFieldColor,
    paddingVertical: 0, // Adjust padding to fit the reduced height
    marginVertical: 0,
  },
  phoneCodeText: {
    color: 'white',
  },
  privacyPolicyText: {
    color: color.placeholderColor,
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'Inter',
    fontWeight: '400',
    marginTop: hp('23%'),

  },
  privacyPolicyText1: {
    color: color.placeholderColor,
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'Inter',
    fontWeight: '400',
    marginTop: hp('3%'),

  },
  privacyText: {
    color: color.privacyPolicyColor,
  },
  privacyPolicyContainer: {
    width: wp('80%'),
    alignSelf: 'center'
  },
  inputContainer: {
    width: wp('100%'),
    height: hp('7%'),
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center'
    // backgroundColor:'red',

  },
  input: {
    backgroundColor: color.inputFieldColor,
    // width: '96%',
    width: wp('90%'),

    borderRadius: 10,
    borderColor: '#414142',
    borderWidth: 1,
    color: color.placeholderColor,
    fontSize: 16,
    fontWeight: '500',
    paddingLeft: wp(5),
    fontFamily: 'inter'


  },
  accountButton: {
    // alignSelf:'center',
    flexDirection: 'row',
    width: wp('90%'),
    height: hp('7%'),
    backgroundColor: color.inputFieldColor,
    marginTop: '0%',
    borderRadius: 10,
    borderWidth: 0.2,
    borderColor: color.whiteColor,
    alignItems: 'center',
    justifyContent: 'center',


  },
  buttonText: {
    fontSize: 16,
    fontWeight: '400',
    color: color.whiteFontColor,
    fontFamily: 'Inter',
    paddingLeft: wp('3%')
  }

});

export default SignInTab;
