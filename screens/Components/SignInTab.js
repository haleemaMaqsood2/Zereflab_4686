import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  View, Text, ScrollView, Keyboard, Dimensions, TouchableOpacity, TouchableWithoutFeedback,
  Image, StyleSheet, TextInput, LayoutAnimation, KeyboardAvoidingView, Animated,
  UIManager,
  Alert,

} from 'react-native';
import { useNavigation, useFocusEffect, useIsFocused } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { color } from '../../src/styles/color';
import PhoneInput from "react-native-phone-number-input";
import LineWithText from './LineWithText';
import PrivacyPolicy from './PrivacyPolicy';
import CustomTextInput from './CustomTextInput';
import { useNavigationComponentDidAppear } from 'react-native-navigation-hooks';
import { getOtpByEmail, getOtpByphoneNumber } from '../../src/store/services/services';
import { GET_OTP_BY_PHONE_NUMBER } from '../../src/store/services/endpoints';
import { store } from '../../src/store/Store';
import { setPhone1 } from '../../src/store/slices/userSlice';
import { useDispatch } from 'react-redux';


// if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
//   UIManager.setLayoutAnimationEnabledExperimental(true);
// }

const SignInTab = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('Email')
  const phoneRef = useRef(null);
  const [formattedValue, setFormattedValue] = useState("");
  const isFocused = useIsFocused();
  const dispatch = useDispatch(); // Initialize useDispatch hook

  const [phone, setPhone] = useState()
  const [name, setName] = useState('')
  const nameRef = useRef(null);
  const internalTextInputRef = useRef(null);

  const [value, setValue] = useState();
  const [count, setCount] = useState(0);

  const [email, setEmail] = useState('')
  const EmailRef = useRef(null);
  const [countryCode, setCountryCode] = useState('US'); // Default country code

  const [isProcessing, setIsProcessing] = useState(false);

  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
  const continueTextHeight = hp(6); // Adjust this value based on your design needs

  useEffect(() => {

    const showSubscription = Keyboard.addListener('keyboardWillShow', (event) => {
      const keyboardHeightInPercentage = (event.endCoordinates.height / screenHeight) * 100;
      setKeyboardVisible(true);

      setKeyboardHeight(keyboardHeightInPercentage.toFixed(1));
    });
    const hideSubscription = Keyboard.addListener('keyboardWillHide', () => {

      setKeyboardVisible(false);
      setKeyboardHeight(0);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [screenHeight]);


  useEffect(() => {
    if (selectedTab === 'Number' && internalTextInputRef.current) {
      internalTextInputRef.current.focus();
    }
  }, [selectedTab]);


  const handleChange = (value) => {
    setEmail(value);
    // EmailRef.current.focus();


  };

  function moveNext() {
    // Keyboard.dismiss(); // Dismiss keyboard before navigation to prevent animation

    // navigation.navigate('VerifyCode');
    getOTP(phone)
  }
  function onPressEmail() {
    // Keyboard.dismiss(); // Dismiss keyboard before navigation to prevent animation

    navigation.navigate('SignInEmail');
  }

  useFocusEffect(
    useCallback(() => {
      // Immediately focus the input when the screen is focused
      if (isFocused) {
        internalTextInputRef.current?.focus();

      }
    }, [isFocused])
  );


  useFocusEffect(
    React.useCallback(() => {
      // Delay focus to avoid race condition on navigation
      const timeoutId = setTimeout(() => {
        if (internalTextInputRef.current) {
          internalTextInputRef.current.focus();
        }
      }, 100); // Adjust delay as needed

      return () => clearTimeout(timeoutId);
    }, [])
  );

  // /////api call::::
  // const getOTP = async (phoneNumber) => {
  //   console.log(">>>>>>>>>>>>>>>>>>>>>",phoneNumber)

  //   try {
  //     const response = await getOtpByphoneNumber({ phone_number: phoneNumber }); // Make API call
  //     alert(JSON.stringify(response.message)); // Display response for testing
  //     // dispatch(setPhone(phoneNumber)); // Dispatch phone to Redux store
      
  //     dispatch(setPhone(phoneNumber));


  //     navigation.navigate('VerifyCode')
  //   } catch (error) {
  //     alert(JSON.stringify(response.message)); // Display response for testing

  //     console.error("API Error:", error.response ? error.response.data : error.message);
  //   }
  // };
  const getOTP = async (phoneNumber) => {
    console.log(">>>>>>>>>>>>>>>>>>>>>", phoneNumber);
  
    try {
      const response = await getOtpByphoneNumber({ phone_number: phoneNumber }); // Make API call
      alert(JSON.stringify(response.message)); // Display response for testing
      
      try {
        // Dispatch phone to Redux store
        dispatch(setPhone1(phoneNumber));
      } catch (dispatchError) {
        console.error("Dispatch Error1:", dispatchError);
      }
  
      navigation.navigate('VerifyCode');
    } catch (error) {
      alert(JSON.stringify(error.message)); // Display error for testing
      console.error("API Error:", error.response ? error.response.data : error.message);
    }
  };
  
  const handlePhoneChange = (phoneValue) => {
    setPhone(phoneValue); 
    // dispatch(setPhone(phoneValue)); // Dispatch phone to Redux store
  };

  return (

    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"} // Adjust based on your needs
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.select({ ios: 0, android: 0 })} // Ensure there's no offset that could cause animation

      >




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
              // onChangeFormattedText={handlePhoneChange} // Call handlePhoneChange when phone changes

              onChangeFormattedText={(text) => {
                setFormattedValue(text);
                setPhone(text)
                // setPhone(`+${countryCode}${text}`); // Concatenate country code and phone number

              }}
              onChangeCountry={(country) => {
                // Alert.alert(JSON.stringify(country.callingCode))
                // setCountryCode(country.cca2); // Update the state with selected country code
                setCountryCode(country.callingCode); // Update state with selected country calling code

              }}
          
              withDarkTheme
              // withShadow
              // autoFocus
              flagButtonStyle={{ alignSelf: 'center', width: wp(13) }}
              containerStyle={styles.phoneInput}
              textContainerStyle={styles.phoneTextContainer}
              textInputStyle={styles.phoneTextInput}
              codeTextStyle={styles.phoneCodeText}
              // dropdownIcon={{color:'red'}}
              // renderDropdownImage={require('../../src/assets/images/apple.png')}

              // dropdownIcon={require('../../src/assets/images/apple.png')}
              textInputProps={{
                placeholder: "Phone number",
                placeholderTextColor: '#ffffff80',
                selectionColor: color.onBoardingButton,
                ref: internalTextInputRef, // Assigning the internal ref

              }}
            // This sets the cursor color to blue


            />



          </View>

          <View style={{ marginTop: '4%', paddingLeft: 0 }}>
            <PrivacyPolicy />
          </View>
          <TouchableOpacity style={styles.emailTextContainer} onPress={onPressEmail}>
            <Text style={styles.emailText}>Use email instead</Text>
          </TouchableOpacity>
          <View>
            {screenHeight > 700 ?
              <View style={{ marginTop: (screenHeight < 890) ? hp('14.5%') : hp('19%') }}>
                {/* <View style={{ marginTop:100}}> */}

                <View style={styles.ButtonContainer}>

                  <TouchableOpacity onPress={moveNext}
                    style={[styles.touchableArea, value ? styles.buttonActive : styles.buttonInactive]}
                  >
                    <Text style={styles.conTinueText}>Continue</Text>
                  </TouchableOpacity>
                </View>

              </View>

              :
              <View style={{ marginTop: hp(12.5) }}>
                {/* <View style={{ marginTop:100}}> */}

                <View style={styles.ButtonContainer}>

                  <TouchableOpacity onPress={moveNext}
                    style={[styles.touchableArea, value ? styles.buttonActive : styles.buttonInactive]}
                  >
                    <Text style={styles.conTinueText}>Continue</Text>
                  </TouchableOpacity>
                </View>

              </View>

            }

          </View>
          {/* <View style={styles.ButtonContainer}>

            <TouchableOpacity onPress={moveNext}
              style={[styles.touchableArea, value ? styles.buttonActive : styles.buttonInactive]}
            >
              <Text style={styles.conTinueText}>Continue</Text>
            </TouchableOpacity>
          </View> */}

        </View>
      </KeyboardAvoidingView>


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
    width: wp('90%'),
    height: hp('5%'),
    borderBottomColor: '#ccc',
    borderRadius: 10,
    // width:'95%',
    backgroundColor: color.inputFieldColor,
    // backgroundColor: 'red',

    alignSelf: 'center'

  },
  signInTabContainer: {
    width: wp('90%'),
    height: hp('4.1%'),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: hp('0.5%'),
    // backgroundColor:'pink'
    // justifyContent:'space-around',
  },
  tab: {
    // paddingVertical: 15,
    // paddingHorizontal: 20,
    borderRadius: 5,
    width: '50%',
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'pink'

  },
  emailTextContainer: {
    alignSelf: 'flex-start',
    paddingLeft: '5%',
    width: '100%',
    height: hp(5),
    // backgroundColor:'red'
    // paddingTop:'2.5%'
  },
  emailText: {
    color: color.privacyPolicyColor,
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Inter',
    textAlign: 'left'
  },
  separator: {
    width: 1,
    height: '100%',
    backgroundColor: 'white',
    marginHorizontal: 10,
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
    // backgroundColor:'orange',
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
    marginRight: 5, // Adjust as needed to position the arrow
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

    width: wp('92%'),
    marginTop: hp('-1%'),
    textAlign: 'center',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    // backgroundColor: 'white',




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
    borderWidth: 1,
    borderRadius: 10,
    borderColor: color.WhiteWithThirtypercentOpacity,
    // borderColor:'red',

    // alignItems:'center'

    // paddingHorizontal: '1.5%'
  },
  phoneInput: {
    width: wp('90%'),
    alignItems: 'center',
    height: hp('6.0%'),
    backgroundColor: color.inputFieldColor,
    borderRadius: 10,
    borderColor: 'white',
    // borderWidth: 0.3,
    paddingHorizontal: '1.5%',
    alignItems: 'center',
    // paddingVertical: '0.5%',
    // backgroundColor: 'red'


  },
  phoneTextContainer: {
    backgroundColor: color.inputFieldColor, // Adjust as necessary
    // backgroundColor: 'red',// Adjust as necessary

    justifyContent: 'center',
    alignItems: 'center',
    height: hp(6.0),
    color: 'white',
    paddingRight: '1%',
    alignItems: 'center'

    // backgroundColor: 'blue'




  },
  phoneTextInput: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Inter',
    backgroundColor: color.inputFieldColor,
    paddingVertical: 0, // Adjust padding to fit the reduced height
    marginVertical: 0,
    // backgroundColor:'red',
    height: hp(6.0),
    borderLeftWidth: 1,
    // borderLe
    borderLeftColor: color.WhiteWithThirtypercentOpacity,
    paddingLeft: '5%',
    alignItems: 'center'




  },
  phoneCodeText: {
    color: 'white',
    alignItems: 'center',
    fontWeight: '500',

    fontSize: 16, // Adjust size if needed
    // backgroundColor:'red',
    // justifyContent:'center',
    // alignContent:'center'
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
    alignSelf: 'center',
    // backgroundColor:'blue',


  },
  buttonText: {
    fontSize: 16,
    fontWeight: '400',
    color: color.whiteFontColor,
    fontFamily: 'Inter',
    paddingLeft: wp('1%'),
    // backgroundColor:'red',
    alignSelf: 'center',
    width: wp('50%')
  }

});

export default SignInTab;
