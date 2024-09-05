import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { color } from '../../../src/styles/color';
import Header from '../Components/Header';
import { BlurView } from '@react-native-community/blur'; // Import BlurView


const ProfileHeader = ({ title }) => {
  const navigation = useNavigation();
  const [titleText, setTitleText] = useState(title); // Default to the first tab
  const [isModalVisible, setModalVisible] = useState(false); // State to control modal visibility

  const goBack = () => {
    navigation.goBack();
  };
  function moveNext() {
    // Keyboard.dismiss(); // Dismiss keyboard before navigation to prevent animation

    navigation.navigate('ProfileSetting');
  }
  const toggleModal = () => {
    setModalVisible(!isModalVisible); // Toggle modal visibility
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
       <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="fade"
        // onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <BlurView
            style={styles.modalContainer}
            blurType="light" // Options: 'light', 'dark', 'xlight', 'xdark', 'regular', 'prominent'
            blurAmount={25} // Adjust the blur intensity
            reducedTransparencyFallbackColor="white" // Fallback color for unsupported devices
          >
            <View style={styles.modalContent}>
              {/* Option 1 */}
              <TouchableOpacity style={styles.optionContainer} activeOpacity={1} onPress={closeModal}>
              {/* <Image source={require('../../../src/assets/images/Option1Icon.png')} style={styles.optionIcon} /> */}
              <Text style={styles.optionText}>Share my profile</Text>
              <Image source={require('../../../src/assets/images/Add1x4.png')}resizeMode='contain' style={styles.optionIcon} />
            </TouchableOpacity>
            {/* Option 2 */}
            <TouchableOpacity style={styles.optionContainer} activeOpacity={1} onPress={closeModal}>
              {/* <Image source={require('../../../src/assets/images/Option2Icon.png')} style={styles.optionIcon} /> */}
              <Text style={styles.optionText}>Copy profile link</Text>
                            <Image source={require('../../../src/assets/images/copyLinkIcon.png')} style={styles.optionIcon} />
            </TouchableOpacity>
            {/* Option 3 */}
            <TouchableOpacity style={styles.optionContainer1} activeOpacity={1} onPress={closeModal}>
              <Text style={styles.optionText}>Share Where2</Text>
              <Image source={require('../../../src/assets/images/ProfileShareIcon.png')}resizeMode='contain' style={styles.optionIcon} />
            </TouchableOpacity>
            </View>
          </BlurView>
        </View>
      </Modal>
      <>

        <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={toggleModal}
            style={{ width: '15%' }} >
            {(titleText == 'Notification' || titleText == 'Friends' || titleText == 'Create Event'||titleText == 'Create Event') ?
              null :
              <Image
                source={require('../../../src/assets/images/ProfileShareIcon.png')}
                style={styles.arrowImage}
                resizeMode="contain"
              />
            }
          </TouchableOpacity>



          <Text style={styles.titleContainer}>{title}</Text>
          <TouchableOpacity
            onPress={moveNext}
            style={{ width: '15%', alignItems: 'center' }} >
            <Image
              source={require('../../../src/assets/images/Setting1x4.png')}
              style={styles.arrowImage}
              resizeMode="contain"
            />

          </TouchableOpacity>

          {/* <Image
            source={require('../../../src/assets/images/Setting1x4.png')}
            style={styles.arrowImage}
            resizeMode="contain"
          /> */}

        </View>


      </>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '4%',
    paddingVertical: '2%',
    backgroundColor: color.backgroundColor,
    alignSelf: 'center',
    width: '100%',
    // backgroundColor: 'pink',

  },
  profileIcon: {
    width: 100,
    height: 40,
    // backgroundColor:'red'
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '3%',
    paddingVertical: '2%',
    borderBottomColor: '#ccc',
    alignSelf: 'center',
  },
  leftContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Allows absolute positioning inside
  },
  circleImage: {
    width: 50,
    height: 50,
  },
  arrowImage: {
    // position: 'absolute',
    width: 25, // Adjust size as needed
    height: 25,
    // backgroundColor:'pink',
    alignItems: 'center',
    // alignSelf:'center',
    // top: '50%',
    // left: '50%',
    // transform: [{ translateX: -2.5 }], // Center the arrow
  },

  centerContainer: {
    // flex: 1,
    alignItems: 'center',
  },
  counter: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Inter'
  },
  titleContainer: {
    color: color.whiteColor,
    fontSize: 17,
    fontWeight: '500',
    fontFamily: 'Inter',
    lineHeight: 21.87,
    justifyContent: 'center',
    // backgroundColor:'red',
    width: '70%',
    textAlign: 'center',
    alignSelf: 'center',
    // flex: 1,
  },
  modalContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position:'absolute',
    top:hp(9),
    width:wp(50),
    height:hp(16),
    left:wp(8),
    borderRadius: 10,


    // backgroundColor: 'red', // Semi-transparent background

    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    width: '100%',
   
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width:wp(50),
    paddingVertical: 7,
    height:hp(5),
    justifyContent:'space-between',
    borderBottomWidth:0.2,
    borderBottomColor:color.whiteColor,
    padding: 10,

  },
  optionIcon: {
    width: 18,
    height: 18,
    // marginRight: 10,
  },
  optionText: {
    fontSize: 14,
    fontWeight:400,
    fontFamily:'Inter',
    color: color.whiteColor,
  },
  optionContainer1:{
    flexDirection: 'row',
    alignItems: 'center',
    width:wp(50),
    paddingVertical: 7,
    height:hp(5),
    justifyContent:'space-between',
    // borderBottomWidth:1,
    borderBottomColor:color.whiteColor,
    padding: 10,
  }

});

export default ProfileHeader;
