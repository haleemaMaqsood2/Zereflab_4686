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
const Header = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>

      <View style={{flexDirection:'row',alignItems:'center',   justifyContent:'space-between',width:wp('100%')
}}>
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
    alignSelf: 'center'
  },

  
  // centerContainer: {
  //   flex: 1,
  //   // backgroundColor:'red',
  //   width:'30%'
   
  // },
  
  
});

export default Header;
