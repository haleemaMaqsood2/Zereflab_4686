import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
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
const Header = ({title}) => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>

{title ? (
        <>
         <View style={styles.leftContainer}>
        <TouchableOpacity onPress={goBack} style={styles.circleContainer}>
          <Image
            source={require('../../../src/assets/images/circle.png')}
            style={styles.circleImage}
            resizeMode="contain"
          />
          <Image
            source={require('../../../src/assets/images/arrow.png')}
            style={styles.arrowImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={{width:'75%',alignItems:'center'}}>
       <Text style={styles.titleContainer}>{title}</Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.counter}></Text>
      </TouchableOpacity>
     </>
      ) : (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: wp('100%') }}>
          <Image
            source={require('../../../src/assets/images/LogoHome.png')}
            style={styles.profileIcon}
            resizeMode="contain"
          />
          <TouchableOpacity>
            <Image
              source={require('../../../src/assets/images/userProfile.png')}
              style={styles.profileIcon}
              resizeMode="contain"
            />
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
    paddingHorizontal: '3%',
    paddingVertical: '2%',
    backgroundColor:color.backgroundColor,
    alignSelf: 'center',
    width:'100%'
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
    position: 'absolute',
    width: 16, // Adjust size as needed
    height: 16, // Adjust size as needed
    alignItems:'center',
    alignSelf:'center',
    // top: '50%',
    // left: '50%',
    transform: [{ translateX: -2.5 }], // Center the arrow
  },
  
  centerContainer: {
    // flex: 1,
    alignItems: 'center',
  },
  counter: {
    color: 'white',
  },
  titleContainer:{
    color:color.whiteColor,
    fontSize:17,
    fontWeight:'500',
    fontFamily:'Inter',
    lineHeight:21.87
  }
 
  
});

export default Header;
