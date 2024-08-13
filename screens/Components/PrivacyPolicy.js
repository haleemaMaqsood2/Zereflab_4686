// PrivacyPolicy.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Keyboard, Platform, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../src/styles/color';

const PrivacyPolicy = () => {
    const [keyboardHeight, setKeyboardHeight] = useState(0);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            (event) => {
                setKeyboardHeight(event.endCoordinates.height);
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardHeight(0);
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);
        const marginBottom = keyboardHeight > 0 ? keyboardHeight + hp('5%') : hp('5%');


    return (
        <View
            style={[
                styles.privacyPolicyContainer,
                {
                    // marginTop:hp(30),
                    marginBottom:'5%'
                    // marginTop: keyboardHeight > 0 ? hp('5%') : hp('25%')
                }
            ]}
        >
            <Text style={styles.privacyPolicyText1}>
                By continuing, you agree to our 
                <Text style={styles.privacyText}> Privacy Policy</Text> and 
                <Text style={styles.privacyText}> Terms of Service.</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    privacyPolicyContainer: {
        width: wp('90%'),
        alignSelf: 'center',

    },
    privacyPolicyText1: {
        color: color.whitewithThirty,
        textAlign: 'center',
        fontSize: 13,
        fontFamily: 'Inter',
        fontWeight: '400',
        // marginTop: hp('3%'),
    },
    privacyText: {
        color: color.privacyPolicyColor,
    },
});

export default PrivacyPolicy;
