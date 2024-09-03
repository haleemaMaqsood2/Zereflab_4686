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



const Notification = ({ navigation }) => {
    //   const navigation = useNavigation();
    const todayData = [
        { title: ' Today' }, // Section title

        {
            id: 1,
            profileImage: require('../../../src/assets/images/NotificationUser.png'),
            userName: "isayef",
            hostName: "<b>isayef </b> is going to <b>Harpers Half Off Wednesdays</b>.",
            time: 'Just now',
            day: 'today',
            notificationIcon: require('../../../src/assets/images/Notification.png'),
            userTitle: 'NotFriend'
        },
        {
            id: 2,
            profileImage: [
                require('../../../src/assets/images/NotificationUser.png'),
                require('../../../src/assets/images/NotificationUser.png'),

            ],
            userName: "isayef",
            hostName: "<b>isayef </b> is going to <b>Harpers Half Off Wednesdays</b>.",
            time: '5m',
            day: 'today',
            notificationIcon: require('../../../src/assets/images/Notification.png'),
            userTitle: 'NotFriend'



        },
        {
            id: 3,
            profileImage: require('../../../src/assets/images/NotificationUser.png'),
            userName: "isayef",
            hostName: "<b>isayef </b> is going to <b>Harpers Half Off Wednesdays</b>.",
            time: '5m',
            day: 'today',
            notificationIcon: require('../../../src/assets/images/Notification.png'),
            userTitle: 'NotFriend'



        },
        {
            id: 4,
            profileImage: require('../../../src/assets/images/NotificationUser.png'),
            userName: "isayef",
            hostName: "<b>isayef </b> is going to <b>Harpers Half Off Wednesdays</b>.",
            time: '5m',
            day: 'today',
            notificationIcon: require('../../../src/assets/images/Notification.png'),
            userTitle: 'NotFriend'



        },
        {
            id: 5,
            profileImage: require('../../../src/assets/images/Profile2.png'),
            userName: "isayef",
            hostName: "<b>isayef </b> is going to <b>Harpers Half Off Wednesdays</b>.",
            time: '5m',
            day: 'today',
            notificationIcon: require('../../../src/assets/images/LeftArrow1x4.png'),
            userTitle: 'Friend'



        },
        { title: 'Yesterday' }, // Section title

        {
            id: 6,
            profileImage: require('../../../src/assets/images/NotificationUser.png'),
            userName: "isayef",
            hostName: "<b>isayef </b> is going to <b>Harpers Half Off Wednesdays</b>.",
            time: 'Just now',
            day: 'yesterday',
            notificationIcon: require('../../../src/assets/images/Notification.png'),
            userTitle: 'NotFriend'



        },
        {
            id: 7,
            profileImage: require('../../../src/assets/images/NotificationUser.png'),
            userName: "isayef",
            hostName: "<b>isayef </b> is going to <b>Harpers Half Off Wednesdays</b>.",
            time: '5m',
            day: 'yesterday',
            notificationIcon: require('../../../src/assets/images/Notification.png'),
            userTitle: 'NotFriend'



        },
        {
            id: 8,
            profileImage: require('../../../src/assets/images/NotificationUser.png'),
            userName: "isayef",
            hostName: "<b>isayef </b> is going to <b>Harpers Half Off Wednesdays</b>.",
            time: 5,
            time: '5m',
            notificationIcon: require('../../../src/assets/images/Notification.png'),
            userTitle: 'NotFriend'



        },
        {
            id: 9,
            profileImage: require('../../../src/assets/images/NotificationUser.png'),
            userName: "isayef",
            hostName: "<b>isayef </b> is going to <b>Harpers Half Off Wednesdays</b>.",
            time: 'Just now',
            day: 'yesterday',
            notificationIcon: require('../../../src/assets/images/Notification.png'),
            userTitle: 'NotFriend'



        },
        {
            id: 10,
            profileImage: require('../../../src/assets/images/NotificationUser.png'),
            userName: "isayef",
            hostName: "<b>isayef </b> is going to <b>Harpers Half Off Wednesdays</b>.",
            time: '5m',
            day: 'yesterday',
            notificationIcon: require('../../../src/assets/images/Notification.png'),
            userTitle: 'NotFriend'



        },
        {
            id: 11,
            profileImage: require('../../../src/assets/images/NotificationUser.png'),
            userName: "isayef",
            hostName: "<b>isayef </b> is going to <b>Harpers Half Off Wednesdays</b>.",
            time: 5,
            time: '5m',
            notificationIcon: require('../../../src/assets/images/Notification.png'),
            userTitle: 'NotFriend'



        },


    ]
    const renderTextWithBold = (text) => {
        const parts = text.split(/(<b>.*?<\/b>)/g); // Split text at <b>...</b> tags
        return parts.map((part, index) => {
            if (part.startsWith('<b>') && part.endsWith('</b>')) {
                // If the part is within <b>...</b> tags, render it in bold
                return <Text key={index} style={{ fontWeight: 'bold' }}>{part.slice(3, -4)}</Text>;
            }
            return part; // Otherwise, render it as normal text
        });
    };
    const renderProfileImages = (images) => {
        if (Array.isArray(images)) {
            return (
                <View style={styles.profileImageContainer}>
                    {images.map((image, index) => (
                      <Image
                      key={index}
                      source={image}
                      style={[
                          styles.image,
                          index === 1 ? styles.loweredImage : null,  // Only apply lower position to the second image
                      ]}
                  />

                        ))}
                </View>
            );
        } else {
            return <Image source={images} style={styles.image} />;
        }
    };
    const renderItem = ({ item }) => {
        // Check if the item is a section header
        if (item.title) {
            return (
                <View style={styles.sectionHeader}>
                    <Text style={styles.titleText}>{item.title}</Text>
                </View>
            );
        }

        // Otherwise, render the regular item
        return (
            <View style={styles.listData}>
                <View style={styles.friendContainer}>
                    {/* <Image source={item.profileImage} style={styles.image} /> */}
                    {renderProfileImages(item.profileImage)}

                    <View style={styles.infoContainer}>
                        <Text style={styles.descriptionText}>
                            {/* {item.userName} */}
                            {/* <Text style={styles.description2Text}> is going to </Text> */}
                            {renderTextWithBold(item.hostName)}
                            <Text style={styles.timestyle}> {item.time}</Text>
                        </Text>

                    </View>
                    <TouchableOpacity style={styles.addButton}>
                        <Image source={item.notificationIcon} resizeMethod='contain' style={item.userTitle == 'Friend' ? styles.friendImage : styles.image} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };




    {
        return (
            <SafeAreaView style={styles.safeArea}>
                <KeyboardAvoidingView >
                    <Header title={"Notification"} />
                    {/* <View style={styles.secondHeader}>
                    <Text style={styles.titleText}>Today</Text>
                    </View>
                    <View style={styles.secondHeader}>
                    <Text style={styles.titleText}>Yesterday</Text>
                    </View> */}
                    <FlatList
                        data={todayData}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />



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
    // profileImageContainer: {
    //     flexDirection: 'column',
    //     position:'absolute',
    //     height:30,
    // },
    // multiImage: {
    //     // marginRight: 5, // Add spacing between multiple images
    // },
    profileImageContainer: {
        flexDirection: 'row',
        position: 'relative', // Allows for overlapping images
        width: 60, // Adjust width to fit both images with overlap
    },
    overlappingImage: {
        position: 'absolute', // Positions images on top of each other
        borderWidth: 2, // Optional: adds a border around images
        borderColor: 'white', // Optional: border color to highlight overlap
        borderRadius: 22.5, // Adjust based on image size
    },
    image: {
        height: 45,
        width: 45,
        borderRadius: 22.5, // Makes images circular; adjust as needed
    },
    loweredImage: {
        position: 'absolute', // Positions the second image absolutely
        top: 15, // Adjust this value to control how much lower the second image is
        left: 15, // Adjust this value to create overlap if needed; set to 0 if no horizontal overlap is desired
    },
    image1: {
        height: 45,
        width: 45,
        borderRadius: 22.5, // Makes images circular; adjust as needed
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
        // width:'10%'
        width: 45,
        height: 46,
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
        height: 45,
        width: 45,
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
        fontWeight: '400',
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
    // safeArea: {
    //     flex: 1,
    //     backgroundColor: color.backgroundColor,

    // },

    // secondHeader: {
    //     width: wp('95%'),
    //     alignSelf: 'center',
    //     marginTop: hp('1%'),
    //     justifyContent: 'center',
    //     // alignItems: 'center',
    //     // backgroundColor:'red'
    // },
    // titleText: {
    //     color: '#FFFFFF',
    //     fontSize: 15,
    //     fontWeight: 'bold',

    //     fontFamily: 'inter'
    //     // font:'urbanist'
    // },
    // touchableArea: {
    //     width: '100%', // Make it the full width of the container
    //     height: '100%', // Make it the full height of the container
    //     alignItems: 'center', // Center the text
    //     justifyContent: 'center', // Center the text
    //   },



    // ButtonContainer: {
    //     backgroundColor: color.onBoardingButton,
    //     // height:hp('7%'),
    //     height: 50,
    //     // width:363,

    //     width: wp('92%'),
    //     marginTop: hp(25),
    //     textAlign: 'center',
    //     borderRadius: 10,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     position: 'absolute',
    //     // top: hp('60%'),//65 on android
    //     top:Platform.OS === 'ios' ? hp('60%') :hp('65%'),
    //     left:hp('2%')




    // },
    // conTinueText: {
    //     alignItems: 'center',
    //     color: '#FFFFFF',
    //     fontSize: 16,
    //     fontWeight: '700',
    //     fontFamily: 'inter'

    // }

});
export default Notification;