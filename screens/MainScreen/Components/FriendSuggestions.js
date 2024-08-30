import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from "react-native-responsive-fontsize";
import { color } from '../../../src/styles/color';
import { font } from '../../../src/styles/font';

const FriendSuggestions = ({ data ,title}) => {
    // Combine the data and inviteFriends arrays with a type property


    const renderItem = ({ item }) => {
        return (
            (item.status=="friends"?
          
            <View style={styles.friendContainer1}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.infoContainer}>
                    <Text style={styles.nameText}>{item.name}</Text>
                    <Text style={styles.usernameText}>{item.mutualFriends} mutual friends</Text>
                </View>
               
                <TouchableOpacity style={styles.crossButton}>
                    <Image source={require('../../../src/assets/images/crossIcon.png')} style={styles.crossIcon} />
                </TouchableOpacity>

            </View>
            :
            <View style={styles.friendContainer1}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.usernameText}>{item.mutualFriends} mutual friends</Text>
            </View>
            <TouchableOpacity style={styles.addButton}>
                <Image source={require('../../../src/assets/images/addIcon1x4.png')} style={styles.addIcon} />
                <Text style={styles.addText}>{item.title}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.crossButton}>
                <Image source={require('../../../src/assets/images/crossIcon.png')} style={styles.crossIcon} />
            </TouchableOpacity>

        </View>
            )
        );
    };

    return (
        <View style={styles.container}>
             <View style={{  width: '100%',marginTop:15,marginBottom:15, height:20,alignSelf: 'center', justifyContent: 'center' }}>
                        <Text style={styles.titleHeader}>{title}</Text>
                    </View>
            <FlatList
                data={data}
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

        // flex:1,
        width: wp('100%'), // 90% of the screen width
        alignSelf: 'center',
        paddingLeft:'2%'
    },
    titleHeader: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'inter'
        // font:'urbanist'
    },
    titleText: {
        fontSize: 17,
        fontWeight: '700',
        fontFamily: font.Regular,
        color: color.whiteColor,
        marginBottom: hp('2%'),
        marginTop: '3%'

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
        // flexGrow:1,
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
        paddingBottom: '3%',
        borderBottomColor: color.placeholderColor,
        // backgroundColor: 'red'
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
        fontSize: 13,
        fontWeight: '400',
        fontFamily: font.Regular,
        color: '#727272',
        marginTop:hp(0.25)
    },
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // alignSelf:'center',
        backgroundColor: color.onBoardingButton,
        // padding: wp('1.5%'),
        borderRadius: 8,
        // width: wp('27%'),
        // height: hp(4),
        width:111,
        height:32,
        paddingHorizontal: wp('7%'), // Adjust horizontal padding for increased width
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
        width: wp('27%'),
        justifyContent: 'center',
        height: hp(4),



        paddingHorizontal: wp('7%'), // Adjust horizontal padding for increased width
    },
    crossButton: {
        width: wp(10),
        justifyContent: 'center'
    },
    crossIcon: {
        justifyContent: 'center',
        alignSelf:'center',
        width: RFPercentage(1.25),
        height: RFPercentage(1.4),
    }
});

export default FriendSuggestions;
