import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { color } from '../../../src/styles/color';

///Old Header code4 thast require title andinderx as parameter

// const Header = ({ title, index }) => {
//   const navigation = useNavigation();

//   const goBack = () => {
//     navigation.goBack();
//   };

//   return (
//     <View style={styles.container}>

//       <View style={styles.rightContainer}>

//         <TouchableOpacity onPress={goBack}>
//           <Image
//             source={require('../../src/assets/arrow.png')}
//             style={styles.profileIcon}
//             resizeMode="contain"

//           />
//         </TouchableOpacity>
//         {/* <Text style={{color:'white'}}>Arr</Text> */}
//       </View>
//       <View style={styles.centerContainer}>
//         <Text style={styles.usernameText}>{title}</Text>
//       </View>
//       <TouchableOpacity style={styles.rightContainer}>
//         <Text style={styles.counter}>{index}/4</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };
const Header = ({ title }) => {
  const navigation = useNavigation();
  const [titleText, setTitleText] = useState(title); // Default to the first tab

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>

      {title ? (
        <>
          {/* <View style={styles.leftContainer}>
        <TouchableOpacity onPress={goBack}  
        // style={styles.circleContainer}*/}
          {/* > */}
          {/* <Image
            source={require('../../../src/assets/images/circle.png')}
            style={styles.circleImage}
            resizeMode="contain"
          />
          <Image
            source={require('../../../src/assets/images/arrow.png')}
            style={styles.arrowImage}
            resizeMode="contain"
          /> */}
          {/* <Image
            source={require('../../../src/assets/images/BackNew1x4.png')}
            style={styles.arrowImage}
            resizeMode="contain"
          /> */}
          {/* </TouchableOpacity> 
      </View>*/}
          <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row' }}>
            <TouchableOpacity onPress={goBack} style={{ width: '15%' }} >
              {(titleText == 'Notification' || titleText == 'Friends'||titleText == 'Create Event') ?
                null :
                <Image
                  source={require('../../../src/assets/images/BackNew1x4.png')}
                  style={styles.arrowImage}
                  resizeMode="contain"
                />
              }
            </TouchableOpacity>



            <Text style={styles.titleContainer}>{title}</Text>
            {(titleText=='Invite Friends')?
            <TouchableOpacity style={{ width: '15%'}}>
            <Text style={styles.counter}>Skip</Text>
          </TouchableOpacity>:
          <TouchableOpacity style={{}}>
          <Text style={styles.counter}></Text>
        </TouchableOpacity>


          }
          </View>
        
          
        </>
      ) : (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1, }}>
          <Image
            source={require('../../../src/assets/images/logo1.png')}
            style={styles.profileIcon}
            resizeMode="contain"
          />
          <TouchableOpacity>

          </TouchableOpacity>
        </View>
      )}

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
    width: 45, // Adjust size as needed
    height: 45,
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
    fontSize:16,
    fontWeight:'500',
    fontFamily:'Inter'
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
  }


});

export default Header;
