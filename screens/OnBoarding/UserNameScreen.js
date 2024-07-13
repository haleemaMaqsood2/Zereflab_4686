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


const UserNameScreen = ({navigation}) => {
    //   const navigation = useNavigation();
const [userName,setUserName]=useState('')

const userNameRef = useRef(null);
const handleChange = (value) => {
    setUserName(value);
        userNameRef.current.focus();
    
   
};
    
    function moveNext() {
        navigation.navigate('ImageUpload')
    }
    useEffect(() => {
        const focusTimeout = setTimeout(() => {
            if (userNameRef.current) {
                userNameRef.current.focus();
            }
        }, 500);

        return () => clearTimeout(focusTimeout);
    }, []);

    // useFocusEffect(
    //     React.useCallback(() => {
    //         const focusTimeout = setTimeout(() => {
    //             if (userNameRef.current) {
    //                 userNameRef.current.focus();
    //             }
    //         }, 100);
    //         return () => clearTimeout(focusTimeout);
    //     }, [])
    // );


    {
        return (
            <SafeAreaView style={styles.safeArea}>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <Header/>

                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Create a username</Text>
                    <View style={styles.input}>
                    <TextInput
                            // style={styles.input}
                            onChangeText={value => handleChange(value)}
                            placeholder='Username'
                            placeholderTextColor={color.placeholderColor}

                            keyboardAppearance="dark"
                            value={userName}
                            ref={userNameRef}
                        />
                          <Image
                                    style={styles.image}
                                    source={require('../../src/assets/images/doneIcon.png')}
                                    resizeMode="contain"
                                />

                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.descriptionText}>Your username is unique. You can always change it later</Text>
                    </View>

                    
                    
                    <View style={styles.ButtonContainer}>
                        <TouchableOpacity onPress={moveNext}>
                            <Text style={styles.conTinueText}>Sign Up</Text>
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
        // width: '96%',
        width:wp('92%'),
        marginTop: '10%',

        borderRadius: 15,
        borderColor: '#414142',
        borderWidth: 0.5,
        color: color.placeholderColor,
        fontSize: 16,
        fontWeight:'500',
        paddingLeft:wp(5),
        fontFamily:'inter',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:RFPercentage('3'),
        paddingRight:RFPercentage('3')

        
       
    },
    ButtonContainer:{
        backgroundColor:color.buttonColor,
        // height:hp('7%'),
        height:hp('7%'),
        // width:363,

         width:wp('92%'),
        //  marginTop:hp(22),
        marginTop:hp(18),

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
    descriptionContainer:{
        // backgroundColor:'white',
        fontSize:RFPercentage(14),
        fontWeight:'500',
        fontFamily:'Inter',
        marginTop:RFPercentage(2),
        width:wp('70%')
    },
    descriptionText:{
        textAlign:'center',
        color:color.placeholderColor
    },
    image: {
        marginTop:'4.5%',
        paddingLeft:RFPercentage(-3)
 
    },

});
export default UserNameScreen;