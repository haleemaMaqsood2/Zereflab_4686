import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from "react-native-responsive-fontsize";
import { color } from '../../../src/styles/color';
import { font } from '../../../src/styles/font';

const AddFriendList1 = ({ data, inviteFriends }) => {
    // Combine the data and inviteFriends arrays with a type property
    const combinedData = [
        ...data.map(item => ({ ...item, type: 'data' })),
        { id: 'footer', type: 'footer' },
        ...inviteFriends.map(item => ({ ...item, type: 'inviteFriends' })),
    ];

    const renderItem = ({ item }) => {
        if (item.type === 'data') {
            return (
                <View style={styles.friendContainer1}>
                    <Image source={item.image} style={styles.image} />
                    <View style={styles.infoContainer}>
                        <Text style={styles.nameText}>{item.name}</Text>
                        <Text style={styles.usernameText}>{item.username}</Text>
                    </View>
                    <TouchableOpacity style={styles.addButton}>
                        <Image source={require('../../../src/assets/images/addIcon1x4.png')} style={styles.addIcon} />
                        <Text style={styles.addText}>Add</Text>
                    </TouchableOpacity>
                </View>
            );
        } else if (item.type === 'inviteFriends') {
            return (
                <View style={styles.friendContainer}>
                    <Image source={item.image} style={styles.image} />
                    <View style={styles.infoContainer}>
                        <Text style={styles.nameText}>{item.name}</Text>
                    </View>
                    <TouchableOpacity style={styles.addButton1}>
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
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Add Friends</Text>
            <FlatList
                data={combinedData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: hp('90%'),
        width: wp('90%'), // 90% of the screen width
        alignSelf: 'center',
    },
    titleText: {
        fontSize: 17,
        fontWeight: '700',
        fontFamily: font.Regular,
        color: color.whiteColor,
        marginBottom: hp('2%'),
    },
    titleText1: {
        fontSize: 17,
        fontWeight: '700',
        fontFamily: font.Regular,
        color: color.whiteColor,
        marginBottom: hp('1%'),
        marginTop: hp('2%'),
        alignSelf: 'center'
    },
    list: {
        marginTop: hp('1%'),
    },
    friendContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: '5%',
        borderBottomColor: color.placeholderColor,
    },
    friendContainer1: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: '5%',
        borderBottomColor: color.placeholderColor,
    },
    image: {
        width: RFPercentage(5),
        height: RFPercentage(5),
        borderRadius: RFPercentage(2),
    },
    infoContainer: {
        marginLeft: wp('3%'),
        flex: 1,
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
    },
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: color.onBoardingButton,
        padding: wp('1.5%'),
        borderRadius: 8,
        paddingHorizontal: wp('7%'), // Adjust horizontal padding for increased width
    },
    addIcon: {
        width: RFPercentage(2),
        height: RFPercentage(2),
        marginRight: wp('2%'),
    },
    addText: {
        color: color.whiteColor,
        fontSize: 14,
        // fontWeight: 'medium',
        fontFamily: font.Regular,
    },
    addButton1: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#373739',
        padding: wp('1.5%'),
        borderRadius: 8,
        paddingHorizontal: wp('6%'), // Adjust horizontal padding for increased width
    },
});

export default AddFriendList1;
