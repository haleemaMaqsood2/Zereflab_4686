import React, { useState, useRef,useEffect} from 'react';
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
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation,useFocusEffect } from '@react-navigation/native';
import { color } from '../../src/styles/color';
import Header from '../Components/Header';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import HeadingText from '../Components/HeadingText';

const NameInputScreen = ({navigation}) => {
    const [keyboardVisible, setKeyboardVisible] = useState(false);


    //   const navigation = useNavigation();
const [name,setName]=useState('')
const nameRef = useRef(null);
const handleChange = (value) => {
    setName(value);
        nameRef.current.focus();
    
   
};
    
    function moveNext() {
        navigation.navigate('DateOfBirth')
    }
    // useEffect(() => {
    //     const focusTimeout = setTimeout(() => {
    //         nameRef.current.focus();
    //     }, 500);

    //     return () => clearTimeout(focusTimeout);
    // }, []);
    //To make keyboard remain open if user navigate back case
    // useFocusEffect(
    //     React.useCallback(() => {
    //       const focusTimeout = setTimeout(() => {
    //         nameRef.current.focus();
    //       }, 100);
    //       return () => clearTimeout(focusTimeout);
    //     }, [])
    //   );
      ///useEffect to manage keyboard state
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
   


    {
        return (
            <SafeAreaView style={styles.safeArea}>
                <KeyboardAvoidingView >
                <Header/>

                <View style={styles.titleContainer}>
                    <HeadingText title={"What's your name?"}/>
                    {/* <Text style={styles.titleText}>What's your name?</Text> */}
                    <View style={styles.inputContainer}>
                    <TextInput
                            style={styles.input}
                            // onChangeText={value => setV1(value)}
                            onChangeText={value => handleChange(value)}
                            placeholder='Full name'
                            placeholderTextColor={color.placeholderColor}

                            keyboardAppearance="dark"
                            value={name}
                            ref={nameRef}
                        />

                    </View>

                    
                    
                    <View style={[
                            styles.ButtonContainer,

                            { marginTop: keyboardVisible ? hp(18) : hp(54) }, // Dynamic margin
                        ]}>
                        <TouchableOpacity onPress={moveNext} style={[styles.touchableArea, name ? styles.buttonActive : styles.buttonInactive]}>
                            <Text style={styles.conTinueText}>Continue{keyboardVisible}</Text>
                        </TouchableOpacity>
                    </View>
                  
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
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'red'
    },
    titleText: {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: '700',
        width:wp('80%'),
        textAlign:'center',
       fontFamily:'Inter',
       lineHeight:36,
        // font:'urbanist'
    },
    
    textInput: {
        width: wp('70%'),
        height:hp("60%"),
       
    },
    buttonActive: {
        backgroundColor: color.onBoardingButton,
        borderRadius: 10,
    
      },
      buttonInactive: {
        backgroundColor: '#ffffff33',
        borderRadius: 10,
    
      },
    inputContainer: {
        width: '100%',
        height:hp(6),
        marginTop: hp('5%'),
        // marginTop:40,
        flexDirection: 'row',
        justifyContent: 'space-around',
        // backgroundColor:'red',

    },
    input: {
        backgroundColor: color.inputFieldColor,
        // width: '96%',
        width:wp('92%'),

        borderRadius: 10,
        borderColor: '#414142',
        borderWidth: 1,
        color: color.whiteColor,
        fontSize: 16,
        fontWeight:'500',
        paddingLeft:wp(5),
        fontFamily:'inter'
        
       
    },
    ButtonContainer:{
        backgroundColor: '#ffffff33',
        // height:hp('7%'),
        height:hp(6),
        // width:363,

         width:wp('92%'),
         marginTop:hp(25),
         textAlign: 'center',
         borderRadius:10,
         alignItems:'center',
         justifyContent:'center'



    },
    conTinueText:{
        alignItems:'center',
        color:'#FFFFFF',
        fontSize:16,
        fontWeight:'700',
        fontFamily:'inter'

    },
    touchableArea: {
        width: '100%', // Make it the full width of the container
        height: '100%', // Make it the full height of the container
        alignItems: 'center', // Center the text
        justifyContent: 'center', // Center the text
      },

});
export default NameInputScreen;