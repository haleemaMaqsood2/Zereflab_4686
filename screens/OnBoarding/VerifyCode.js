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
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation,useFocusEffect } from '@react-navigation/native';
import { color } from '../../src/styles/color';
import Header from '../Components/Header';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


const VerifyCode = () => {
    //   const navigation = useNavigation();


    const navigation = useNavigation();
    const [v1, setV1] = useState('');
    const [v2, setV2] = useState('');
    const [v3, setV3] = useState('');
    const [v4, setV4] = useState('');
    const [timer, setTimer] = useState(60);

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
        const focusTimeout = setTimeout(() => {
            v1Ref.current.focus();
        }, 500);

        return () => clearTimeout(focusTimeout);
    }, []);
    //for timer on buttonuseEffect(() => {
        
        useEffect(() => {
            if (timer > 0) {
                const interval = setInterval(() => {
                    setTimer(timer - 1);
                }, 1000);
                return () => clearInterval(interval);
            }
        }, [timer]);
    ///Discourage user to close keyboard
    useFocusEffect(
        React.useCallback(() => {
          const focusTimeout = setTimeout(() => {
            v1Ref.current.focus();
          }, 100);
    
          return () => clearTimeout(focusTimeout);
        }, [])
      );

    function moveNext() {
        navigation.navigate('SignUp')
    }


    {
        return (
            <SafeAreaView style={styles.safeArea}>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <Header/>

                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Enter the verification code</Text>


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
                    
                    <View style={styles.ButtonContainer}>
                        <TouchableOpacity onPress={moveNext}>
                            <Text style={styles.resendText}>Resend code in {timer}s</Text>
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
        width:wp('70%'),
        textAlign:'center',
       fontFamily:'inter'
        // font:'urbanist'
    },
    
    textInput: {
        width: wp('70%'),
        height:hp("60%"),
       
    },
    
    inputContainer: {
        width: '100%',
        height:55,
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
    ButtonContainer:{
        backgroundColor:color.buttonColor,
        // height:hp('7%'),
        height:50,
        // width:363,

         width:wp('92%'),
         marginTop:hp(26),
         textAlign: 'center',
         borderRadius:10,
         alignItems:'center',
         justifyContent:'center'



    },
    resendText:{
        alignItems:'center',
        color:'#FFFFFF',
        fontSize:16,
        fontWeight:'700',
        fontFamily:'inter'

    }

});
export default VerifyCode;