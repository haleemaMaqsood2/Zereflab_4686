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
    Modal


} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useDispatch } from 'react-redux';

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
// import AddFriendList from '../Components/AddFriendList1';
import DatePicker from 'react-native-date-picker';

import Header from '../Components/Header';
import { color } from '../../../src/styles/color';
import AddFriendList from '../../Components/AddFriendList';
import EventUpload from '../../Components/EventUpload';
import CustomTextInputMain from '../../Components/CustomTextInputMain';
import { setEventData } from '../../../src/store/slices/eventDataSlice/eventDataSlice';
// CustomTextInput


const EditProfile = ({ navigation }) => {
    //   const navigation = useNavigation();




    {
        return (
            <SafeAreaView style={styles.safeArea}>
                <KeyboardAwareScrollView
                    showsVerticalScrollIndicator={false}  // Hide vertical scrollbar
                    showsHorizontalScrollIndicator={false}>

                    <Header title={"Edit profile"} />
                    <View style={{ justifyContent: 'center', alignItems: 'center',flexDirection:'row' }}>
                        <Image
                            source={require('../../../src/assets/images/ProfileImage1x4.png')}
                            style={styles.profileIcon}
                            resizeMode="contain"
                        />
                          <Image
                            source={require('../../../src/assets/images/cameraIcon1x4.png')}
                            style={styles.icon}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={styles.editForm}>
                        <View style={styles.rowField}>
                            <Text style={styles.titleText}>Full name</Text>
                            <TextInput
                                style={styles.textFieldColor}
                                placeholderTextColor={color.whiteWithfiftypercentOpacity}
                                // editable={false} // To make the input read-only
                                placeholder="Full name"
                            />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.titleText}>Username</Text>
                            <TextInput
                                style={styles.textFieldColor}
                                placeholderTextColor={color.whiteWithfiftypercentOpacity}
                                // editable={false} // To make the input read-only
                                placeholder="@username"
                            />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.titleText}>Bio</Text>
                            <TextInput
                                style={styles.textFieldColor}
                                placeholderTextColor={color.whiteWithfiftypercentOpacity}
                                // editable={false} // To make the input read-only
                                placeholder="Bio"
                            />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.titleText}>Instagram</Text>
                            <TextInput
                                style={styles.textFieldColor}
                                placeholderTextColor={color.whiteWithfiftypercentOpacity}
                                // editable={false} // To make the input read-only
                                placeholder="@username"
                            />
                        </View>
                    </View>





                </KeyboardAwareScrollView>

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
    profileIcon: {
        width: wp('40%'),
        height: hp('20%'),
        
        // marginRight: wp('3%')
    },
    editForm: {
        width: wp(90),
        paddingLeft: 15,
        paddingTop: hp(3),
        // justifyContent:'center',
        // backgroundColor: 'grey'

    },
    titleText: {
        fontSize: 14,
        fontFamily: 'Inter',
        fontWeight: '700',
        color: color.whiteColor,
        // height:hp(5),
        width:wp(20),
        justifyContent:'center',
        alignSelf:'center',
        alignItems:'center',


    },
    textFieldColor: {
        width: wp(70),
        fontFamily:'Inter',
        fontSize:14,
        fontWeight:'300',
        color:color.whiteColor,
        borderBottomWidth:1,
        height:hp(5.5),
        alignItems:'flex-end',
        borderBottomColor:color.whiteWithTenPercencentOpacity,

        marginLeft: wp(5)

    },
    rowField:{ 
        flexDirection: 'row',
        // backgroundColor:'red'
     },
     icon:{
        height:29,
        width:29,
        right:wp(35),
        top:hp(16),
        position: 'absolute', // Position absolute to overlap the profile image

     }




});
export default EditProfile;