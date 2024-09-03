// UserName.js
import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../../../src/styles/color';
// import { color } from '../../../src/styles/color';


const UserNamePost = ({ data }) => {
    const formattedDate = data?.date ? new Date(data.date).toLocaleString() : 'Date not available';

    return (
        <View style={styles.secondHalf}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.footerTime}>{formattedDate}</Text>
        </View>
        <View style={styles.locationContainer}>
            <Image source={require('../../../../src/assets/images/Location2.png')} resizeMode='contain' style={styles.locationIconStyle} />
            <Text style={styles.locationText}>{data.location}</Text>
        </View>
        <View style={styles.flatlistContainer}>
            <Image source={require('../../../../src/assets/images/partyUser1x4.png')} style={styles.profileIcon} />
            <Text style={styles.username}>msu-fiji</Text>
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
        marginTop: hp(2)
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

export default UserNamePost;
