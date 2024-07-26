import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Modal
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { color } from '../../src/styles/color';
import Header from './Components/Header';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import HomeTab from './Components/HomeTab';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { useDispatch } from 'react-redux';
import { setOnBoardingComplete } from '../../src/store/slices/onBoardingSlice/onBoardingSlice';
import EventListData from './Components/EventListData';


const HomePage = () => {
  const [modalVisible, setModalVisible] = useState(true); // Start with the modal visible
  const dispatch = useDispatch();
  const today = 'Today - 12:00 PM';

  const data=[
    {
      id:1,
      username:'msu-figi',
      userProfileIcon:require('../../src/assets/images/partyUser.png'),
      Title:'FIJI DARTY',
      partyImage:require('../../src/assets/images/BirthdayListScreen.png'),
      time:today,
      other:130,
      friends:12
    },
    {
      id:2,
      username:'msu-figi',
      userProfileIcon:require('../../src/assets/images/partyUser.png'),
      Title:'FIJI DARTY',
      partyImage:require('../../src/assets/images/BirthdayListScreen.png'),

      time:today,
      other:130,
      friends:12
    },
  ]

  const navigation = useNavigation();
  const TabData = [
    {
      id: 1,
      name: 'Popular',
    },
    {
      id: 2,
      name: 'Upcoming',
    },
    {
      id: 3,
      name: 'Friends',
    },
  ]

  const onPressModalClose = () => {
    setModalVisible(false)
   
}; 
  useEffect(()=>{
    dispatch(setOnBoardingComplete(false));

    // setModalVisible(true)

   })

  {
    return (
      <SafeAreaView style={styles.safeArea}>
        <SafeAreaView style={styles.safeArea}>
          <Header />
          <HomeTab data={TabData} />


          <View style={styles.container}>
        <EventListData data={data} />
      </View>
        <View style={styles.centeredContainer}>
        {/* <EventListData data={data}/> */}

             {/*  <View style={styles.textContainer}>
              <Image
                source={require('../../src/assets/images/logo.png')}
              />

            </View>*/}
          </View> 


          {/* FLATLIST daTA>>>>>>> */}










          
          {/* Modal Implementation */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalContainer}>

              <View style={styles.modalContent}>
                <TouchableOpacity style={styles.hideIcon} onPress={onPressModalClose}>
                  <Image
                    source={require('../../src/assets/images/ModalHideIcon.png')}
                  />
                </TouchableOpacity>
                <Image
                  source={require('../../src/assets/images/NotificationIcon.png')}
                  style={styles.Notificationimage}
                />
                <Text style={styles.modalTitle}>Turn on Notifications</Text>
                <Text style={styles.modalDescription}>You’ll be able to see what your friends are doing and stay updated on new events!
                </Text>
                <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.continueButton}>
                <Text style={styles.closeButtonText}>Continue</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.LaterButton}>
                <Text style={styles.laterButtonText}>MayBe Later</Text>
              </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </SafeAreaView>

      </SafeAreaView>
    );
  }

}
const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: color.backgroundColor,
  },
  container:{
    backgroundColor:color.backgroundColor,
  },
  centeredContainer: {
    backgroundColor: '#050507',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Logo: {
    backgroundColor: 'red',
    alignSelf: 'center'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    // alignItems: 'center',
    // backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background
  },
  modalContent: {
    width: '100%',
    height: hp(65), // 60% of the screen height
    backgroundColor: color.inputFieldColor,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // padding: 20,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  hideIcon:{
    marginTop:hp('2%'),
    marginBottom:hp('5%')
  },
  Notificationimage:{
    marginBottom:hp('5%')

  },
  modalTitle: {
    fontSize: 28,
    fontWeight: '700',
    fontFamily: 'Inter',
    color: color.whiteFontColor,
    marginBottom:hp('2.5%')


  },
  modalDescription: {
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Inter',
    color: color.whiteFontColor,
    textAlign: 'center',
    marginBottom:hp('8.5%'),
    // lineHeight:128.646



  },
  continueButton: {
    backgroundColor: color.onBoardingButton,
    borderRadius: 10,
    width:wp('94%'),
    justifyContent:'center',
    height:hp('6%'),
    alignItems:'center',
    marginBottom:hp('1.5%')

  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight:'700',
    fontFamily:'Inter'
  },
  LaterButton: {
    // backgroundColor: color.onBoardingButton,
    borderRadius: 10,
    width:wp('94%'),
    justifyContent:'center',
    height:hp('6%'),
    alignItems:'center',
    borderColor:'#ffffff4d',
    borderWidth:1


  },
  laterButtonText: {
    color:'#ffffff4d',
    fontSize: 16,
    fontWeight:'700',
    fontFamily:'Inter'
  },

});
export default HomePage;