// components/CustomTextInput.js
import React, { forwardRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../src/styles/color';

const CustomTextInput = forwardRef(({ value, onChangeText, placeholder, placeholderTextColor }, ref) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                keyboardAppearance="dark"
                value={value}
                ref={ref}
                 autoCorrect={false}
               autoCompleteType="off"
               autoCapitalize="none" // Disable auto capitalization
               keyboardType="default" // Default keyboard type
               spellCheck={false} // Disable spell check

            />
        </View>
    );
});

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        height: hp(6),
        marginTop: hp('5%'),
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    input: {
        backgroundColor: color.inputFieldColor,
        width: wp('92%'),
        borderRadius: 10,
        borderColor: '#414142',
        borderWidth: 1,
        color: color.whiteColor,
        fontSize: 16,
        fontWeight: '500',
        paddingLeft: wp(5),
        fontFamily: 'inter',
    },
});

export default CustomTextInput;
