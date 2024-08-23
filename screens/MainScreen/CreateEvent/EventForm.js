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
    FlatList,
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
import EventUpload from '../../Components/EventUpload';
EventUpload


const EventForm = ({ navigation }) => {
    //   const navigation = useNavigation();





    {
        return (
            <SafeAreaView style={styles.safeArea}>
                {/* <KeyboardAvoidingView > */}
                    <Header title={"Create Event"} />
                    <ScrollView contentContainerStyle={styles.scrollViewContent}
                     showsVerticalScrollIndicator={false}  // Hide vertical scrollbar
                     showsHorizontalScrollIndicator={false} // Hide horizontal scrollbar
                    >
                        {/* <EventUpload /> */}
                        <Image source={require('../../../src/assets/images/EventModule/eventMain.png')}
                            // resizeMode={'contain'}
                            resizeMode="CONTAIN"

                            style={styles.image} />
                        <View style={styles.fieldsContainer}>
                            <View style={styles.fieldWrapper}>
                                <Text style={styles.fieldTitle}>Event Title</Text>
                                <TextInput
                                style={styles.input}/>
                            </View>
                            <View style={styles.fieldWrapper}>
                                <Text style={styles.fieldTitle}>Date and Time</Text>
                                <TextInput
                                style={styles.input}/>
                            </View>
                            <View style={styles.fieldWrapper}>
                                <Text style={styles.fieldTitle}>Location</Text>
                                <TextInput
                                style={styles.input}/>
                            </View>
                            <View style={styles.fieldWrapper}>
                                <Text style={styles.fieldTitle}>Description</Text>
                                <TextInput
                                style={styles.descriptionInput}/>
                            </View>
                            <View style={styles.fieldWrapper}>
                                <Text style={styles.fieldTitle}>Privacy</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.ButtonContainer}>
                            <Text style={{ alignSelf:'center',fontSize:14,fontWeight:'700',fontFamily:'Inter',color:color.whiteColor}}>
                                Create Event
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>


                {/* </KeyboardAvoidingView> */}

            </SafeAreaView>

        );
    }



}
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: color.backgroundColor,
    },
    fieldTitle: {
        fontSize: 14,
        fontFamily: 'Inter',
        color: 'white',
        fontWeight: 'bold'
    },
    scrollViewContent: {
        // flexGrow: 1,
        width:'100%',
        paddingBottom: hp('2%'), // Add padding at the bottom for spacing
    },
    fieldsContainer: {
        paddingHorizontal: wp('2%'),
        marginTop: hp('2%'),
    },
    fieldWrapper: {
        marginBottom: hp('2%'),
    },
    image:{
        height:350,
        width:'100%'
      },
      input:{
        backgroundColor:color.inputFieldColor,
        height:hp(6),
        borderWidth:1,
        borderRadius:10,
        marginTop:'2%',
        borderColor:color.whiteWithTenPercencentOpacity
      },
      descriptionInput:{
        backgroundColor:color.inputFieldColor,
        height:hp(7),
        borderWidth:1,
        borderRadius:10,
        marginTop:'2%',
        borderColor:color.whiteWithTenPercencentOpacity
      },
      ButtonContainer:{
        backgroundColor:color.onBoardingButton,
        alignSelf:'center',
        justifyContent:'center',
        width:'95%', 
        height:hp(6),
        borderRadius:10
    }



});
export default EventForm;