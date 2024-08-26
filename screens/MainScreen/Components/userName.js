// UserName.js
import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../../src/styles/color';

const UserName = ({ data }) => {
    return (
        <View style={styles.secondHalf}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{data.Title}</Text>
            <Text style={styles.footerTime}>{data.time}</Text>
        </View>
        <View style={styles.locationContainer}>
            <Image source={require('../../../src/assets/images/Location2.png')} resizeMode='contain' style={styles.locationIconStyle} />
            <Text style={styles.locationText}>{data.Location}</Text>
        </View>
        <View style={styles.flatlistContainer}>
            <Image source={data.userProfileIcon} style={styles.profileIcon} />
            <Text style={styles.username}>{data.username}</Text>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    secondHalf: {
        flex: 1,
        marginTop:'3%'
    },
    username: {
        fontSize: 12,
        fontWeight: '700',
        color: color.whiteColor,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    flatlistContainer: {
        flexDirection: 'row',
        paddingLeft: hp(1.4),
        marginTop: hp(3)
    },
    profileIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: wp('3%'),
    },
    titleContainer: {
        left: 7, // 10
        padding: wp(1.0),
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        fontFamily: 'Inter',
        color: color.whiteColor,
        marginBottom: hp(0.75)
    },
    footerTime: {
        fontSize: 13,
        fontWeight: '600',
        fontFamily: 'Inter',
        color: color.whiteColor,
    },
    locationContainer: {
        flexDirection: 'row',
        left: 10,
        alignItems: 'center',
    },
    locationIconStyle: {
        height: hp(3),
        width: wp(3),
        paddingRight: wp(3),
    },
    locationText: {
        fontSize: 12,
        fontWeight: '600',
        fontFamily: 'Inter',
        color: color.whiteColor,
        lineHeight: 14.52,
        textDecorationLine: 'underline',
        paddingLeft: '1%',
    },
});

export default UserName;
