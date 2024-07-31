import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from "react-native-responsive-fontsize";
import { color } from '../../src/styles/color';
import { font } from '../../src/styles/font';

const AddFriendList = ({ data,inviteFriends}) => {
    const renderItem = ({ item }) => (
        <View style={styles.friendContainer1}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.nameText}>{item.name}</Text>
            </View>
            <TouchableOpacity >
                <Image source={require('../../src/assets/images/LeftArrow.png')} style={styles.addIcon} />
                
            </TouchableOpacity>
        </View>
    );
    const renderItem1 = ({ item }) => (
      <View style={styles.friendContainer}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.infoContainer}>
              <Text style={styles.nameText}>{item.name}</Text>
          </View>
          <TouchableOpacity style={styles.addButton}>
                <Image source={require('../../src/assets/images/AddIcon.png')} style={styles.addIcon} />
                <Text style={styles.addText}>Add</Text>
            </TouchableOpacity>
      </View>
  );

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Friends(2)</Text>
            <View style={{height:hp('14%')}}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.list}
            />
            </View>
            <Text style={styles.titleText1}>Others (100)</Text>
            <FlatList
                data={inviteFriends}
                renderItem={renderItem1}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.list}
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
        fontSize: 15,
        fontWeight: '700',
        fontFamily: font.Regular,
        color: color.whiteColor,
        marginBottom: hp('1%'),
        lineHeight:18.15,
    },
    titleText1: {
        fontSize: 15,
        fontWeight: '700',
        fontFamily: font.Regular,
        color: color.whiteColor,
        marginBottom: hp('1%'),
        marginTop:hp('2%'),
        lineHeight:18.15,
    },
    list: {
        marginTop: hp('1%'),
    },
    friendContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom:'4%',
        // paddingVertical: hp('1%'),
        // borderBottomWidth: 1,
        borderBottomColor: color.placeholderColor,
    },
    friendContainer1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:hp(2),
        // paddingBottom:'5%',
        // paddingVertical: hp('1%'),
        // borderBottomWidth: 1,
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
        fontFamily: font.Regular,
        color: color.whiteColor,
        lineHeight:18.15,

    },
    usernameText: {
        fontSize: RFPercentage(2),
        fontWeight: '500',
        fontFamily: font.Regular,
        color: color.placeholderColor,
    },
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: color.onBoardingButton,//373739
        padding: wp('1.5%'),
        borderRadius: 5,
        paddingHorizontal: wp('6%'), // Adjust horizontal padding for increased width

        // width:'10%'
    },
    
    addIcon: {
        width: RFPercentage(2),
        height: RFPercentage(2),
        marginRight: wp('2%'),
    },
    addText: {
        color: color.whiteColor,
        fontSize: 14,
        fontWeight: '500',
        fontFamily: font.Regular,
    },
    addButton1: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#373739',
        padding: wp('1.5%'),
        borderRadius: 5,
        paddingHorizontal: wp('6%'), // Adjust horizontal padding for increased width

        // width:'10%'
    },});

export default AddFriendList;
