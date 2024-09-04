import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, FlatList, Switch } from 'react-native';
import BarItem from './BarItem';
import { color } from '../../../src/styles/color';
import Header from '../Components/Header';

const ProfileSetting = ({ navigation }) => {
    const [notificationTab, setNotificationTab] = useState(false); // Default to the first tab
    const [syncTab, setsyncTab] = useState(false); // Default to the first tab

    const data = [
        {
            id: 1,
            //   leftIcon: require('../src/location.png'),
            leftIcon: require('../../../src/assets/images/Setting/location.png'),

            title: 'Lorem ipsum dolor - anytown 12',
            rightIcon: require('../../../src/assets/images/Setting/arrowDown.png'),
        },
        {
            id: 2,
            leftIcon: require('../../../src/assets/images/Setting/AccountDetail.png'),
            title: 'Account Details',
            rightIcon: require('../../../src/assets/images/Setting/arrow-right.png'),
        }, {
            id: 3,
            leftIcon: require('../../../src/assets/images/Setting/NotificationIcon.png'),
            title: 'Allow Notifications',
            rightIcon: require('../../../src/assets/images/Setting/arrowDown.png'),
        },
        {
            id: 4,
            leftIcon: require('../../../src/assets/images/Setting/SyncContact.png'),
            title: 'Sync contacts',
            rightIcon: require('../../../src/assets/images/Setting/arrowDown.png'),
        },
        {
            id: 5,
            leftIcon: require('../../../src/assets/images/Setting/AffiliateProgram.png'),
            title: 'Join the affiliate program',
            rightIcon: require('../../../src/assets/images/Setting/arrow-right.png'),
        }, {
            id: 6,
            leftIcon: require('../../../src/assets/images/Setting/Help.png'),
            title: 'Help and support',
            rightIcon: require('../../../src/assets/images/Setting/arrow-right.png'),
        }
        , {
            id: 7,
            leftIcon: require('../../../src/assets/images/Setting/FeedBack.png'),
            title: 'Feedback or Ideas?',
            rightIcon: require('../../../src/assets/images/Setting/arrow-right.png'),
        },
        {
            id: 8,
            leftIcon: require('../../../src/assets/images/Setting/share.png'),
            title: 'Share Where2',
            rightIcon: require('../../../src/assets/images/Setting/arrow-right.png'),

        },
        {
            id: 9,
            leftIcon: require('../../../src/assets/images/Setting/Rate.png'),
            title: 'Rate Where2',
            rightIcon: require('../../../src/assets/images/Setting/arrow-right.png'),

        },
        {
            id: 10,
            leftIcon: require('../../../src/assets/images/Setting/FeedBack.png'),
            title: 'Privacy',
            rightIcon: require('../../../src/assets/images/Setting/arrow-right.png'),

        },
    ]
    function onPress(id) {
        if(id==2){
          console.log("Navigating to AccountDetail")
          navigation.navigate('AccountDetail')

        }else if(id==10){
          console.log("Navigating to Privacy")
          navigation.navigate('PrivacyScreen')

        }else if(id==4){
        //   console.log("Navigating to Sync Contact")
        }else{
          console.log("Nothing to navigate")
        }
    }
    const toggleSwitchNotification = () => setNotificationTab(previousState => !previousState);
    const toggleSwitchContact = () => setsyncTab(previousState => !previousState);


    const renderItem = ({ item }) => (
        <BarItem
            leftIcon={item.leftIcon}
            id={item.id}
            leftIconSize={24}
            middleText={item.title}
            rightIcon={item.rightIcon}
            rightIconSize={24}
            onPress={() => onPress(item.id)}
        />
    );
    {
        return (
            <SafeAreaView style={styles.safeArea}>
                <Header title={"Settings"} />
                <View style={styles.secondHeader}>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />

                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={{ color: '#F9373F', fontSize: 14, fontFamily: 'Inter', fontWeight: '600' }}>Log out</Text>
                    </TouchableOpacity>
                </View>
               
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: color.backgroundColor,
    },
    secondHeader: {
        width: '95%',
        alignSelf: 'center',
        height:'100%'
        // marginTop: '1%',
        // justifyContent: 'center',
   
    },
    listData: {
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    buttonContainer: {
        alignItems: 'center',
        backgroundColor: color.inputFieldColor,
        width:'100%',
        height: '6%',
        alignSelf:'center',
        // flex:1,
        marginBottom: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        // backgroundColor: 'red',
    },
    titleText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'inter'
        // font:'urbanist'
    },
    touchableArea: {
        width: '100%', // Make it the full width of the container
        height: '100%', // Make it the full height of the container
        alignItems: 'center', // Center the text
        justifyContent: 'center', // Center the text
    },
    image: {
        height: 40,
        width: 40,
    },
    infoContainer: {
        // backgroundColor:'pink',
        width: '70%',
        alignSelf: 'center',
        paddingLeft: '4%'
    },
    descriptionText: {
        fontSize: 12,
        fontFamily: 'Inter',
        fontWeight: '700',
        color: color.whiteColor,
    },
    description2Text: {
        fontSize: 12,
        fontFamily: 'Inter',
        fontWeight: '400',
        color: color.whiteColor,
    },
    timestyle: {
        fontSize: 12,
        fontFamily: 'Inter',
        fontWeight: '400',
        color: '#ffffff80',
    }
});
export default ProfileSetting;