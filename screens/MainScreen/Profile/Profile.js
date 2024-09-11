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

import { color } from '../../../src/styles/color';
import AddFriendList from '../../Components/AddFriendList';
import EventUpload from '../../Components/EventUpload';
import CustomTextInputMain from '../../Components/CustomTextInputMain';
import { setEventData } from '../../../src/store/slices/eventDataSlice/eventDataSlice';
import ProfileHeader from './ProfileHeader';
import ProfileTab from '../Components/ProfileTab';
import EventDetail from '../Components/EventDetail';


const Profile = ({ navigation }) => {
    //   const navigation = useNavigation();
    const [selectedTab, setSelectedTab] = useState('Upcoming')
    const [filteredData, setFilteredData] = useState([]);
    const today = 'Today - 12:00 PM';

    const upcomingData = [
        {
          id: 1,
          username: 'msu-fiji',
          userProfileIcon: require('../../../src/assets/images/partyUser1x4.png'),
          Title: 'Business conference 2024..',
          partyImage: require('../../../src/assets/images/event.png'),
          time: 'Fri, Jul 20',
          count: 50,
          friends: 12,
          userCountImage:require('../../../src/assets/images/user1.png'),
        },
        {
          id: 2,
          username: 'msu-fiji',
          userProfileIcon: require('../../../src/assets/images/partyUser1x4.png'),
          Title: 'Business conference 2024..',
          partyImage: require('../../../src/assets/images/event.png'),
    
          time: 'Fri, Jul 20',
          count: 50,
          friends: 12,
          userCountImage:require('../../../src/assets/images/user1.png'),
        },
        {
          id: 3,
          username: 'msu-fiji1',
          userProfileIcon: require('../../../src/assets/images/partyUser1x4.png'),
          Title: 'Business conference 2024..',
          partyImage: require('../../../src/assets/images/event.png'),
          time: 'Fri, Jul 20',
          count: 50,
          friends: 12,
          userCountImage:require('../../../src/assets/images/user1.png'),
        },
        {
          id: 4,
          username: 'msu-fiji',
          userProfileIcon: require('../../../src/assets/images/partyUser1x4.png'),
          Title: 'Business conference 2024..',
          partyImage: require('../../../src/assets/images/event.png'),
    
          time: 'Fri, Jul 20',
          count: 50,
          friends: 12,
          userCountImage:require('../../../src/assets/images/user1.png'),
        },
      ]
      const pastData = [
        {
            id: 1,
            username: 'msu-fiji',
            userProfileIcon: require('../../../src/assets/images/partyUser1x4.png'),
            Title: 'Business conference 2024..',
            partyImage: require('../../../src/assets/images/event.png'),
            time: 'Fri, Jul 20',
            count: 50,
            friends: 12,
            userCountImage:require('../../../src/assets/images/user1.png'),
          },
          {
            id: 2,
            username: 'msu-fiji',
            userProfileIcon: require('../../../src/assets/images/partyUser1x4.png'),
            Title: 'Business conference 2024..',
            partyImage: require('../../../src/assets/images/event.png'),
      
            time: 'Fri, Jul 20',
            count: 50,
            friends: 12,
            userCountImage:require('../../../src/assets/images/user1.png'),
          },
        
      ]
        function moveNext() {
            navigation.navigate('EditProfile')
    
    
        }
        const TabData = [
            {
                id: 1,
                name: 'Upcoming',
            },
            {
                id: 2,
                name: 'Past',
            },

        ]


        useEffect(() => {


            // Dynamically update the data based on the selected tab
            if (selectedTab === 'Upcoming') {
              setFilteredData(upcomingData);
            } else if (selectedTab === 'Past') {
              setFilteredData(pastData);
    
            } 
        }, [selectedTab]);
    

    {
        return (
            <SafeAreaView style={styles.safeArea}>
                <ScrollView
                    showsVerticalScrollIndicator={false}  // Hide vertical scrollbar
                    showsHorizontalScrollIndicator={false}>

                    <ProfileHeader title={"iCristofer"} />
                    <View style={{ justifyContent: 'center', alignItems: 'center',flexDirection:'row' }}>
                        <Image
                            source={require('../../../src/assets/images/ProfileImage1x4.png')}
                            style={styles.profileIcon}
                            resizeMode="contain"
                        />
                         
                    </View>
                    <View style={styles.userInfo}>
                        <Text style={styles.userName}>Cristofer Nolan</Text>
                        <Text style={styles.userDetail}>Lorem ipsum dolor sit </Text>

                        {/* //Edit profile button */}
                        <TouchableOpacity 
                        onPress={moveNext}
                        style={styles.EditProfileButton}>
                            <Text style={styles.editProfileText}>Edit profile</Text>
                        </TouchableOpacity>

                    </View>
                    <ProfileTab  data={TabData} onTabSelect={setSelectedTab}/>
                    <EventDetail data={filteredData}/>





                </ScrollView>

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

     },
     userInfo:{
        // backgroundColor:'red',
     },
     userName:{
        fontSize:20,
        fontWeight:'700',
        fontFamily:'Inter',
        color:color.whiteColor,
        alignSelf:'center'
     },
     userDetail:{
        fontSize:13,
        fontWeight:'400',
        fontFamily:'Inter',
        color:color.whiteWithfiftypercentOpacity,
        alignSelf:'center',
        marginTop:hp(1)
     },
     EditProfileButton:{height:hp(5),
        backgroundColor:color.inputFieldColor,
        borderWidthg:10,
        borderWidth:1,
        borderColor:color.whiteWithfiftypercentOpacity,
        width:wp(95),
        borderRadius:10,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        marginTop:hp(2)
    },
    editProfileText:{
        fontSize:16,
        textAlign:'center',
        fontWeight:'700',
        color:color.whiteColor
    },




});
export default Profile;