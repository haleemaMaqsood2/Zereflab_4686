import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from "react-native-responsive-fontsize";
import { color } from '../../../src/styles/color';
import { font } from '../../../src/styles/font';

const EventDetail = ({ data, title }) => {
    // Combine the data and inviteFriends arrays with a type property


    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity>

            <View style={styles.friendContainer1}>
                <View style={{ width: wp(24), justifyContent: 'center' }}>
                    <Image source={item.partyImage} style={styles.image} />

                </View>
                {/* <Image source={item.partyImage} style={styles.image} /> */}
                <View style={{ width: wp(70),paddingLeft:10 }}>
                    <Text style={styles.title}>{item.Title}</Text>
                    <Text style={styles.dateStyles}>{item.time}</Text>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row',alignItems:'center'}}>
                        <Image source={item.userProfileIcon} style={styles.userImage} resizeMode='contain' />
                        <Text style={styles.userNameText}>{item.username}</Text>

                        </View>
                        <View style={styles.userCountContainer}>
                        <Image source={item.userCountImage} style={styles.userImage1} resizeMode='contain' />
                        <Text style={styles.userCountText}>{item.count}</Text>
                        </View>
                        
                    
                    </View>

                </View>

                {/* <Text>{item.username}</Text> */}


            </View>
            </TouchableOpacity>

        );
    };

    return (
        <View style={styles.container}>

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
        paddingLeft: '2%'
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
        // paddingBottom: '3%',
        borderBottomColor: color.placeholderColor,
        backgroundColor: color.inputFieldColor,
        marginVertical: 10,
        height: hp(10),
        width: wp(96),
        borderRadius:10

        // backgroundColor: 'red'
    },
    image: {
        width: 86,
        height: 80,
        marginLeft:7
        // borderRadius: RFPercentage(2),
    },
    title: {
        fontSize: 17,
        fontWeight: 500,
        fontFamily: 'Inter',
        color: color.whiteColor
    },
    userImage: {
        height: hp(2.5),
        width: wp(5),
    },
    dateStyles: {
        fontSize: 12,
        fontWeight: 400,
        fontFamily: 'inter',
        marginTop:hp(0.5),
        color: color.whiteWithfiftypercentOpacity
    },
    userNameText: {
        fontSize: 12,
        fontWeight: 400,
        fontFamily: 'inter',
        color: color.whiteColor,
        paddingLeft:5
    },
    userImage1: {
        height: hp(1.5),
        width: wp(5),
    },
    userCountText: {
        fontSize: 12,
        fontWeight: 500,
        fontFamily: 'inter',
        color: color.whiteColor
    },
    userCountContainer:{backgroundColor:color.whiteWithTenPercencentOpacity,
        justifyContent:'center',
        width:wp(11),
        height:hp(2),
        flexDirection: 'row',
        borderWidth:1,
        borderColor:color.whiteWithTenPercencentOpacity ,
        borderRadius:10,
        alignItems:'center'
    },
    userInfoSection:{ 
        flexDirection: 'row' ,
        justifyContent:'space-between',
        width:wp(65),
        marginTop:hp(0.5),

    }

});

export default EventDetail;
