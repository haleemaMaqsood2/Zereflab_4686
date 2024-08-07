// components/DatePickerComponent.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, DatePickerIOS, Button } from 'react-native';
import { color } from '../../src/styles/color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const DatePickerComponent = ({ date, onDateChange }) => {
    const [showPicker, setShowPicker] = useState(false);

    const togglePicker = () => {
        setShowPicker(!showPicker);
    };

    return (
        <View style={styles.container}>
            <Button title="Select Date of Birth" onPress={togglePicker} />
            {showPicker && (
                <DatePickerIOS
                    date={date}
                    onDateChange={onDateChange}
                    mode="date"
                    style={styles.datePicker}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    datePicker: {
        width: wp('90%'),
        height: hp('30%'),
        backgroundColor: color.inputFieldColor,
        borderRadius: 10,
    },
});

export default DatePickerComponent;
