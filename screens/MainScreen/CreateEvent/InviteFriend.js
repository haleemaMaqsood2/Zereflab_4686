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



const InviteFriend = ({ navigation }) => {
    //   const navigation = useNavigation();
    const [selectedTab, setSelectedTab] = useState('Suggestions')
    const [filteredData, setFilteredData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [selectedTitle, setSelectedTitle] = useState('');
    const [selectedFriends, setSelectedFriends] = useState([]);


    const suggestedFriendData = [
        {
            id: 1,
            name: "Ronald C",
            username: '@Username',
            image: require('../../../src/assets/images/avatar/Avatar3.png'),
            mutualFriends: 12,
            status: 'Suggested',
            title: 'Add'
        },
        {
            id: 2,
            name: "Cristofer Nolan ",
            username: '@Username',
            image: require('../../../src/assets/images/avatar/Avatar5.png'),
            mutualFriends: 12,
            status: 'Suggested',
            title: 'Add'


        },
        {
            id: 3,
            name: "Rayn howard",
            username: '@Username',
            image: require('../../../src/assets/images/avatar/Avatar1.png'),
            mutualFriends: 12,
            status: 'Suggested',
            title: 'Add'


        }, {
            id: 4,
            name: "FullName",
            username: '@Username',
            mutualFriends: 12,

            image: require('../../../src/assets/images/Profile2.png'),
            status: 'Suggested',
            title: 'Add'


        }

    ]
    const friendData = [
        {
            id: 1,
            name: "Ronald C",
            username: '@Username',
            image: require('../../../src/assets/images/avatar/Avatar3.png'),
            mutualFriends: 12,
            status: 'friends',
            title: 'Suggested'
        },
        {
            id: 2,
            name: "Cristofer Nolan ",
            username: '@Username',
            image: require('../../../src/assets/images/avatar/Avatar5.png'),
            mutualFriends: 12,
            status: 'friends',
            title: 'Suggested'


        },
        {
            id: 3,
            name: "Rayn howard",
            username: '@Username',
            image: require('../../../src/assets/images/avatar/Avatar1.png'),
            mutualFriends: 12,
            status: 'friends',
            title: 'Suggested'


        }, {
            id: 4,
            name: "FullName",
            username: '@Username',
            mutualFriends: 12,

            image: require('../../../src/assets/images/Profile2.png'),
            status: 'friends',
            title: 'Suggested'


        }
        , {
            id: 5,
            name: "FullName",
            username: '@Username',
            mutualFriends: 12,

            image: require('../../../src/assets/images/avatar/Avatar4.png'),
            status: 'friends',
            title: 'Suggested'


        },
        {
            id: 6,
            name: "Ronald C",
            username: '@Username',
            image: require('../../../src/assets/images/avatar/Avatar3.png'),
            mutualFriends: 12,
            status: 'friends',
            title: 'Suggested'
        },
        {
            id: 7,
            name: "Cristofer Nolan ",
            username: '@Username',
            image: require('../../../src/assets/images/avatar/Avatar5.png'),
            mutualFriends: 12,
            status: 'friends',
            title: 'Suggested'


        },
        {
            id: 8,
            name: "Rayn howard",
            username: '@Username',
            image: require('../../../src/assets/images/avatar/Avatar1.png'),
            mutualFriends: 12,
            status: 'friends',
            title: 'Suggested'


        }, {
            id: 9,
            name: "FullName",
            username: '@Username',
            mutualFriends: 12,

            image: require('../../../src/assets/images/Profile2.png'),
            status: 'friends',
            title: 'Suggested'


        }
        , {
            id: 10,
            name: "FullName",
            username: '@Username',
            mutualFriends: 12,

            image: require('../../../src/assets/images/avatar/Avatar4.png'),
            status: 'friends',
            title: 'Suggested'


        }

    ]
    const RequestedFriendData = [
        {
            id: 1,
            name: "Ronald C",
            username: '@Username',
            image: require('../../../src/assets/images/avatar/Avatar3.png'),
            mutualFriends: 12,
            status: 'request',
            title: 'Accept'
        },
        {
            id: 2,
            name: "Cristofer Nolan ",
            username: '@Username',
            image: require('../../../src/assets/images/avatar/Avatar5.png'),
            mutualFriends: 12,
            status: 'request',
            title: 'Accept'


        },
        {
            id: 3,
            name: "Rayn howard",
            username: '@Username',
            image: require('../../../src/assets/images/avatar/Avatar1.png'),
            mutualFriends: 12,
            status: 'request',
            title: 'Accept'


        }, {
            id: 4,
            name: "FullName",
            username: '@Username',
            mutualFriends: 12,

            image: require('../../../src/assets/images/Profile2.png'),
            status: 'request',
            title: 'Accept'


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
    const handleSelectFriend = (id) => {
        if (selectedFriends.includes(id)) {
            setSelectedFriends(selectedFriends.filter(friendId => friendId !== id));
        } else {
            setSelectedFriends([...selectedFriends, id]);
        }
    };

    const renderFriendItem = ({ item }) => {
        const isSelected = selectedFriends.includes(item.id);
        return (
            <TouchableOpacity onPress={() => handleSelectFriend(item.id)} style={styles.friendItem}>
                <Image source={item.image} style={styles.friendImage} />
                <View style={styles.infoContainer}>
                    <Text style={styles.descriptionText}>{item.name}</Text>
                </View>
                <View style={{width:wp(5),height:hp(2.5),borderWidth:1,borderColor:color.whiteColor,marginRight:hp(2)}}>
                {isSelected && (
                    <Image source={require('../../../src/assets/images/checkedIcon.png')}resizeMode='contain' style={styles.checkIcon} />
                )}
                </View>
            </TouchableOpacity>
        );
    };

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
                    <Header title={"Invite Friends"} />
                    <View style={styles.inputContainer}>
                        {/* Icon */}
                        <Image
                            source={require('../../../src/assets/images/copyLinkIcon.png')}
                            style={styles.icon}
                            resizeMode='Contain'
                        />
                        {/* TextInput */}
                        <TextInput
                            style={styles.copyLinkText}
                            placeholderTextColor={color.whiteColor}
                            editable={false} // To make the input read-only
                            placeholder="Copy invitation link"
                        />
                    </View>
                    <SearchInput
                        iconSource={require('../../../src/assets/images/searchTabIcon.png')} // Replace with your icon path
                        placeholder="Search friends"
                        value={searchText}
                        onChangeText={setSearchText}
                    />
                    {/* <HomeTab data={TabData} onTabSelect={setSelectedTab} /> */}
                    <View style={styles.titleHeader}>
                        <Text style={styles.titleText}>Suggested</Text>
                        <Text style={styles.selectAllText}>Select All</Text>

                    </View>
                    <FlatList
                    data={friendData}
                    renderItem={renderFriendItem}
                    keyExtractor={item => item.id.toString()}
                    extraData={selectedFriends}
                />
                   <View style={styles.SendInviteContainer}>
                            <TouchableOpacity 
                            // onPress={moveNext} 
                            style={styles.touchableArea}>
                                <Text style={styles.conTinueText}>Send Invitation</Text>
                            </TouchableOpacity>
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
    titleHeader: {
        height: 40,
        width: '95%',
        alignSelf: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // position: 'relative',
        backgroundColor: color.inputFieldColor,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: color.whiteWithTenPercencentOpacity,
        marginTop: '2%',
        alignSelf: 'center',
        width: wp(95),
        paddingLeft: wp('5%'),


    },
    SendInviteContainer:{
        backgroundColor: color.onBoardingButton,
        // height:hp('7%'),
        height: hp(6),
        // width:363,

        width: wp('92%'),
        marginTop: hp(23),
        textAlign: 'center',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        // top: hp('60%'),//65 on android
        top:Platform.OS === 'ios' ? hp('54%') :hp('65%'),
        left:hp('2%')
    },
    touchableArea: {
        width: '100%', // Make it the full width of the container
        height: '100%', // Make it the full height of the container
        alignItems: 'center', // Center the text
        justifyContent: 'center', // Center the text
      },
    icon: {
        width: RFPercentage(1.6), // Adjust size as needed
        height: RFPercentage(1.7),
        alignItems: 'center',
        // top:1,
        // marginLeft: 10, // Adjust as needed
        tintColor: color.whiteColor, // Optional: Change icon color

    },
    conTinueText: {
        alignItems: 'center',
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'inter'

    },
    copyLinkText: {
        backgroundColor: color.inputFieldColor,

        paddingLeft: 12, // Add padding to make space for the icon
        color: color.whiteColor,
        fontSize: 13,
        fontWeight: '400',
        paddingRight: 100,
        // paddingLeft: wp(5),
        fontFamily: 'inter',
        height: hp(5.5),
        alignItems: 'center'
    },
    titleText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '700',
        fontFamily: 'inter',
    },
    selectAllText:{
        color: color.privacyPolicyColor,
        fontSize: 12,
        fontWeight: '500',
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
    friendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        // paddingVertical: hp('2%'),
        height:hp(6),
        // borderBottomWidth: 1,
        marginBottom:'3.5%',
        borderBottomColor: color.whiteWithTenPercencentOpacity,
        // paddingHorizontal: wp('5%'),
    },
    friendImage: {
        width: RFPercentage(6),
        height: RFPercentage(6),
        marginRight: wp('5%'),
        marginLeft: wp('3%'),

    },
    infoContainer: {
        flex: 1,
    },
    descriptionText: {
        fontSize: 15,
        fontFamily: 'Inter',
        fontWeight: '600',
        color: color.whiteColor,
    },
    description2Text: {
        fontSize: 12,
        fontFamily: 'Inter',
        fontWeight: '400',
        color: color.whiteColor,
    },
    checkIcon: {
        width: RFPercentage(2.1),
        height: RFPercentage(2.3),
        tintColor: color.whiteColor,
        backgroundColor:color.onBoardingButton
    },

});
export default InviteFriend;