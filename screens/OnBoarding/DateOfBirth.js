// import React, { useState, useRef, useEffect } from 'react';
// import {
//     SafeAreaView,
//     ScrollView,
//     StatusBar,
//     StyleSheet,
//     Text,
//     useColorScheme,
//     View,
//     TextInput,
//     TouchableOpacity,
//     Image,
//     Modal,
//     KeyboardAvoidingView,
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import { useNavigation, useFocusEffect } from '@react-navigation/native';
// import { color } from '../../src/styles/color';
// import Header from '../Components/Header';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
// import DatePicker from 'react-native-date-picker';

// const DateOfBirth = () => {
//     const navigation = useNavigation();
//     const [date, setDate] = useState(new Date());
//     const [open, setOpen] = useState(true);
//     const [formattedDate, setFormattedDate] = useState('');
//     const dobRef = useRef(null);

//     const handleDateChange = (selectedDate) => {
//         setDate(selectedDate);
//         const formatted = formatDate(selectedDate);
//         setFormattedDate(formatted);
//     };

//     const formatDate = (date) => {
//         const day = date.getDate();
//         const month = date.getMonth() + 1; // Months are zero indexed
//         const year = date.getFullYear();
//         return `${month}-${day}-${year}`;
//     };

//     useFocusEffect(
//         React.useCallback(() => {
//             setOpen(true); // Open the date picker when screen is focused
//             return () => {
//                 setOpen(false); // Optionally close the picker when unfocused
//             };
//         }, [])
//     );

//     const calculateAge = (birthDate) => {
//         const today = new Date();
//         const age = today.getFullYear() - birthDate.getFullYear();
//         const monthDiff = today.getMonth() - birthDate.getMonth();
//         if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//             return age - 1;
//         }
//         return age;
//     };

//     const moveNext = () => {
//         const age = calculateAge(date);
//         if (age >= 17) {
//             setOpen(false);
//             navigation.navigate('UserNameScreen'); // Navigate if age is 17 or older
//         } else {
//             alert("You must be at least 17 years old to continue.");
//         }
//     };

//     return (
//         <SafeAreaView style={styles.safeArea}>
//             <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
//                 <Header />
//                 <View style={styles.titleContainer}>
//                     <Text style={styles.titleText}>What's your birthday?</Text>
//                     <View style={styles.inputContainer}>
//                         <TextInput
//                             style={styles.input}
//                             placeholder='MM-DD-YY'
//                             placeholderTextColor={color.placeholderColor}
//                             keyboardAppearance="dark"
//                             textColor="white" // Text color
//                             value={formattedDate}
//                             onFocus={() => setOpen(true)}
//                             ref={dobRef}
//                         />
//                     </View>

//                     <Modal
//                         transparent={true}
//                         visible={open}
//                         animationType="slide"
//                         onRequestClose={() => setOpen(false)}
//                     >
//                         <View style={styles.modalContainer}>
//                             <View style={styles.ButtonContainer}>
//                                 <TouchableOpacity onPress={moveNext} style={styles.touchableArea}>
//                                     <Text style={styles.conTinueText}>Continue</Text>
//                                 </TouchableOpacity>
//                             </View>
//                             <View style={styles.datePickerContainer}>
//                                 <DatePicker
//                                     date={date}
//                                     onDateChange={handleDateChange}
//                                     mode="date"
//                                     textColor="white" // Set text color to white
//                                     androidVariant="nativeAndroid"
//                                     onConfirm={(date) => {
//                                         setOpen(false);
//                                         handleDateChange(date);
//                                     }}
//                                     onCancel={() => setOpen(false)}
//                                     color={'red'}
//                                     theme={'dark'}
//                                 />
//                             </View>
//                         </View>
//                     </Modal>
//                 </View>

//             </KeyboardAvoidingView>
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     safeArea: {
//         flex: 1,
//         backgroundColor: color.backgroundColor,
//     },
//     container: {},
//     background: {
//         flex: 1,
//     },
//     titleContainer: {
//         width: wp('95%'),
//         alignSelf: 'center',
//         marginTop: hp('1%'),
//         justifyContent: 'center',
//         alignItems: 'center',
//     },

//     titleText: {
//         color: '#FFFFFF',
//         fontSize: 28,
//         fontWeight: '700',
//         width: wp('80%'),
//         textAlign: 'center',
//         fontFamily: 'Inter'
//     },
//     textInput: {
//         width: wp('70%'),
//         height: hp("60%"),
//     },
//     inputContainer: {
//         width: '100%',
//         height: 55,
//         marginTop: '10%',
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//     },
//     input: {
//         backgroundColor: color.inputFieldColor,
//         width: wp('92%'),
//         borderRadius: 15,
//         borderColor: '#414142',
//         borderWidth: 1,
//         color: '#ffffff33',
//         fontSize: 16,
//         fontWeight: '500',
//         paddingLeft: wp(5),
//         fontFamily: 'inter'
//     },
//     touchableArea: {
//         width: '100%',
//         height: '100%',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     ButtonContainer: {
//         backgroundColor: '#ffffff33',
//         height: RFPercentage(7),
//         width: wp('92%'),
//         textAlign: 'center',
//         borderRadius: 10,
//         alignItems: 'center',
//         justifyContent: 'center',
//         zIndex: 1,
//         marginBottom: '10%'
//     },
//     conTinueText: {
//         alignItems: 'center',
//         color: '#FFFFFF',
//         fontSize: 16,
//         fontWeight: '700',
//         fontFamily: 'inter'
//     },
//     modalContainer: {
//         flex: 1,
//         justifyContent: 'flex-end',
//         backgroundColor: 'rgba(0,0,0,0.0)',
//         alignItems: 'center',
//         width: '100%'
//     },
//     datePickerContainer: {
//         backgroundColor: '#090A12',
//         padding: 20,
//         color: 'white',
//         paddingBottom: RFPercentage(10),
//         width: '94%',
//         alignItems: 'center'
//     },
//     confirmButton: {
//         backgroundColor: color.buttonColor,
//         borderRadius: 10,
//         paddingVertical: 10,
//         paddingHorizontal: 20,
//         alignItems: 'center',
//         marginTop: 10,
//     },
//     confirmButtonText: {
//         color: '#FFFFFF',
//         fontSize: 16,
//         fontWeight: '700',
//         fontFamily: 'inter',
//     },
// });

// export default DateOfBirth;

import React, { useState, useRef } from 'react';
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
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { color } from '../../src/styles/color';
import Header from '../Components/Header';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from "react-native-responsive-fontsize";
import DatePicker from 'react-native-date-picker';

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
            <KeyboardAvoidingView >
                {/* <Header /> */}
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

                    <Modal
                        transparent={true}
                        visible={open}
                        animationType="none"
                        onRequestClose={() => setOpen(false)}
                    >
                        <View style={styles.modalHeaderContainer}>
                            <Header title="Date of Birth" />
                        </View>

                        <View style={styles.modalOverlay}>
                        <View style={styles.ButtonContainer}>
                                    <TouchableOpacity onPress={moveNext} style={styles.touchableArea}>
                                        <Text style={styles.conTinueText}>Continue</Text>
                                    </TouchableOpacity>
                                </View>
                            <View style={styles.modalContainer}>
                                
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
                        </View>
                    </Modal>

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
        marginTop: hp('10%'),//1
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
    textInput: {
        width: wp('70%'),
        height: hp("60%"),
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
        marginBottom: '3%',//10
        alignSelf:'center'
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
        height: '35%', // Set modal height to cover half the screen
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
