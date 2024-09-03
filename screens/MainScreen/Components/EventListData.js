import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../../src/styles/color';
import { useNavigation } from '@react-navigation/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const EventListData = ({ data }) => {
    const navigation = useNavigation();
    const [isGoing, setIsGoing] = useState(false); // State to manage button click
    const [selectedItemIds, setSelectedItemIds] = useState({}); // State to track the selected items with a toggle

    function onPressItem() {
        navigation.navigate('EventDetails')


    }
    const handleGoingPress = (id) => {
        setSelectedItemIds((prevSelectedItemIds) => ({
            ...prevSelectedItemIds,
            [id]: !prevSelectedItemIds[id], // Toggle the selected state of the item
        }));
    };


    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <View style={styles.flatlistContainer}>
                <Image source={item.userProfileIcon} style={styles.profileIcon} />
                <Text style={styles.username}>{item.username}</Text>
            </View>
            <View style={styles.card}>
                <TouchableOpacity onPress={onPressItem}>
                    <View style={styles.imageContainer}>
                        <Image source={item.partyImage} style={styles.image} resizeMode='contain'/>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{item.Title}</Text>
                            <Text style={styles.footerTime}>{item.time}</Text>
                           
                        </View>
                        <View style={styles.OtherContainer}>
                                <Image source={require('../../../src/assets/images/otherUser1x4.png')} style={styles.otheruserImage}resizeMode='contain'/>
                                <Text style={styles.otherUserText}>{item.other} Others</Text>
                                <Image source={require('../../../src/assets/images/otherFriends1x4.png')} style={styles.otheruserImage1}resizeMode='contain'/>
                                <Text style={styles.otherUserText1}>{item.friends} Friends</Text>
                            </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.bottom}>
                {/* <TouchableOpacity
                        style={[styles.goingButton, isGoing && styles.goingButtonActive]} // Conditional styling
                        onPress={handleGoingPress}
                    >
                        <Text style={[styles.goingText, isGoing && styles.goingTextActive]}>Going</Text>
                    </TouchableOpacity> */}
                   <TouchableOpacity
                        style={[
                            styles.goingButton,
                            selectedItemIds[item.id] ? styles.goingButtonActive : {}, // Change button color if item is selected
                        ]}
                        onPress={() => handleGoingPress(item.id)}
                    >
                        <Text
                            style={[
                                styles.goingText,
                                selectedItemIds[item.id] ? styles.goingTextActive : {}, // Change text color if item is selected
                            ]}
                        >
                            Going
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.saveButton}>
                        <Image source={require('../../../src/assets/images/share1x4.png')} 
                        style={styles.shareImage}
                        resizeMode='contain'
/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={<View style={{ height: hp(10) }} />} // Adding space at the bottom
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: color.backgroundColor,
    },
    itemContainer: {
        width: '100%',
        paddingTop:2,
        // height:'50%',
        // marginBottom: hp(2),
                // backgroundColor: 'red',

    },
    flatlistContainer: {
        // backgroundColor:'red',
        backgroundColor: color.backgroundColor,
        flexDirection: 'row',
        paddingLeft: hp(1.5),
        marginTop: hp(1.7),
        // marginBottom:10,
    },
    listContent: {
        paddingBottom: hp(10), // Ensure there is enough space at the bottom
    },
    otheruserImage:{
        height:hp(1.7),
        width:wp(5),
        // paddingLeft:'10%'
    },
    
    otheruserImage1:{
        height:hp(2.0),
        width:wp(10)
    },
    card: {
        borderRadius: 10,
        // height:'40%',
        // backgroundColor:'red',
        // marginTop: hp('1%'),
        elevation: 3, // for Android shadow
        shadowColor: '#000', // for iOS shadow
        shadowOffset: { width: 0, height: 2}, // for iOS shadow
        shadowOpacity: 0.2, // for iOS shadow
        shadowRadius: 3, // for iOS shadow
     
    },
    profileIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: wp('3%'),
    },
    shareImage:{
        height: hp(2.0),
        width:RFPercentage(2)
        // width: wp(13),  
      },
    username: {
        fontSize: 12,
        fontWeight: '700',
        color: color.whiteColor,
        alignSelf: 'center',
        justifyContent: 'center',
        fontFamily:'Inter'
    },
    imageContainer: {
        position: 'relative',
        width: '100%',
        height: hp('38%') // Adjust this height as needed
    },
    image: {
        width: '100%',
        height: '100%',
        // borderRadius: 10,
    },
    titleContainer: {
        position: 'absolute',
        bottom: hp(2.5), // Adjust this value to position the text
        left: 10, // Adjust this value to position the text
        padding: wp(1.5),
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        fontFamily: 'Inter',
        color: color.whiteColor,
        marginBottom: hp(0.75)
    },
    footerTime: {
        fontSize: 14,
        fontWeight: '600',
        fontFamily: 'Inter',
        color: color.whiteColor,
        marginBottom: hp(1)
    },
    otherUserText: {
        fontSize: 10,
        fontWeight: '500',
        fontFamily: 'Inter',
        color: color.whiteColor,
        // paddingLeft: wp(1.2),
        paddingRight: wp(2)
    },
    otherUserText1: {
        fontSize: 10,
        fontWeight: '500',
        fontFamily: 'Inter',
        color: color.whiteColor,
        paddingLeft: wp(1.2),
        // paddingRight: wp(2)
    },
    OtherContainer: {
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'pink',
        position: 'absolute',
        bottom: hp(1), // Adjust this value to position the text
        left: 10, // Adjust this value to position the text
        // padding: wp(1.5),
        // justifyContent:'flex-start'
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: wp(95),
        alignSelf: 'center'
    },
    goingButton: {
        backgroundColor: color.onBoardingButton,
        width: wp(80),
        height: hp(4.5),//6
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    goingText: {
        color: color.whiteFontColor,
        fontWeight: '500',
        fontSize: 14,
        fontFamily: 'Inter',
        alignSelf: 'center',
        lineHeight: 16.94,
    },
    saveButton: {
        backgroundColor: color.shareButtonColor,
        height: hp(4.5),//6
        width: wp(13),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: color.WhiteWithThirtypercentOpacity,
        borderRadius: 10,
    },
    goingButtonActive: {
        backgroundColor: color.whiteColor, // Change to white when active
    },
    goingTextActive: {
        color: color.blackColor, // Change to black when active
        fontWeight: '500',
        fontSize: 14,
        fontFamily: 'Inter',
        alignSelf: 'center',
        lineHeight: 16.94,
    },
});

export default EventListData;
