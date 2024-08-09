import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { color } from '../../src/styles/color';

const CustomButton = ({ title, buttonState, keyboardVisible, keyboardHeight, nextScreenName, marginTop, onPress,extraSpace }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonContainer,
        { marginTop: keyboardVisible ? hp(marginTop - keyboardHeight+extraSpace) : hp(marginTop) },
        buttonState ? styles.activeButton : styles.inactiveButton
      ]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: hp(6),
    width: wp('92%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    alignSelf:'center'
  },
  activeButton: {
    backgroundColor: color.onBoardingButton,
  },
  inactiveButton: {
    backgroundColor: color.WhiteWithThirtypercentOpacity,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'inter',
  },
});

export default CustomButton;
