import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../../src/styles/color';
import { useNavigation } from '@react-navigation/native';

const EventListData = ({ data }) => {
    const navigation = useNavigation();
    function onPressItem() {
        navigation.navigate('EventDetails')

    }
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <View style={styles.flatlistContainer}>
                <Image source={item.userProfileIcon} style={styles.profileIcon} />
                <Text style={styles.username}>{item.username}</Text>
            </View>
            <View style={styles.card}>
                <TouchableOpacity onPress={onPressItem}>
                    <View style={styles.imageContainer}>
                        <Image source={item.partyImage} style={styles.image} />
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{item.Title}</Text>
                            <Text style={styles.footerTime}>{item.time}</Text>
                            <View style={styles.OtherContainer}>
                                <Image source={require('../../../src/assets/images/otherUser.png')} />
                                <Text style={styles.otherUserText}>{item.other} Others</Text>
                                <Image source={require('../../../src/assets/images/otherFriends.png')} />
                                <Text style={styles.otherUserText}>{item.friends} Friends</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.goingButton}>
                        <Text style={styles.goingText}>Going</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.saveButton}>
                        <Image source={require('../../../src/assets/images/shareIcon.png')} />
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
        marginBottom: hp(2),
    },
    flatlistContainer: {
        backgroundColor: color.backgroundColor,
        flexDirection: 'row',
        paddingLeft: hp(1.5),
        marginTop: hp(3)
    },
    listContent: {
        paddingBottom: hp(10), // Ensure there is enough space at the bottom
    },
    card: {
        borderRadius: 10,
        marginTop: hp('1%'),
        elevation: 3, // for Android shadow
        shadowColor: '#000', // for iOS shadow
        shadowOffset: { width: 0, height: 2 }, // for iOS shadow
        shadowOpacity: 0.2, // for iOS shadow
        shadowRadius: 3, // for iOS shadow
    },
    profileIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: wp('3%'),
    },
    username: {
        fontSize: 12,
        fontWeight: '700',
        color: color.whiteColor,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        position: 'relative',
        width: '100%',
        height: hp('40%') // Adjust this height as needed
    },
    image: {
        width: '100%',
        height: '100%',
        // borderRadius: 10,
    },
    titleContainer: {
        position: 'absolute',
        bottom: hp(0.5), // Adjust this value to position the text
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
        paddingLeft: wp(1.2),
        paddingRight: wp(2)
    },
    OtherContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
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
        height: hp(4.5),
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
        height: hp(4.5),
        width: wp(13),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: color.WhiteWithThirtypercentOpacity,
        borderRadius: 10,
    }
});

export default EventListData;
