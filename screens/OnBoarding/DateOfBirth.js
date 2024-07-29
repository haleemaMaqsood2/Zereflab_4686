import React, { useState, useRef, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Modal,
    Animated,
    Easing,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { color } from '../../src/styles/color';
import Header from '../Components/Header';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from "react-native-responsive-fontsize";
import DatePicker from 'react-native-date-picker';

const CustomModal = ({ visible, onClose, children }) => {
    const translateY = useRef(new Animated.Value(500)).current;

    useEffect(() => {
        if (visible) {
            Animated.timing(translateY, {
                toValue: 0,
                duration: 300,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(translateY, {
                toValue: 500,
                duration: 300,
                easing: Easing.in(Easing.ease),
                useNativeDriver: true,
            }).start(onClose);
        }
    }, [visible]);

    if (!visible) return null;

    return (
        <View style={styles.modalOverlay}>
            <Animated.View style={[styles.modalContainer, { transform: [{ translateY }] }]}>
                <View style={styles.modalHeaderContainer}>
                    {/* <Header title="Date of Birth" /> */}
                </View>
                {children}
            </Animated.View>
        </View>
    );
};

const DateOfBirth = () => {
    const navigation = useNavigation();
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(true);
    const [formattedDate, setFormattedDate] = useState('');
    const dobRef = useRef(null);

    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
        const formatted = formatDate(selectedDate);
        setFormattedDate(formatted);
    };

    const formatDate = (date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1; // Months are zero indexed
        const year = date.getFullYear();
        return `${month}-${day}-${year}`;
    };

    useFocusEffect(
        React.useCallback(() => {
            setOpen(true); // Open the date picker when screen is focused
            return () => {
                setOpen(false); // Optionally close the picker when unfocused
            };
        }, [])
    );

    const calculateAge = (birthDate) => {
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            return age - 1;
        }
        return age;
    };

    const moveNext = () => {
        const age = calculateAge(date);
        if (age >= 17) {
            setOpen(false);
            navigation.navigate('UserNameScreen'); // Navigate if age is 17 or older
        } else {
            alert("You must be at least 17 years old to continue.");
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <Header title="Date of Birth" />
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>What's your birthday?</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder='MM-DD-YY'
                            placeholderTextColor={color.placeholderColor}
                            keyboardAppearance="dark"
                            textColor="white" // Text color
                            value={formattedDate}
                            onFocus={() => setOpen(true)}
                            ref={dobRef}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
            <CustomModal visible={open} onClose={() => setOpen(false)}>
            <View style={styles.ButtonContainer}>
                        <TouchableOpacity onPress={moveNext} style={styles.touchableArea}>
                            <Text style={styles.conTinueText}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                <View style={styles.modalContent}>
                    <View style={styles.datePickerContainer}>
                        <DatePicker
                            date={date}
                            onDateChange={handleDateChange}
                            mode="date"
                            textColor="white" // Set text color to white
                            androidVariant="nativeAndroid"
                            onConfirm={(date) => {
                                setOpen(false);
                                handleDateChange(date);
                            }}
                            onCancel={() => setOpen(false)}
                            color={'red'}
                            theme={'dark'}
                        />
                    </View>
                   
                </View>
            </CustomModal>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: color.backgroundColor,
    },
    titleContainer: {
        width: wp('95%'),
        alignSelf: 'center',
        marginTop: hp('1%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: '700',
        width: wp('80%'),
        textAlign: 'center',
        fontFamily: 'Inter'
    },
    inputContainer: {
        width: '100%',
        height: 55,
        marginTop: '10%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    input: {
        backgroundColor: color.inputFieldColor,
        width: wp('92%'),
        borderRadius: 15,
        borderColor: '#414142',
        borderWidth: 1,
        color: '#ffffff33',
        fontSize: 16,
        fontWeight: '500',
        paddingLeft: wp(5),
        fontFamily: 'inter'
    },
    touchableArea: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ButtonContainer: {
        backgroundColor: '#ffffff33',
        height: RFPercentage(7),
        width: wp('92%'),
        textAlign: 'center',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        // marginBottom: '5%',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    conTinueText: {
        alignItems: 'center',
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'inter'
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundColor: 'red',

    },
    modalContainer: {
        backgroundColor: '#090A12',
        height: '50%', // Set modal height to cover half the screen
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 10,
        paddingHorizontal: 20,
        zIndex: 1000,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'center'
    },
    modalHeaderContainer: {
        width: '100%',
        alignItems: 'center'
    },
    modalContent: {
        width: '100%',
        alignItems: 'center',
    },
    datePickerContainer: {
        backgroundColor: '#090A12',
        padding: 20,
        color: 'white',
        width: '100%',
        alignItems: 'center'
    },
});

export default DateOfBirth;
