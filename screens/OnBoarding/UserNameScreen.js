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
    Platform,
    Dimensions

} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { color } from '../../src/styles/color';
import Header from '../Components/Header';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import HeadingText from '../Components/HeadingText';
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';


const UserNameScreen = ({ navigation }) => {
    //   const navigation = useNavigation();
    const [keyboardVisible, setKeyboardVisible] = useState(false);

    const [userName, setUserName] = useState('')
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

    const userNameRef = useRef(null);
    const handleChange = (value) => {
        setUserName(value);
        // userNameRef.current.focus();


    };
    

    function moveNext() {
        navigation.navigate('ImageUpload')
    }


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


    {
        return (
            <SafeAreaView style={styles.safeArea}>
                <KeyboardAvoidingView>
                    <Header />

                    <View style={styles.titleContainer}>
                        <HeadingText title={'Create a username'} />
                        {/* <Text style={styles.titleText}>Create a username</Text> */}
                        <CustomInput
                            value={userName}
                            onChangeText={handleChange}
                            placeholder='Username'
                            placeholderTextColor={color.placeholderColor}
                            ref={userNameRef}
                        />
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.descriptionText}>Your username is unique. You can always change it later</Text>
                        </View>



                        {/* <View style={[
                            styles.ButtonContainer,
                            // { marginTop: keyboardVisible ? hp(12) : hp(50) }, // Dynamic margin
                                // styles.ButtonContainer,
                                { marginTop: getButtonMarginTop() }, // Dynamic margin
    
                        ]}>
                        <TouchableOpacity onPress={moveNext} style={[styles.touchableArea, userName ? styles.buttonActive : styles.buttonInactive]}>
                            <Text style={styles.conTinueText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View> */}


                        <CustomButton
                            title="Sign Up"
                            buttonState={userName}
                            keyboardVisible={keyboardVisible}
                            keyboardHeight={keyboardHeight}
                            nextScreenName="ImageUpload"
                            marginTop={53}
                            onPress={moveNext}
                            extraSpace={3.5}

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
        width: wp('80%'),
        textAlign: 'center',
        fontFamily: 'inter'
        // font:'urbanist'
    },

    textInput: {
        width: wp('70%'),
        height: hp("60%"),

    },

    inputContainer: {
        width: '100%',
        height: 55,
        marginTop: '10%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        // backgroundColor:'red',

    },
    buttonActive: {
        backgroundColor: color.onBoardingButton,
        borderRadius: 10,

    },
    buttonInactive: {
        // backgroundColor: '#ffffff33',
        borderRadius: 10,

    },
    input: {
        backgroundColor: color.inputFieldColor,
        // width: '96%',
        width: wp('92%'),
        marginTop: '10%',

        borderRadius: 10,
        borderColor: '#414142',
        borderWidth: 1,
        color: '#ffffff33',//backgroundColor: '#ffffff33',
        height: hp(6),
        fontSize: 16,
        fontWeight: '500',
        paddingLeft: wp(5),
        fontFamily: 'inter',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // paddingLeft:RFPercentage('3'),
        paddingRight: RFPercentage('3')



    },
    ButtonContainer: {
        backgroundColor: '#ffffff33',
        // height:hp('7%'),
        height: hp('6%'),
        // width:363,

        width: wp('92%'),
        //  marginTop:hp(22),
        marginTop: hp(18),

        textAlign: 'center',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'



    },
    touchableArea: {
        width: '100%', // Make it the full width of the container
        height: '100%', // Make it the full height of the container
        alignItems: 'center', // Center the text
        justifyContent: 'center', // Center the text
    },
    conTinueText: {
        alignItems: 'center',
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'inter'

    },
    descriptionContainer: {
        // backgroundColor:'white',
        fontSize: RFPercentage(14),
        fontWeight: '500',
        fontFamily: 'Inter',
        marginTop: RFPercentage(2),
        width: wp('80%')
    },
    descriptionText: {
        textAlign: 'center',
        color: color.placeholderColor
    },
    image: {
        marginTop: '4.5%',
        paddingLeft: RFPercentage(-3)

    },

});
export default UserNameScreen;