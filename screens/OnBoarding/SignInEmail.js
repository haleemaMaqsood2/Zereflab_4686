import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
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
    Keyboard,
    Dimensions,
    InteractionManager,
    unstable_batchedUpdates
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { color } from '../../src/styles/color';
import Header from '../Components/Header';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import HeadingText from '../Components/HeadingText';
import CustomTextInput from '../Components/CustomTextInput';
import CustomButton from '../Components/CustomButton';
import PrivacyPolicy from '../Components/PrivacyPolicy';
import ResponsiveButton from '../Components/ResponsiveButton';
const SignInEmail = ({ navigation }) => {
    const [selectedTab, setSelectedTab] = useState('Email')
    const phoneRef = useRef(null);
    const [formattedValue, setFormattedValue] = useState("");

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
        // phoneRef.current.focus();  // Automatically focus the first input field when the component mounts

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
        navigation.navigate('VerifyCode');
    }
    function onPressPhone() {
        navigation.navigate('SignIn');
    }


    useFocusEffect(
        React.useCallback(() => {
            // Refocus the first input field when the screen is focused
            EmailRef.current.focus();
        }, [])
    );

    {
        return (
            <SafeAreaView style={styles.safeArea}>
                <KeyboardAvoidingView >
                    <Header />

                    <View style={styles.titleContainer}>
                        <HeadingText title={"What's your email?"} />
                        <CustomTextInput
                            value={email}
                            onChangeText={handleChange}
                            placeholder='Email'
                            placeholderTextColor={color.placeholderColor}
                            ref={EmailRef}
                        />
                        <View style={{ marginTop: '4%', paddingLeft: 0 }}>
                            <PrivacyPolicy />
                        </View>
                        <TouchableOpacity style={styles.emailTextContainer} onPress={onPressPhone}>
                            <Text style={styles.emailText}>Use phone number instead</Text>
                        </TouchableOpacity>
                        {/* <View style={{ marginTop: (screenHeight < 890) ? hp('16%') : hp('20%'), flex: 1 }}>
                            <View style={styles.ButtonContainer}>

                                <TouchableOpacity onPress={moveNext}
                                    style={[styles.touchableArea, value ? styles.buttonActive : styles.buttonInactive]}
                                >
                                    <Text style={styles.conTinueText}>Continue</Text>
                                </TouchableOpacity>
                            </View>

                        </View> */}
                        {/* <View style={styles.ResposiveContainer}> */}

                            <ResponsiveButton
                                title="Continue"
                                buttonState={email}
                                keyboardVisible={keyboardVisible}
                                keyboardHeight={keyboardHeight}
                                nextScreenName="VerifyCode"
                                onPress={moveNext}
                                marginTop={
                                    keyboardVisible
                                        ? (screenHeight < 890 ? hp('13.5%') : hp('18%')) // If the keyboard is visible
                                        : (screenHeight < 890 ? hp('45%') : hp('48%'))     // If the keyboard is not visible
                                }
                                // marginTop={(screenHeight < 890) ? hp('13.5%') : hp('17.5%')} // Example margin top value
                            />


                        {/* </View> */}




                    </View>

                </KeyboardAvoidingView>

            </SafeAreaView>

        );
    }



}
const styles = StyleSheet.create({

    safeArea: {
        flex: 1,
        backgroundColor: color.backgroundColor,

    },
    container: {
        // flex: 1,
    },
    background: {
        flex: 1,
    },
    titleContainer: {
        width: wp('100%'),
        alignSelf: 'center',
        // marginTop: hp('1%'),
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'red'
    },
    titleText: {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: '700',
        width: wp('80%'),
        textAlign: 'center',
        fontFamily: 'Inter',
        lineHeight: 36,
        // font:'urbanist'
    },

    textInput: {
        width: wp('70%'),
        height: hp("60%"),

    },
    buttonActive: {
        backgroundColor: color.onBoardingButton,
        borderRadius: 10,

    },
    buttonActive: {
        backgroundColor: color.onBoardingButton,
        borderRadius: 10,

    },
    ResposiveContainer: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        alignSelf:'center'
    },
    buttonInactive: {
        // backgroundColor: '#ffffff33',
        borderRadius: 10,

    },
    conTinueText: {
        alignItems: 'center',
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'inter',

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
    },

    emailTextContainer: {
        alignSelf: 'flex-start',
        paddingLeft: '8%',
        paddingTop:wp(0),
        width:'100%',
        height:hp(5),
        // backgroundColor:'red'
    },
    emailText: {
        color: color.privacyPolicyColor,
        fontSize: 12,
        fontWeight: '500',
        fontFamily: 'Inter',
        textAlign: 'left'
    },
    buttonInactive: {
        // backgroundColor: '#ffffff33',
        // backgroundColor:color.WhiteWithThirtypercentOpacity,

        borderRadius: 10,

    },
    inputContainer: {
        width: '100%',
        height: hp(6),
        marginTop: hp('5%'),
        // marginTop:40,
        flexDirection: 'row',
        justifyContent: 'space-around',
        // backgroundColor:'red',

    },
    input: {
        backgroundColor: color.inputFieldColor,
        // width: '96%',
        width: wp('92%'),

        borderRadius: 10,
        borderColor: '#414142',
        borderWidth: 1,
        color: color.whiteColor,
        fontSize: 16,
        fontWeight: '500',
        paddingLeft: wp(5),
        fontFamily: 'inter'


    },
    ButtonContainer: {
        backgroundColor: '#ffffff33',
        // height:hp('7%'),
        height: hp(6),
        // width:363,

        width: wp('90%'),
        marginTop: hp('-1%'),
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
        fontFamily: 'inter'

    },
    touchableArea: {
        width: '100%', // Make it the full width of the container
        height: '100%', // Make it the full height of the container
        alignItems: 'center', // Center the text
        justifyContent: 'center', // Center the text
    },

});
export default SignInEmail;