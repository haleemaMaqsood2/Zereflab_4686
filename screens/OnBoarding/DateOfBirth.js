import React, { useState,useEffect, useRef } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Modal,
    KeyboardAvoidingView,
    Platform,
    Dimensions,
    Keyboard
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { color } from '../../src/styles/color';
import Header from '../Components/Header';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from "react-native-responsive-fontsize";
import DatePicker from 'react-native-date-picker';
import HeadingText from '../Components/HeadingText';
import { useDispatch } from 'react-redux';
import { setDateOfBirth } from '../../src/store/slices/userSlice';

const DateOfBirth = () => {
    const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

    const navigation = useNavigation();
    // const [date, setDate] = useState(new Date());
    const [date, setDate] = useState(new Date(2007, 0, 1));
    const dispatch = useDispatch(); // Initialize useDispatch hook

    const [open, setOpen] = useState(true);
    const [formattedDate, setFormattedDate] = useState('');
    const dobRef = useRef(null);
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const [keyboardVisible, setKeyboardVisible] = useState(false);
    const [age, setAge] = useState(0);
    const [isOldEnough, setIsOldEnough] = useState(false); // New state for age check

    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
        const formatted = formatDate(selectedDate);
        setFormattedDate(formatted);
        const age = calculateAge(selectedDate);
        setIsOldEnough(age >= 17);

    };

    const formatDate = (date) => {
        const day = date.getDate();
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const month = monthNames[date.getMonth()]; // Get the month name
        // const month = date.getMonth() + 1; // Months are zero indexed
        const year = date.getFullYear();
        return `${month} ${day}, ${year}`;
    };
    useEffect(() => {
        // dobRef.current.focus();

        const showSubscription = Keyboard.addListener('keyboardWillShow', (event) => {
            const keyboardHeightInPercentage = (event.endCoordinates.height / screenHeight) * 100;
            setKeyboardVisible(true);
            setKeyboardHeight(keyboardHeightInPercentage.toFixed(1));
        });
        const hideSubscription = Keyboard.addListener('keyboardWillHide', () => {
            setKeyboardVisible(false);
            setKeyboardHeight(0);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, [screenHeight]);
   

    const calculateAge = (birthDate) => {
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            return age - 1;
        }
        return age;
    };
  const formatDateYYMMDD = (date) => {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0'); // Ensure 2 digits
        const day = String(d.getDate()).padStart(2, '0'); // Ensure 2 digits
      
        return `${year}-${month}-${day}`;
      };

    const moveNext = () => {
        if (isOldEnough) {
            console.log("DateInput  screen>>>>>>>",formatDate(date))
            const dateFormated=formatDateYYMMDD(date);
            dispatch(setDateOfBirth(dateFormated))

            navigation.navigate('UserNameScreen');
        } else {
            alert("You must be at least 17 years old to continue.");
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView >
                <Header />
                <View > 
                <HeadingText title={"What's your birthday?"} />

                </View>

                <View style={styles.titleContainer}>
                    

                    {/* <Text style={styles.titleText}>What's your birthday?</Text> */}
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
                            readOnly={true}
                            
                        />

                    </View>
                    {/* <View style={{height:(screenHeight < 890 ? hp('33.5') : hp('37.5%')),justifyContent:'flex-end'}}> */}
                   {
                    screenHeight>700?
                    <View 
                    style={
                        {
                            height:(screenHeight < 890 ? hp('33.5') : hp('37.2%')),
                            // marginBottom:100,
                        justifyContent:'flex-end',
                        // backgroundColor:'pink'
                        }}>

                    {/* <View style={[styles.ButtonContainer, { backgroundColor: isOldEnough? color.onBoardingButton : '#ffffff33' }]}> */}
                    <View style={[styles.ButtonContainer, { backgroundColor: formattedDate? color.onBoardingButton : '#ffffff33' }]}>

                        <TouchableOpacity onPress={moveNext} style={styles.touchableArea}>
                            <Text style={styles.conTinueText}>Continue</Text>
                        </TouchableOpacity>
                    </View> 
                    </View>
                    :
                    <View 
                    style={
                        {
                            height:hp(34.7),
                            // marginBottom:100,
                        justifyContent:'flex-end',
                        // backgroundColor:'pink'
                        }}>

                    {/* <View style={[styles.ButtonContainer, { backgroundColor: isOldEnough? color.onBoardingButton : '#ffffff33' }]}> */}
                    <View style={[styles.ButtonContainer, { backgroundColor: formattedDate? color.onBoardingButton : '#ffffff33' }]}>

                        <TouchableOpacity onPress={moveNext} style={styles.touchableArea}>
                            <Text style={styles.conTinueText}>Continue</Text>
                        </TouchableOpacity>
                    </View> 
                    </View>

                   }
                  

                    <View style={{alignSelf:'center',position:'absolute',top:hp('47%'),height:(screenHeight*0.3)}}>
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
            </KeyboardAvoidingView>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: color.backgroundColor,
    },
    container: {},
    background: {
        flex: 1,
    },
    titleContainer: {
        width: wp('95%'),
        alignSelf: 'center',
        // marginTop: hp('12%'),//1
        justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor:'red'
    },
    titleText: {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: '700',
        width: wp('90%'),
        textAlign: 'center',
        fontFamily: 'Inter'
    },
    textInput: {
        width: wp('70%'),
        height: hp("60%"),
    },
    inputContainer: {
        width: '100%',
        height: hp(6),
        marginTop: '10%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    input: {
        backgroundColor: color.inputFieldColor,
        width: wp('92%'),
        borderRadius: 10,
        borderColor: '#414142',
        borderWidth: 1,
        color: '#ffffff',
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
    modalHeaderContainer: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? '7%' : '1%',
        width: '100%',
        zIndex: 2, // Ensures the header stays on top
    },
    ButtonContainer: {
        backgroundColor: '#ffffff33',
        height: RFPercentage(6),
        width: wp('92%'),
        textAlign: 'center',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        marginBottom: '3.5%',//10
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        backgroundColor: '#090A12',
        height: '32.5%', // Set modal height to cover half the screen
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        // paddingTop: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    datePickerContainer: {
        backgroundColor: '#090A12',
        padding: 20,
        color: 'white',
        width: '100%',
        alignItems: 'center'
    },
    headerOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2,
    },
});

export default DateOfBirth;
