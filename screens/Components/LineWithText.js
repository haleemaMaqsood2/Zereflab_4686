import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../src/styles/color';

const LineWithText = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('90%'),
    alignSelf: 'center',
    marginVertical: hp('1%'),
    // backgroundColor:'red',
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

export default LineWithText;
