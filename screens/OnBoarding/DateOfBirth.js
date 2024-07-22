import React, { useState, useRef, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Modal,
    KeyboardAvoidingView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { color } from '../../src/styles/color';
import Header from '../Components/Header';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import DatePicker from 'react-native-date-picker';


const DateOfBirth = () => {
      const navigation = useNavigation();
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(true);
    const dobRef = useRef(null);
    const handleChange = (value) => {
        setDate(value);
        dobRef.current.focus();


    };
    const calculateAge = (birthDate) => {
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          return age - 1;
        }
        return age;
      };

    function moveNext() {
        console.log(">>>>>>>>dfdfde",date)
        const age = calculateAge(date);
    if (age >= 17) {
      navigation.navigate('UserNameScreen'); // Navigate if age is 17 or older
    } else {
      alert("You must be at least 17 years old to continue.");
    }
        // navigation.navigate('UserNameScreen')
    }
 


    {
        return (
            <SafeAreaView style={styles.safeArea}>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <Header />

                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>What's your birthday?</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                            style={styles.input}
                            // onChangeText={value => setV1(value)}
                            onChangeText={value => handleChange(value)}
                            placeholder='MM-DD-YY'
                            placeholderTextColor={color.placeholderColor}

                            keyboardAppearance="dark"
                            textColor="white" // Text color
                            // value={name}
                            // ref={nameRef}
                        />
                           
                        </View>



                        {/* <View style={styles.ButtonContainer}>
                            <TouchableOpacity onPress={moveNext}>
                                <Text style={styles.conTinueText}>Continue</Text>
                            </TouchableOpacity>
                        </View> */}
                        <Modal
                transparent={true}
                visible={open}
                animationType="slide"
                onRequestClose={() => setOpen(false)}
            >
                <View style={styles.modalContainer}>
                <View style={styles.ButtonContainer}>
                            <TouchableOpacity onPress={moveNext}>
                                <Text style={styles.conTinueText}>Continue</Text>
                            </TouchableOpacity>
                        </View>
                    <View style={styles.datePickerContainer}>
                        <DatePicker
                            date={date}
                            onDateChange={setDate}
                            mode="date"
                                    textColor="white" // Set text color to white
                            androidVariant="nativeAndroid"
                            onConfirm={(date) => {
                                setOpen(false);
                                setDate(date);
                            }}
                            onCancel={() => setOpen(false)}
                            color={'red'}
                            theme={'dark'}

                        />
                        {/* <TouchableOpacity style={styles.confirmButton} onPress={() => setOpen(false)}>
                            <Text style={styles.confirmButtonText}>Confirm</Text>
                        </TouchableOpacity> */}
                    </View>
                </View>
            </Modal>

                    </View>
                </KeyboardAvoidingView>
              

            </SafeAreaView>

        );
    }



}
const styles = StyleSheet.create({

    safeArea: {
        flex: 1,
        backgroundColor: color.backgroundColor,

    },
    container: {
        // flex: 1,
    },
    background: {
        flex: 1,
    },
    titleContainer: {
        width: wp('95%'),
        alignSelf: 'center',
        marginTop: hp('1%'),
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'red'
    },
    titleText: {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: '700',
        width: wp('70%'),
        textAlign: 'center',
        fontFamily: 'Inter'
        // font:'urbanist'
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
        // backgroundColor:'red',

    },
    input: {
        backgroundColor: color.inputFieldColor,
        // width: '96%',
        width: wp('92%'),

        borderRadius: 15,
        borderColor: '#414142',
        borderWidth: 0.5,
        color: color.placeholderColor,
        fontSize: 16,
        fontWeight: '500',
        paddingLeft: wp(5),
        fontFamily: 'inter'


    },
    ButtonContainer: {
        backgroundColor: color.buttonColor,
        // height:hp('7%'),
        height: RFPercentage(7),
        // width:363,

        width: wp('92%'),
        // marginTop: hp(28),
        textAlign: 'center',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1, // Ensure button is above modal
        marginBottom:'10%'




    },
    conTinueText: {
        alignItems: 'center',
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'inter'

    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.0)',
        alignItems:'center',
        width:'100%'
        
    },
    datePickerContainer: {
        backgroundColor: '#090A12',
        // backgroundColor:'white',
        padding: 20,
        color:'white',
        paddingBottom:RFPercentage(10),
        width:'94%',
        alignItems:'center'
        // paddingtop:RFPercentage(20)
       
    },
    confirmButton: {
        backgroundColor: color.buttonColor,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        marginTop: 10,
    },
    confirmButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'inter',
    },

});
export default DateOfBirth;