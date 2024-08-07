// components/CustomInput.js
import React, { forwardRef } from 'react';
import { View, TextInput, StyleSheet, Image, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from "react-native-responsive-fontsize";
import { color } from '../../src/styles/color';

const CustomInput = forwardRef(({ value, onChangeText, placeholder, placeholderTextColor }, ref) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={[styles.input, { color: color.whiteColor, height: Platform.OS === 'ios' ? hp(5) : null }]}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                keyboardAppearance="dark"
                value={value}
                ref={ref}
            />
            {value ? (
                <Image
                    style={styles.image}
                    source={require('../../src/assets/images/doneIcon1x4.png')}
                    resizeMode="contain"
                />
            ) : null}
        </View>
    );
});

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: color.inputFieldColor,
        width: wp('92%'),
        marginTop: '10%',
        borderRadius: 10,
        borderColor: '#414142',
        borderWidth: 1,
        height: hp(6),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: wp(5),
        paddingRight: RFPercentage('3')
    },
    input: {
        flex: 1,
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'inter',
    },
    image: {
        marginTop: '4.5%',
        paddingLeft: RFPercentage(-8),
        height:RFPercentage(2),
        width:RFPercentage(2),
    },
});

export default CustomInput;
