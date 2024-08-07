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
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
// import AddFriendList from '../Components/AddFriendList1';

import Header from '../Components/Header';
import { color } from '../../../src/styles/color';
import AddFriendList from '../../Components/AddFriendList';



const Notification = ({ navigation }) => {
    //   const navigation = useNavigation();
    const todayData=[
        {
            id:1,
            profileImage:require('../../../src/assets/images/Profile2.png'),
            userName:"isayef",
            hostName:"Harpers Half Off Wednesday",
            time:5,
        },
        {
            id:2,
            profileImage:require('../../../src/assets/images/Profile2.png'),
            userName:"isayef",
            hostName:"Harpers Half Off Wednesday",
            time:5,
        },
        {
            id:3,
            profileImage:require('../../../src/assets/images/Profile2.png'),
            userName:"isayef",
            hostName:"Harpers Half Off Wednesday",
            time:5,
        },
        {
            id:4,
            profileImage:require('../../../src/assets/images/Profile2.png'),
            userName:"isayef",
            hostName:"Harpers Half Off Wednesday",
            time:5,
        },
        {
            id:5,
            profileImage:require('../../../src/assets/images/Profile2.png'),
            userName:"isayef",
            hostName:"Harpers Half Off Wednesday",
            time:5,
        },
        
    ]
   
    function moveNext() {
        navigation.navigate('Location')
    }


    {
        return (
            <SafeAreaView style={styles.safeArea}>
                <KeyboardAvoidingView >
                    <Header title={"Notification"}/>
                    <View style={styles.secondHeader}>
                    <Text style={styles.titleText}>Today</Text>
                    </View>
                    <View style={styles.secondHeader}>
                    <Text style={styles.titleText}>Yesterday</Text>
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

    secondHeader: {
        width: wp('95%'),
        alignSelf: 'center',
        marginTop: hp('1%'),
        justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor:'red'
    },
    titleText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold',
       
        fontFamily: 'inter'
        // font:'urbanist'
    },
    touchableArea: {
        width: '100%', // Make it the full width of the container
        height: '100%', // Make it the full height of the container
        alignItems: 'center', // Center the text
        justifyContent: 'center', // Center the text
      },



    ButtonContainer: {
        backgroundColor: color.onBoardingButton,
        // height:hp('7%'),
        height: 50,
        // width:363,

        width: wp('92%'),
        marginTop: hp(25),
        textAlign: 'center',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        // top: hp('60%'),//65 on android
        top:Platform.OS === 'ios' ? hp('60%') :hp('65%'),
        left:hp('2%')




    },
    conTinueText: {
        alignItems: 'center',
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'inter'

    }

});
export default Notification;