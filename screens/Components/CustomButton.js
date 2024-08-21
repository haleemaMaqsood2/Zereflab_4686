import React from 'react';
import { TouchableOpacity, View, SafeAreaView, KeyboardAvoidingView, Text, StyleSheet, Platform } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { color } from '../../src/styles/color';

const CustomButton = ({ title, buttonState, keyboardVisible, keyboardHeight, onPress }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
      >
        <View style={{ flex: 1 }} />

        <View style={[
          styles.buttonContainer,
          { marginBottom: keyboardVisible ? keyboardHeight + hp(2) : hp(2) }
        ]}>
          <TouchableOpacity
            onPress={onPress}
            style={[
              styles.button,
              buttonState ? styles.activeButton : styles.inactiveButton
            ]}
          >
            <Text style={styles.buttonText}>{title}</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    left: wp(2),
    right: wp(2),
    alignItems: 'center',
    width:'100%',
    bottom: 0, // Position the button at the bottom and adjust with marginBottom
  },
  button: {
    width: wp('92%'),
    height: hp(6),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
  },
});

export default CustomButton;
