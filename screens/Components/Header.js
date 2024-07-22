import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

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
const Header = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>

      <View style={styles.rightContainer}>

        <TouchableOpacity onPress={goBack}>
          <Image
            source={require('../../src/assets/images/arrow.png')}
            style={styles.profileIcon}

            resizeMode="contain"

          />
        </TouchableOpacity>
        {/* <Text style={{color:'white'}}>Arr</Text> */}
      </View>
      <View style={styles.centerContainer}>
      <Image
            source={require('../../src/assets/images/logo.png')}
            style={styles.logoIcon}
            resizeMode="contain"

          />
      </View>
      <TouchableOpacity >
        <Text style={styles.counter}></Text>
       </TouchableOpacity>
     
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '3%',
    paddingVertical: '2%',
    borderBottomColor: '#ccc',
    // width:'95%',
    // backgroundColor:'red',
    alignSelf: 'center'
  },
  profileIcon: {
    // width: 20,
    // // height:29,
    // backgroundColor:"#EEF2F3 ",
    // paddingTop:45,
    alignSelf: 'center',
    width: 100,
    // height: '50%', 
  },
  logoIcon: {
    // width: 20,
    // // height:29,
    // backgroundColor:"#EEF2F3 ",
    // paddingTop:45,
    alignSelf: 'center',
    marginRight:wp('18%'),
    width: wp(30),
    },
  ProfileContainer: {
    padding: 5,
    borderColor: 'grey',
    borderWidth: 0.1,
    width: '11%',
    height: 35,
    // borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerContainer: {
    flex: 1,
    // backgroundColor:'red',
    width:'30%'
   
  },
  
  rightContainer: {
    padding: 5,
    borderColor: '#414142',
    borderWidth: 0.4,
    // width: '12.5%',
    width: wp('9.5%'),

    // height:RFPercentage(5.7),
    height:RFPercentage(4.7),

    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  counter: {
    color: 'white'
  }
});

export default Header;
