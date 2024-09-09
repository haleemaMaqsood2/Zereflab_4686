import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, Share } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from "react-native-responsive-fontsize";
import { color } from '../../../src/styles/color';
import { font } from '../../../src/styles/font';

const AddFriendList1 = ({ data, inviteFriends }) => {
    const [friendData, setFriendData] = useState(data);

    // Combine the data and inviteFriends arrays with a type property
    const combinedData = [
        { id: 'friendsHeader', type: 'header', title: ' Add Friends' }, // Add Friends title before data
        ...friendData.map(item => ({ ...item, type: 'data' })),
        { id: 'footer', type: 'footer' },
        ...inviteFriends.map(item => ({ ...item, type: 'inviteFriends' })),
    ];

    const handleAddFriend = (itemId) => {
        // Update the status of the clicked friend
        console.log(">>>>>>", itemId.status)
        const updatedData = friendData.map(item =>
            item.id === itemId
                ? { ...item, status: item.status === 'Add' ? 'REQUESTED' : 'Add' }
                : item
        );
        setFriendData(updatedData); // Update the state
    };
    const handleInvite = async () => {
        try {
            const result = await Share.share({
                message: 'Invite your friends to join this awesome platform!',
                url: 'https://your-invite-link.com',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    console.log('Shared with activity type:', result.activityType);
                } else {
                    console.log('Shared successfully!');
                }
            } else if (result.action === Share.dismissedAction) {
                console.log('Share dismissed');
            }
        } catch (error) {
            alert(error.message);
        }
    };
    const renderItem = ({ item }) => {
        if (item.type === 'header') {
            return (
                <Text style={styles.titleText1}>{item.title}</Text>
            );
        } else if (item.type === 'data') {
            return (
                <View style={styles.friendContainer1}>
                    <Image source={item.image} style={styles.image} />
                    <View style={styles.infoContainer}>
                        <Text style={styles.nameText}>{item.name}</Text>
                        <Text style={styles.usernameText}>{item.username}</Text>
                    </View>
                    {item.status == "Add" ?
                        <TouchableOpacity
                            onPress={() => handleAddFriend(item.id)} // Update the status when clicked

                            style={styles.addButton}>
                            <Image source={require('../../../src/assets/images/addIcon1x4.png')} style={styles.addIcon} />
                            {/* <Text style={styles.addText}>Add</Text> */}
                            <Text style={styles.addText}>{item.status}</Text>

                        </TouchableOpacity>
                        :
                        <TouchableOpacity
                            onPress={() => handleAddFriend(item.id)} // Update the status when clicked

                            style={styles.addButton1}>
                            <Image source={require('../../../src/assets/images/addIcon1x4.png')} style={styles.addIcon} />
                            {/* <Text style={styles.addText}>Add</Text> */}
                            <Text style={styles.addText}>{item.status}</Text>

                        </TouchableOpacity>
                    }
                </View>
            );
        } else if (item.type === 'inviteFriends') {
            return (
                <View style={styles.friendContainer}>
                    <Image source={item.image} style={styles.image} />
                    <View style={styles.infoContainer}>
                        <Text style={styles.nameText}>{item.name}</Text>
                    </View>
                    <TouchableOpacity style={styles.addButton1} onPress={handleInvite}>
                        <Image source={require('../../../src/assets/images/addIcon1x4.png')} style={styles.addIcon} />
                        <Text style={styles.addText}>{item.status}</Text>
                    </TouchableOpacity>
                </View>
            );
        } else if (item.type === 'footer') {
            return (
                <Text style={styles.titleText}>Invite Friends</Text>
            );
        }
        // else if (item.type === 'header') {
        //     return (
        //         <Text style={styles.titleText}>Add Friends</Text>
        //     );
        // }
    };

    return (
        <View style={styles.container}>
            {/* <Text style={styles.titleText}>Add Friends</Text> */}
            <FlatList
                data={combinedData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.list}
                showsVerticalScrollIndicator={false}  // Hide vertical scrollbar
                showsHorizontalScrollIndicator={false} // Hide horizontal scrollbar
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: hp('90%'),
        width: wp('95%'), // 90% of the screen width
        alignSelf: 'center',
    },
    titleText: {
        fontSize: 17,
        fontWeight: '700',
        fontFamily: font.Regular,
        color: color.whiteColor,
        marginBottom: hp('2%'),
        // marginTop:'3%'

    },
    titleText1: {
        fontSize: 17,
        fontWeight: '700',
        fontFamily: font.Regular,
        color: color.whiteColor,
        marginBottom: hp('2%'),
        // marginTop: hp('2%'),
        // alignSelf: 'center'
    },
    list: {
        // marginTop: hp('1%'),
    },
    friendContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: '3%',
        borderBottomColor: color.placeholderColor,
    },
    friendContainer1: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: '3%',
        borderBottomColor: color.placeholderColor,
    },
    image: {
        width: RFPercentage(5.5),
        height: RFPercentage(5.5),
        borderRadius: RFPercentage(2),
    },
    infoContainer: {
        marginLeft: wp('3%'),
        flex: 1,
        // backgroundColor:'red'
    },
    nameText: {
        fontSize: 15,
        fontWeight: '600',
        fontFamily: font.Regular,
        color: color.whiteColor,
    },
    usernameText: {
        fontSize: 14,
        fontWeight: '400',
        fontFamily: font.Regular,
        color: '#727272',
        paddingTop: hp(0.25)
    },
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // alignSelf:'center',
        backgroundColor: color.onBoardingButton,
        // padding: wp('1.5%'),
        borderRadius: 8,
        // width:wp('27%'),
        // height:hp(4),
        width: 111,
        height: 32,
        // paddingHorizontal: wp('7%'), // Adjust horizontal padding for increased width
    },
    addIcon: {
        width: RFPercentage(1.8),
        height: RFPercentage(1.5),
        marginRight: wp('1%'),
        // backgroundColor:'red'
    },
    addText: {
        color: color.whiteColor,
        fontSize: 14,
        fontWeight: '500',
        // fontWeight: 'medium',
        fontFamily: font.Regular,
        // backgroundColor:'red'
    },
    addButton1: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#373739',
        padding: wp('1.5%'),
        borderRadius: 8,
        // width:wp('27%'),
        justifyContent: 'center',
        // height:hp(4),
        width: 111,
        height: 32,



        // paddingHorizontal: wp('7%'), // Adjust horizontal padding for increased width
    },
});

export default AddFriendList1;
