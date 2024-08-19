import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    ScrollView,
    ImageBackground
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../src/styles/color';
import { useNavigation } from '@react-navigation/native';
import UserName from './Components/userName';
import DescriptionSection from './Components/DescriptionSection';



const EventDetails = () => {
    const today = 'Today - 12:00 PM';
    const navigation = useNavigation();
    function onPressCard() {
        // navigation.navigate('Attendees')
    }

    function backPress() {
        navigation.goBack();
    }
    const data = [
        {
            id: 1,
            username: 'msu-fiji',
            userProfileIcon: require('../../src/assets/images/partyUser1x4.png'),
            Title: 'FIJI DARTY',
            partyImage: require('../../src/assets/images/BirthdayListScreen.png'),
            partyMainImage: require('../../src/assets/images/eventDetail.png'),
            description: 'Lorem ipsum dolor sit amet, consectetur elit adipiscing elit. Venenatis pulvinar a amet in, suspendisse vitae, posuere eu tortor et. Und commodo, fermentum, mauris leo eget..',
            time: today,
            other: 130,
            friends: 12,
            Location: 'Phi Gamma Delta House'
        },
    ];

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView>
                <ImageBackground source={require('../../src/assets/images/EventDetailBlurr.png')} style={styles.mainImage} resizeMode='stretch'>
                    <View style={styles.overlay}>
                        <View style={styles.topIconsContainer}>
                            <TouchableOpacity style={styles.backButton} onPress={backPress}>
                                <Image source={require('../../src/assets/images/EventBackArrowImage1x4.png')} style={styles.iconImage} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.shareButton}>
                                <Image source={require('../../src/assets/images/EventBackShareImage1x4.png')} style={styles.iconImage} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.mainImageContainer}>
                            <Image source={data[0].partyMainImage} style={styles.mainImage} resizeMode='stretch' />
                        </View>


                        <UserName data={data[0]} />

                    </View>
                </ImageBackground>
                {/* DEscription scection */}


                <DescriptionSection description={data[0].description} />

                {/* Friend scection */}
                <TouchableOpacity onPress={onPressCard} style={styles.FriendSection}>
                    <Image source={require('../../src/assets/images/EventDetailFriendImages1x4.png')} style={styles.friendImage} resizeMode='contain' />
                    <Text style={styles.friendCountText}>35 friends and 100 others going</Text>
                    <Text style={styles.tapText}>Tap to see who's going</Text>
                </TouchableOpacity>
                {/* button     zzz scection */}

                <View style={styles.GoingContainer}>
                    <TouchableOpacity style={styles.continueButton}>
                        <Text style={styles.goingText}>Going</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: color.backgroundColor,
    },
    mainImageContainer: {
        height: hp('55%'),
        width: wp('100%'),
        backgroundColor: color.backgroundColor,
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
    },
    topIconsContainer: {
        position: 'absolute',
        top: hp('3%'),
        left: wp('3%'),
        right: wp('3%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: wp('94%'),
        zIndex: 1,
    },
    backButton: {
        position: 'absolute',
        left: 0,
    },
    shareButton: {
        position: 'absolute',
        right: 0,
    },
    iconImage: {
        width: wp('10%'),
        height: wp('10%'),
    },
    mainImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: color.backgroundColor,
    },
    secondHalf: {
        flex: 1,
        marginTop: '3%'
        // backgroundColor: 'rgba(0, 0, 0, 0.9)',
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
        paddingLeft: hp(1.5),
        marginTop: hp(3)
    },
    profileIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: wp('3%'),
    },
    titleContainer: {
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
        fontSize: 13,
        fontWeight: '600',
        fontFamily: 'Inter',
        color: color.whiteColor,
        // marginBottom: hp(1)
    },
    locationContainer: {
        flexDirection: 'row',
        left: 13,
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
    continueButton: {
        backgroundColor: color.onBoardingButton,
        borderRadius: 10,
        width: wp('94%'),
        justifyContent: 'center',
        height: hp('6%'),
        alignItems: 'center',
        marginBottom: hp('1.5%')
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'Inter'
    },
    descriptionText: {
        color: 'white',
        fontSize: 13,
        fontWeight: '300',
        fontFamily: 'Inter',
        lineHeight: 19.5,
    },
    descriptionContainer: {
        left: 10,
        marginTop: hp(3),
        marginBottom: hp(3)
    },
    goingText: {
        color: color.whiteFontColor,
        fontWeight: '700',
        fontSize: 16,
        fontFamily: 'Inter',
        alignSelf: 'center',
        lineHeight: 19.36,
    },
    GoingContainer: {
        alignSelf: 'center'
    },
    FriendSection: {
        backgroundColor: '#D9D9D91A',
        height: hp(17),
        width: wp('95%'),
        alignSelf: 'center',
        marginBottom: hp(3),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    friendImage: {
        height: hp(5),
        width: wp(80),
        alignSelf: 'center'
    },
    friendCountText: {
        fontSize: 12,
        fontWeight: '700',
        fontFamily: 'inter',
        lineHeight: 14.52,
        color: color.onBoardingButton,
        paddingTop: hp(1.5),
        paddingBottom: hp(1.5)
    },
    tapText: {
        fontFamily: 'inter',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 14.52,
        fontStyle: 'italic',
        color: color.whiteColor,
    }
});

export default EventDetails;
