import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Header = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
       <>
     
      <View style={styles.centerContainer}>
         <TouchableOpacity onPress={goBack} style={styles.circleContainer}>
          
          <Image
            source={require('../../src/assets/images/BackNew1x4.png')}
            style={styles.arrowImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      <Image
            source={require('../../src/assets/images/logo1.png')}
            style={styles.logoIcon}
            resizeMode="contain"
          />
          <TouchableOpacity style={{width:'10%',height:'100%'}}>
        <Text style={styles.counter}></Text>
      </TouchableOpacity>
      </View>
      
     </>
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
    alignSelf: 'center',
  },
  leftContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'yellow',
    width:'10%',
  },
  circleImage: {
    width: 50,
    height: 50,
  },
  arrowImage: {
    // position: 'absolute',
    width: 45, // Adjust size as needed
    height: 45, // Adjust size as needed
    alignItems:'center',
    alignSelf:'center',
    // top: '50%',
    // left: '50%',
    // transform: [{ translateX: -2.0 }], // Center the arrow
  },
  logoIcon: {
    alignSelf: 'center',
    alignItems:'center',
    // backgroundColor:'pink',
    justifyContent:'center',

    // marginRight: wp('18%'),
    width: 97.91,
    // height:19.58,
  },
  centerContainer: {
    // flex: 1,
    alignItems: 'center',
    width:wp('90%'),
    justifyContent:'space-between',
    // backgroundColor:'red',
    flexDirection:'row'
  },
  counter: {
    color: 'white',
  },
});

export default Header;
