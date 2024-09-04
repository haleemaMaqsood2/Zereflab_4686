import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Switch } from 'react-native';
import { color } from '../../../src/styles/color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const BarItem = ({
    leftIcon,
    leftIconSize = 20,
    middleText,
    rightIcon,
    rightIconSize = 20,
    onPress
}) => {
    const navigation = useNavigation(); // Initialize navigation hook

    const [notificationTab, setNotificationTab] = useState(false); // Default to the first tab
    const [syncTab, setSyncTab] = useState(false); // Default to the first tab

    const toggleSwitchNotification = () => setNotificationTab(previousState => !previousState);
    // const toggleSwitchSync = () => setSyncTab(previousState => !previousState);
    const toggleSwitchSync = () => {
        const newValue = !syncTab;
        setSyncTab(newValue);
        if (newValue) {
          // If the switch is turned on, navigate to the new screen
          navigation.navigate('LoadingScreen'); // Replace 'NewScreen' with your desired screen name
        }
      };

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image
                source={leftIcon}
                style={[styles.leftIcon, { width: 18, height: 18 }]}
                resizeMode="contain"
            />
            <Text style={styles.middleText}>{middleText}</Text>
            {middleText === 'Allow Notifications' ? (
                <Switch
                style={styles.switch} // Apply custom style

                trackColor={{ false: '#767577', true: '#34C759' }}
                thumbColor={syncTab ? 'white' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitchNotification}
                    value={notificationTab}
                />
            ) : middleText === 'Sync contacts' ? (
                <Switch
                style={styles.switch} // Apply custom style

                    trackColor={{ false: '#767577', true: '#34C759' }}
                    thumbColor={syncTab ? 'white' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitchSync}
                    value={syncTab}
                />
            ) : (
                <Image
                    source={rightIcon}
                    style={[styles.rightIcon, { width: 16, height: 16 }]}
                    resizeMode="contain"
                />
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: color.inputFieldColor,
        marginVertical: 5,
        height: hp(5),
        borderRadius: 8,
    },
    leftIcon: {
        marginRight: 15,
    },
    middleText: {
        flex: 1,
        fontSize: 14,
        color: color.whiteColor,
        fontWeight: '600',
        fontFamily: 'Inter',
    },
    rightIcon: {
        marginLeft: 15,
    },
    switch: {
        transform: [{ scaleX: 0.6  }, { scaleY: 0.6 }], // Scale down the switch
      },
});

export default BarItem;
