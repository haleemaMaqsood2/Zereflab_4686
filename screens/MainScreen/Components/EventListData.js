import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image, StyleSheet, FlatList, Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from "react-native-responsive-fontsize";
import { color } from '../../../src/styles/color';
import { font } from '../../../src/styles/font';

const EventListData = ({ data }) => {
    // Alert.alert(JSON.stringify(data))

    const renderItem = ({ item }) => (
        <View style={{width:'100%'}}>
            <View style={{ backgroundColor: color.backgroundColor, flexDirection: 'row' }}>
                <Image source={item.userProfileIcon} style={styles.profileIcon} />
                <Text style={styles.username}>{item.username}</Text>


            </View>
            <View style={styles.card}>
            <TouchableOpacity>
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
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.backgroundColor,
        width: '100%',
        // backgroundColor:'red'
        // flex:1,
    },
    
    list: {
        // paddingHorizontal: wp('5%'),
        // paddingTop: hp('2%'),
        width:'100%'
        
    },
    card: {
        // backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: hp('1%'),
        flex:1,


        marginBottom: hp('2%'),
        elevation: 3, // for Android shadow
        shadowColor: '#000', // for iOS shadow
        shadowOffset: { width: 0, height: 2 }, // for iOS shadow
        shadowOpacity: 0.2, // for iOS shadow
        shadowRadius: 3, // for iOS shadow
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: hp('1%'),
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
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        position: 'relative',
        width:'100%'
      },
    //   image: {
    //     width: '100%',
    //     height: 200,
    //     borderRadius: 10,
    //   },
    titleContainer: {
        position: 'absolute',
        bottom: hp(0.5), // Adjust this value to position the text
        left: 10, // Adjust this value to position the text
        padding:wp(1.5),
        // marginBottom: hp('1%'),
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        fontFamily:'Inter',
        color:color.whiteColor,
        marginBottom:hp(0.75)


    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: hp('1%'),
    },
    footerText: {
        fontSize: 14,
        color: '#555',
    },
    footerTime: {
        fontSize: 14,
        fontWeight:'600',
        fontFamily:'Inter',
        color:color.whiteColor,
        marginBottom:hp(1)

    },
    otherUserText: {
        fontSize: 10,
        fontWeight:'500',
        fontFamily:'Inter',
        color:color.whiteColor,
        paddingLeft:wp(1.2),
        paddingRight:wp(2)
        // alignSelf:'center'

    },
    OtherContainer:{
        flexDirection:'row',
        // backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'

    },
    bottom:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    goingButton:{
        backgroundColor:color.onBoardingButton,
        width:wp(75),
        height:hp(4.5),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
    goingText:{
        color:color.whiteFontColor,
        fontWeight:'500',
        fontSize:14,
        fontFamily:'Inter',
        alignSelf:'center',
        lineHeight:16.94,
        
    },
    saveButton:{
        backgroundColor:color.shareButtonColor,
        height:hp(4.5),
        width:wp(13),
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:color.WhiteWithThirtypercentOpacity,
        borderRadius:10,



    }
});

export default EventListData;
