import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, Keyboard, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { color } from '../../src/styles/color';
import PhoneInput from "react-native-phone-number-input";
import LineWithText from './LineWithText';
import PrivacyPolicy from './PrivacyPolicy';


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
  const [countryCode, setCountryCode] = useState('US'); // Default country code
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  const handleChange = (value) => {
    setEmail(value);
    // EmailRef.current.focus();


  };
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      (event) => {
        setKeyboardHeight(event.endCoordinates.height);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardHeight(0);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  const moveNext = () => {
    navigation.navigate('VerifyCode');
  };
 


  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={[
          // styles.scrollViewContent,
          { paddingBottom: isKeyboardVisible ? keyboardHeight : 0 }

        ]}
      >
        <View style={styles.tabContainer}>
          <View style={styles.signInTabContainer}>
            <TouchableOpacity
              onPress={() => setSelectedTab('Email')} style={[styles.tab, selectedTab === 'Email' && styles.activeTab]}>
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
                placeholderTextColor='#ffffff80'

                // placeholderTextColor='#ffffff80'

                keyboardAppearance="dark"
                value={email}
                ref={EmailRef}
              />


            </View>
            <View style={styles.ButtonContainer}>

              <TouchableOpacity onPress={moveNext}
                style={[styles.touchableArea, email ? styles.buttonActive : styles.buttonInactive]}
              >
                <Text style={styles.conTinueText}>Continue</Text>
              </TouchableOpacity>
            </View>
            <LineWithText text="or" />

            <View style={{ ...styles.inputContainer, marginBottom: hp(1) }}>

              <TouchableOpacity style={styles.accountButton}>
                <Image style={styles.image} source={require('../../src/assets/images/apple.png')} resizeMode="contain" />

                <Text style={styles.buttonText}>Continue with Apple</Text>
              </TouchableOpacity>


            </View>
            <View style={styles.inputContainer}>

              <TouchableOpacity style={styles.accountButton}>
                <Image style={styles.image} source={require('../../src/assets/images/googleIcon.png')} resizeMode="contain" />

                <Text style={styles.buttonText}>Continue with Google</Text>
              </TouchableOpacity>


            </View>
            <View style={{ justifyContent: 'flex-end', height: keyboardHeight ? hp('8%') : hp(keyboardHeight + 35) }}>
              <PrivacyPolicy />
            </View>
            {/* <View style={styles.privacyPolicyContainer}>
            <Text style={styles.privacyPolicyText1}>By continuing, you agree to our <Text style={styles.privacyText}>Privacy Policy</Text> and <Text style={styles.privacyText}>Terms of Service.</Text> </Text>
          </View> */}


          </View>
        )}

        {selectedTab === 'Number' && (
          <View style={styles.contentContainer}>
            {/* Your number input field or view goes here */}
            <View style={styles.phonContainer}>
              <PhoneInput
                ref={phoneRef}
                defaultValue={value}
                defaultCode={countryCode} // Use the state for country code
                // defaultCode="US"
                layout="first"
                onChangeText={(text) => {
                  setValue(text);
                }}
                onChangeFormattedText={(text) => {
                  setFormattedValue(text);
                }}
                onChangeCountry={(country) => {
                  setCountryCode(country.cca2); // Update the state with selected country code
                }}
                withDarkTheme
                withShadow
                // autoFocus
                containerStyle={styles.phoneInput}
                textContainerStyle={styles.phoneTextContainer}
                textInputStyle={styles.phoneTextInput}
                codeTextStyle={styles.phoneCodeText}
                dropdownIcon={styles.dropdownIcon}
                textInputProps={{
                  placeholder: "Phone number",
                  placeholderTextColor: '#ffffff80',
                  selectionColor: color.onBoardingButton,
                }}
              // This sets the cursor color to blue


              />


            </View>
            <View style={styles.ButtonContainer}>

              <TouchableOpacity onPress={moveNext}
                style={[styles.touchableArea, value ? styles.buttonActive : styles.buttonInactive]}
              >
                <Text style={styles.conTinueText}>Continue</Text>
              </TouchableOpacity>
            </View>
            <View style={{ justifyContent: 'flex-end', height: keyboardHeight ? hp('25%') : hp(keyboardHeight + 53) }}>
              <PrivacyPolicy />
            </View>
           
          </View>
        )}
      </ScrollView>


    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // flex:1,
    height: hp('90%'),
    width: wp('100%'),
    // backgroundColor: 'red',

    alignSelf: 'center'
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal: '5%',
    // paddingVertical: '4%',
    width: wp('87%'),
    height: hp('5%'),
    borderBottomColor: '#ccc',
    borderRadius: 10,
    // width:'95%',
    backgroundColor: color.inputFieldColor,
    // backgroundColor: 'red',

    alignSelf: 'center'
  },
  signInTabContainer: {
    width: wp('85%'),
    height: hp('4.1%'),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: hp('0.5%',)
    // backgroundColor:'pink'
    // justifyContent:'space-around',
  },
  tab: {
    // paddingVertical: 15,
    // paddingHorizontal: 20,
    borderRadius: 5,
    width: '50%'
  },
  activeTab: {
    backgroundColor: 'white',
    width: wp('45%'),
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10

    // heigh:hp('4%'),

  },
  scrollViewContent: {
    alignItems: 'center',
    // paddingBottom: hp('5%'),
  },
  buttonActive: {
    backgroundColor: color.onBoardingButton,
    borderRadius: 10,

  },
  buttonInactive: {
    // backgroundColor: '#ffffff33',
    borderRadius: 10,

  },
  image: {
    height: '40%',
    width: 40,
  },
  emailTab: {
    color: color.placeholderColor,
    fontWeight: '400',
    fontSize: 14,
    fontFamily: 'Inter',
  },

  tabText: {
    color: color.whiteWithfiftypercentOpacity,
    fontWeight: '400',
    fontSize: 14,
    fontFamily: 'Inter',
    textAlign: 'center',
    alignItems: 'center'

  },
  dropdownIcon: {
    color: 'white',
    marginRight: 10, // Adjust as needed to position the arrow
  },
  activeTabText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    // paddingTop: '3%',
    fontWeight: '700',
    fontSize: 14,
    fontFamily: 'Inter',


  },
  contentContainer: {
    marginTop: hp('4%'),
    width: wp('94%'),
    alignItems: 'center',
    // backgroundColor: 'blue' ,   // alignItems: 'center',
  },
  touchableArea: {
    width: '100%', // Make it the full width of the container
    height: '100%', // Make it the full height of the container
    alignItems: 'center', // Center the text
    justifyContent: 'center', // Center the text
  },
  ButtonContainer: {
    backgroundColor: '#ffffff33',
    // height:hp('7%'),
    height: hp(6),
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
  phonContainer: {
    alignSelf: 'center',
    borderWidth: 0.3,
    borderRadius: 10,

    // paddingHorizontal: '1.5%'
  },
  phoneInput: {
    width: wp('90%'),
    alignItems: 'center',
    height: hp('6.2%'),
    backgroundColor: color.inputFieldColor,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 0.3,
    paddingHorizontal: '1.5%',
    paddingVertical: '0.5%',


  },
  phoneTextContainer: {
    backgroundColor: color.inputFieldColor, // Adjust as necessary
    // backgroundColor: 'red',// Adjust as necessary

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
    alignItems: 'center', 
    // justifyContent:'center',
    // alignContent:'center'
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
    color: color.whitewithThirty,
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
    height: hp('6%'),
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center'
    // backgroundColor:'red',

  },
  input: {
    backgroundColor: color.inputFieldColor,
    // width: '96%',
    width: wp('90%'),
    // height:hp(6),

    borderRadius: 10,
    borderColor: '#414142',
    borderWidth: 1,
    color: color.whiteColor,
    fontSize: 16,
    fontWeight: '500',
    paddingLeft: wp(5),
    fontFamily: 'inter'


  },
  accountButton: {
    // alignSelf:'center',
    flexDirection: 'row',
    width: wp('90%'),
    height: hp('6%'),
    backgroundColor: color.inputFieldColor,
    marginTop: '0%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ffffff4d',
    alignItems: 'center',
    justifyContent: 'center',


  },
  buttonText: {
    fontSize: 16,
    fontWeight: '400',
    color: color.whiteFontColor,
    fontFamily: 'Inter',
    paddingLeft: wp('1%')
  }

});

export default SignInTab;
