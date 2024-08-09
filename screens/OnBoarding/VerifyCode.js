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
    Keyboard,
    Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { color } from '../../src/styles/color';
import Header from '../Components/Header';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import HeadingText from '../Components/HeadingText';
import CustomButton from '../Components/CustomButton';


const VerifyCode = () => {
    //   const navigation = useNavigation();

    const [keyboardVisible, setKeyboardVisible] = useState(false);
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

    const navigation = useNavigation();
    const [v1, setV1] = useState('');
    const [v2, setV2] = useState('');
    const [v3, setV3] = useState('');
    const [v4, setV4] = useState('');
    const [timer, setTimer] = useState(60);
    const [marginTop, setMarginTop] = useState(0);


    const v1Ref = useRef(null);
    const v2Ref = useRef(null);
    const v3Ref = useRef(null);
    const v4Ref = useRef(null);

    const handleChange = (value, setValue, nextRef) => {
        setValue(value);
        if (value.length === 1 && nextRef) {
            nextRef.current.focus();
        }
        if (setValue === setV4 && value.length === 1) {
            // Navigate to VerifyName screen when v4 is filled
            navigation.navigate('NameInputScreen');
        }
    };

    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardVisible(true);

        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardVisible(false);

        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);
    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', (event) => {
            const keyboardHeightInPercentage = (event.endCoordinates.height / screenHeight) * 100;
            setKeyboardVisible(true);
            setKeyboardHeight(keyboardHeightInPercentage.toFixed(1));
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardVisible(false);
            setKeyboardHeight(0);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, [screenHeight]);

    function startTimer() {
        console.log("Timere started again")
        setTimer(60)

    }

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer(timer - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [timer]);

    // useFocusEffect(
    //     React.useCallback(() => {
    //         const focusTimeout = setTimeout(() => {
    //             v1Ref.current.focus();
    //         }, 100);

    //         return () => clearTimeout(focusTimeout);
    //     }, [])
    // );
    const isAllFieldsFilled = v1 && v2 && v3 && v4;

    function moveNext() {
        navigation.navigate('NameInputScreen');
    }


    {
        return (
            <SafeAreaView style={styles.safeArea}>
                <KeyboardAvoidingView >
                    <Header />

                    <View style={styles.titleContainer}>
                        <HeadingText title={'Enter the verification code'} />
                        {/* <Text style={styles.titleText}>Enter the verification code</Text> */}


                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                // onChangeText={value => setV1(value)}
                                onChangeText={value => handleChange(value, setV1, v2Ref)}

                                keyboardType="numeric"
                                keyboardAppearance="dark"
                                maxLength={1}
                                value={v1}
                                ref={v1Ref}
                            />
                            <TextInput
                                style={styles.input}
                                // onChangeText={value => setV2(value)}
                                onChangeText={value => handleChange(value, setV2, v3Ref)}

                                value={v2}
                                keyboardType="numeric"
                                keyboardAppearance="dark"
                                maxLength={1}
                                ref={v2Ref}

                            />
                            <TextInput
                                style={styles.input}
                                // onChangeText={value => setV3(value)}
                                onChangeText={value => handleChange(value, setV3, v4Ref)}

                                value={v3}
                                keyboardType="numeric"
                                keyboardAppearance="dark"
                                maxLength={1}
                                ref={v3Ref}

                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={value => handleChange(value, setV4, null)}

                                // onChangeText={value => setV4(value)}
                                ref={v4Ref}

                                value={v4}
                                keyboardType="numeric"
                                keyboardAppearance="dark"
                                maxLength={1}
                            />
                        </View>
                        {timer > 0 ? (
                            <Text style={styles.timerText}>Resend code in {timer}s</Text>
                        ) : (
                            <TouchableOpacity onPress={startTimer}>
                                <Text style={styles.resendTextBlue}>Resend code</Text>
                            </TouchableOpacity>
                        )}

                        <CustomButton
                            title="Continue"
                            buttonState={isAllFieldsFilled}
                            keyboardVisible={keyboardVisible}
                            keyboardHeight={keyboardHeight}
                            nextScreenName="NameInputScreen"
                            marginTop={50}
                            onPress={moveNext}
                            extraSpace={6}

                        />
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
        width: wp('95%'),
        alignSelf: 'center',
        marginTop: hp('1%'),
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'red'
    },
    titleText: {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: '700',
        width: wp('75%'),
        textAlign: 'center',
        fontFamily: 'inter',
        //    backgroundColor:'red'
        //    lineHeight:128.646,
        // font:'urbanist'
    },

    textInput: {
        width: wp('70%'),
        height: hp("60%"),

    },
    resendTextBlue: {
        color: color.onBoardingButton,
        fontSize: 15,
        fontFamily: 'Inter',
        fontWeight: '700',
        marginTop: hp(2.5),
    },

    inputContainer: {
        width: '100%',
        height: hp(6),
        marginTop: '10%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        // backgroundColor:'red',

    },
    input: {
        backgroundColor: color.inputFieldColor,
        width: '22%',
        borderRadius: 10,
        borderColor: '#414142',
        borderWidth: 1,
        color: 'white',
        fontSize: 28,
        textAlign: 'center',

    },
    ButtonContainer: {
        backgroundColor: color.WhiteWithThirtypercentOpacity,
        // height:hp('7%'),
        height: hp(6),
        // width:363,
        borderRadius: 10,
        width: wp('92%'),
        marginTop: hp(26),
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'



    },
    resendText: {
        alignItems: 'center',
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'inter'

    },
    resendTextActive: {
        backgroundColor: color.onBoardingButton,

    },
    timerText: {
        color: '#6F6F70',
        fontSize: 15,
        fontFamily: 'Inter',
        fontWeight: '700',
        marginTop: hp(2.5),
    },
    touchableArea: {
        width: '100%', // Make it the full width of the container
        height: '100%', // Make it the full height of the container
        alignItems: 'center', // Center the text
        justifyContent: 'center', // Center the text
        borderRadius: 10,
    },

});
export default VerifyCode;