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
import SearchInput from '../../Components/SearchInput';
import FriendSuggestions from '../Components/FriendSuggestions';



const Friends = ({ navigation }) => {
    //   const navigation = useNavigation();
    const [selectedTab, setSelectedTab] = useState('Suggestions')
    const [filteredData, setFilteredData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [selectedTitle, setSelectedTitle] = useState('');


    const suggestedFriendData=[
        {
            id:1,
            name:"Ronald C",
            username:'@Username',
            image: require('../../../src/assets/images/avatar/Avatar3.png'),
            mutualFriends:12,
            status:'Suggested',
            title:'Add'
        },
        {
            id:2,
            name:"Cristofer Nolan ",
            username:'@Username',
            image: require('../../../src/assets/images/avatar/Avatar5.png'),
            mutualFriends:12,
             status:'Suggested',
            title:'Add'


        },
        {
            id:3,
            name:"Rayn howard",
            username:'@Username',
            image: require('../../../src/assets/images/avatar/Avatar1.png'),
            mutualFriends:12,
             status:'Suggested',
            title:'Add'


        },{
            id:4,
            name:"FullName",
            username:'@Username',
            mutualFriends:12,

            image: require('../../../src/assets/images/Profile2.png'),
             status:'Suggested',
            title:'Add'


        }
       
    ]
    const friendData=[
        {
            id:1,
            name:"Ronald C",
            username:'@Username',
            image: require('../../../src/assets/images/avatar/Avatar3.png'),
            mutualFriends:12,
            status:'friends',
            title:'Suggested'
        },
        {
            id:2,
            name:"Cristofer Nolan ",
            username:'@Username',
            image: require('../../../src/assets/images/avatar/Avatar5.png'),
            mutualFriends:12,
            status:'friends',
            title:'Suggested'


        },
        {
            id:3,
            name:"Rayn howard",
            username:'@Username',
            image: require('../../../src/assets/images/avatar/Avatar1.png'),
            mutualFriends:12,
            status:'friends',
            title:'Suggested'


        },{
            id:4,
            name:"FullName",
            username:'@Username',
            mutualFriends:12,

            image: require('../../../src/assets/images/Profile2.png'),
            status:'friends',
            title:'Suggested'


        }
        ,{
            id:5,
            name:"FullName",
            username:'@Username',
            mutualFriends:12,

            image: require('../../../src/assets/images/avatar/Avatar4.png'),
            status:'friends',
            title:'Suggested'


        },
        {
            id:6,
            name:"Ronald C",
            username:'@Username',
            image: require('../../../src/assets/images/avatar/Avatar3.png'),
            mutualFriends:12,
            status:'friends',
            title:'Suggested'
        },
        {
            id:7,
            name:"Cristofer Nolan ",
            username:'@Username',
            image: require('../../../src/assets/images/avatar/Avatar5.png'),
            mutualFriends:12,
            status:'friends',
            title:'Suggested'


        },
        {
            id:8,
            name:"Rayn howard",
            username:'@Username',
            image: require('../../../src/assets/images/avatar/Avatar1.png'),
            mutualFriends:12,
            status:'friends',
            title:'Suggested'


        },{
            id:9,
            name:"FullName",
            username:'@Username',
            mutualFriends:12,

            image: require('../../../src/assets/images/Profile2.png'),
            status:'friends',
            title:'Suggested'


        }
        ,{
            id:10,
            name:"FullName",
            username:'@Username',
            mutualFriends:12,

            image: require('../../../src/assets/images/avatar/Avatar4.png'),
            status:'friends',
            title:'Suggested'


        }
       
    ]
    const RequestedFriendData=[
        {
            id:1,
            name:"Ronald C",
            username:'@Username',
            image: require('../../../src/assets/images/avatar/Avatar3.png'),
            mutualFriends:12,
            status:'request',
            title:'Accept'
        },
        {
            id:2,
            name:"Cristofer Nolan ",
            username:'@Username',
            image: require('../../../src/assets/images/avatar/Avatar5.png'),
            mutualFriends:12,
             status:'request',
            title:'Accept'


        },
        {
            id:3,
            name:"Rayn howard",
            username:'@Username',
            image: require('../../../src/assets/images/avatar/Avatar1.png'),
            mutualFriends:12,
             status:'request',
            title:'Accept'


        },{
            id:4,
            name:"FullName",
            username:'@Username',
            mutualFriends:12,

            image: require('../../../src/assets/images/Profile2.png'),
             status:'request',
            title:'Accept'


        }
       
    ]
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
        if (selectedTab === 'Suggestions') {
          setFilteredData(suggestedFriendData);
          setSelectedTitle("People you may know")
        } else if (selectedTab === 'Friends') {
          setFilteredData(friendData);
          setSelectedTitle("Friends (50)")

        } else if (selectedTab === 'Requests') {
          setFilteredData(RequestedFriendData);
          setSelectedTitle("Friend Request (4)")

        }
    }, [selectedTab]);



    {
        return (
            <SafeAreaView style={styles.safeArea}>
                <KeyboardAvoidingView >
                    <ScrollView
                                            showsVerticalScrollIndicator={false}
>
                    <Header title={"Friends"} />
                    <SearchInput
                        iconSource={require('../../../src/assets/images/searchTabIcon.png')} // Replace with your icon path
                        placeholder="Add or search friends"
                        value={searchText}
                        onChangeText={setSearchText}
                    />
                    <HomeTab data={TabData} onTabSelect={setSelectedTab} />
                    {/* <View style={{ height: '15%', width: '90%', alignSelf: 'center', justifyContent: 'center' }}>
                        <Text style={styles.titleText}>People you may know</Text>
                    </View> */}
                    <View style={{}}>
                    <FriendSuggestions data={filteredData} title={selectedTitle}/>

                    </View>



                    </ScrollView>
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
    friendImage: {

        height: RFPercentage(2),
        width: RFPercentage(2.25),
        alignSelf: 'flex-end'
    },
    addButton: {
        width: '10%'
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