import React, { useState, useRef, useEffect,useLayoutEffect } from 'react';
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

const NameInputScreen = ({ navigation }) => {
    const [keyboardVisible, setKeyboardVisible] = useState(false);
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const { height: screenHeight, width: screenWidth } = Dimensions.get('window');


    //   const navigation = useNavigation();
    const [name, setName] = useState('')
    const nameRef = useRef(null);
    const handleChange = (value) => {
        setName(value);
        nameRef.current.focus();


    };

    function moveNext() {
        navigation.navigate('DateOfBirth')
        // navigation.navigate('UserNameScreen'); // Navigate if age is 17 or older

    }



    
    useLayoutEffect(() => {
        nameRef.current.focus();

        // const showSubscription = Keyboard.addListener('keyboardWillShow', (event) => {
        //     unstable_batchedUpdates(() => {
        //         const keyboardHeightInPercentage = (event.endCoordinates.height / screenHeight) * 100;
        //         setKeyboardVisible(true);
        //         setKeyboardHeight(keyboardHeightInPercentage.toFixed(1));
        //     });
        // });
    
        // const hideSubscription = Keyboard.addListener('keyboardWillShow', () => {
        //     unstable_batchedUpdates(() => {
        //         setKeyboardVisible(false);
        //         setKeyboardHeight(0);
        //     });
        // });
    
        // return () => {
        //     showSubscription.remove();
        //     hideSubscription.remove();
        // };
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
    useFocusEffect(
        React.useCallback(() => {
            // Refocus the first input field when the screen is focused
            nameRef.current.focus();
        }, [])
    );
    
    {
        return (
            <SafeAreaView style={styles.safeArea}>
                <KeyboardAvoidingView >
                    <Header />

                    <View style={styles.titleContainer}>
                        <HeadingText title={"What's your name?"} />
                        <CustomTextInput
                            value={name}
                            onChangeText={handleChange}
                            placeholder='Full name'
                            placeholderTextColor={color.placeholderColor}
                            ref={nameRef}
                        />
                    

                        <CustomButton
                            title="Continue"
                            buttonState={name}
                            keyboardVisible={keyboardVisible}
                            keyboardHeight={keyboardHeight}
                            nextScreenName="DateOfBirth"
                            marginTop={55}
                            onPress={moveNext}
                            extraSpace={3.4}

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
        backgroundColor: color.WhiteWithThirtypercentOpacity,
        // height:hp('7%'),
        height: hp(6),
        // width:363,

        width: wp('92%'),
        marginTop: hp(25),
        textAlign: 'center',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'



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
export default NameInputScreen;