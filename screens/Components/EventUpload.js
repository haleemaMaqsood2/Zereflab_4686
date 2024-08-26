import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../src/styles/color';

const EventUpload = () => {
  return (
    <View style={styles.container}>

      <Image source={require('../../src/assets/images/EventModule/eventMain.png')} 
      // resizeMode={'contain'}
      resizeMode="CONTAIN"

      style={styles.image} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // width: wp('90%'),
    // alignSelf: 'center',
    // marginVertical: hp('1%'),
    // // backgroundColor:'red',
    height:'100%',
    // backgroundColor:'red'
  },
  image:{
    height:'42%',
    width:'100%'
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ffffff80',
  },
  text: {
    marginHorizontal: wp('1%'),
    fontSize: 17,
    // fontWeight: 'bold',
    // color: color.placeholderColor,
    color: '#ffffff80',

  },
});

export default EventUpload;
