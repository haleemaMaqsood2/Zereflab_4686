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
import HomeTab from '../Components/HomeTab';



const Friends = ({ navigation }) => {
    //   const navigation = useNavigation();
    const [selectedTab, setSelectedTab] = useState('Popular')
    const [filteredData, setFilteredData] = useState([]);

    const TabData = [
        {
          id: 1,
          name: 'Suggestions',
        },
        {
          id: 2,
          name: 'Friends',
        },
        {
          id: 3,
          name: 'Requests',
        },
      ]

      useEffect(() => {
    
        
        // Dynamically update the data based on the selected tab
        // if (selectedTab === 'Suggestions') {
        //   setFilteredData(data);
        // } else if (selectedTab === 'Friends') {
        //   setFilteredData(upcomingData);
        // } else if (selectedTab === 'Requests') {
        //   setFilteredData(friendsData);
        // }
      }, [selectedTab]);
   


    {
        return (
            <SafeAreaView style={styles.safeArea}>
                <KeyboardAvoidingView >
                    <Header title={"Friends"} />
                    <HomeTab data={TabData} onTabSelect={setSelectedTab} />
                    <View style={{height:'20%',width:'90%',alignSelf:'center',justifyContent:'center'}}>
                        <Text style={styles.titleText}>People you may know</Text>
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
    sectionHeader: {
        width: wp('95%'),
        alignSelf: 'center',
        // marginTop: hp('1%'),
        marginBottom: hp('2%')
    },
    titleText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '700',
        fontFamily: 'inter',
    },
    secondHeader: {
        width: '95%',
        alignSelf: 'center',
        marginTop: '1%',
        justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor:'red'
    },
    listData: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        // backgroundColor:'red'
    },
    friendImage:{

    height:RFPercentage(2),
    width:RFPercentage(2.25),
    alignSelf:'flex-end'
    },
    addButton:{
        width:'10%'
    },
    friendContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: '7.5%',
        // width:'90%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',
        flex: 1,
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
    image: {
        height: 40,
        width: 40,
    },
    infoContainer: {
        // backgroundColor:'pink',
        width: '70%',
        alignSelf: 'center',
        paddingLeft: '4%'
    },
    descriptionText: {
        fontSize: 12,
        fontFamily: 'Inter',
        fontWeight: '700',
        color: color.whiteColor,
    },
    description2Text: {
        fontSize: 12,
        fontFamily: 'Inter',
        fontWeight: '400',
        color: color.whiteColor,
    },
    timestyle: {
        fontSize: 12,
        fontFamily: 'Inter',
        fontWeight: '400',
        color: '#ffffff80',
    }
  
});
export default Friends;