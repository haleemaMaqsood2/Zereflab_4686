// components/CustomButtonContainer.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../src/styles/color';

const CustomButtonContainer = ({ button1Name, button2Name, onPressButton1, onPressButton2 }) => {
    return (
        <View style={styles.contineContainer}>
            <TouchableOpacity style={styles.uploadContainer} onPress={onPressButton1}>
                <Text style={styles.uploadText}>{button1Name}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.SkipContainer} onPress={onPressButton2}>
                <Text style={styles.skipText}>{button2Name}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    contineContainer: {
        marginTop: Platform.OS === 'ios' ? hp(13) : hp(23),
        alignItems: 'center',
        // backgroundColor:'pink'
    },
    uploadContainer: {
        backgroundColor: color.onBoardingButton,
        height: hp('6%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: wp('90%'),
        marginBottom: hp('2%')
    },
    uploadText: {
        color: color.whiteFontColor,
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'inter',
    },
    SkipContainer: {
        height: hp('6%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: wp('90%'),
        borderWidth: 1,
        borderColor: color.whiteWithfiftypercentOpacity,
    },
    skipText: {
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'inter',
        color: color.whiteWithfiftypercentOpacity,
    },
});

export default CustomButtonContainer;
