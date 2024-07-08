import React, { useState, useRef } from 'react';
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
    Button
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Header from './Components/Header';
import DatePicker from 'react-native-date-picker';
// import  CountryPicker, {CountryCode} from 'react-native-country-picker-modal';
import PhoneInput from "react-native-phone-number-input";

const SignUp = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');

    const [value, setValue] = useState();
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const phoneInput = useRef<PhoneInput>(null);


    const [selectedGender, setSelectedGender] = useState(null);
    const phoneRef = useRef(null);
    const [phone, setPhone] = useState()
    const [formattedValue, setFormattedValue] = useState("");

    const genders = [
        { id: 1, label: 'Male' },
        { id: 2, label: 'Female' },
        { id: 3, label: 'Rather not to say' },
    ];
    function signUp() {
        navigation.navigate('OnBoarding2')
    }

    {
        return (
            //    <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={['#2b2043', '#000000']}
                style={styles.background}
                locations={[0, 0.3]}  // 90% of the gradient is black
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
            >
                <Header title="Sign Up" index={1} />
                <View style={styles.container}>
                    {/* <Text style={styles.titleText}>SignUp</Text> */}

                    <Text style={styles.fieldName}>Full name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Type your full name here"
                        placeholderTextColor="#5E6368"

                        onChangeText={value => setName(value)}
                        value={name}
                    />
                    <Text style={styles.fieldName}>Contact</Text>

                    {/* <TextInput
                        style={styles.input}
                        placeholder="Type your full name here"
                        placeholderTextColor="#5E6368"

                        onChangeText={value => setContact(value)}
                        value={contact}
                    /> */}
                    <PhoneInput
                    ref={phoneRef}
                    defaultValue={value}
                    defaultCode="PK"
                    layout="first"
                    onChangeText={(text) => {
                    setValue(text);
                    }}
                    onChangeFormattedText={(text) => {
                    setFormattedValue(text);
                    }}
                    withDarkTheme
                    withShadow
                    autoFocus
                    containerStyle={styles.phoneInput}
                    textInputStyle={{height:50,backgroundColor: '#1a1925',color:'white' } }
                    textContainerStyle={{backgroundColor:' #1a1925',borderRadius:20,height:5,color:"#ffffff",paddingTop:'9%',color:'white'}}


                />


                    <Text style={styles.fieldName}>Birthday</Text>

                    <TouchableOpacity style={styles.DateInput} onPress={() => setOpen(true)}>
                        <Text style={{ color: "#5E6368" }}>DD-MM-YY</Text>
                        <Image
                            source={require('../src/assets/downArrow.png')}
                            style={{ marginTop: '2%' }}
                        />
                    </TouchableOpacity>
                    <DatePicker
                        modal
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                    />
                    <Text style={styles.fieldName}>Gender</Text>

                    <View style={styles.genderContainer}>
                        {genders.map((gender) => (
                            <TouchableOpacity
                                key={gender.id}
                                style={[
                                    styles.genderButton,
                                    selectedGender === gender.id && styles.selectedGenderButton,
                                ]}
                                onPress={() => setSelectedGender(gender.id)}
                            >
                                <Text
                                    style={[
                                        styles.genderText,
                                        selectedGender === gender.id && styles.selectedGenderText,
                                    ]}
                                >
                                    {gender.label}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>






                    <TouchableOpacity style={styles.buttonStyle}
                        onPress={signUp}
                    >
                        <LinearGradient
                            // colors={['#ff1493', '#8a2be2']}//CB3DC8
                            colors={['#CB3DC8', '#8A4BD3']}//CB3DC8

                            style={styles.linearGradient}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                        >
                            <Text style={styles.buttonStyle}>Create an Account</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <View style={styles.otherAccount}>
                        <Text style={styles.fieldName}>Already have an account?</Text>
                        <Text style={styles.SignUpText}>SignUp</Text>
                    </View>



                </View>
            </LinearGradient>

        );
    }

}
const styles = StyleSheet.create({
    container: {
        width: '94%',
        alignSelf: 'center',
        marginTop: '5%'
    },
    background: {
        height: '100%'
        // flex: 1,
    },
    titleText: {
        color: 'white',
        fontSize: 28,
        fontWeight: '300',
        textAlign: 'center'
        // font:'urbanist'
    },
    fieldName: {
        color: 'white',
        font: 16,

    },
    DateInput: {
        backgroundColor: '#1a1925',
        // width:'95%',
        borderRadius: 10,
        borderColor: 'grey',
        borderWidth: 0.3,
        marginTop: '3%',
        marginBottom: '3%',
        padding: '3.5%',
        height: '8.5%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        backgroundColor: '#1a1925',
        // width:'95%',
        borderRadius: 10,
        borderColor: 'grey',
        borderWidth: 0.3,
        marginTop: '3%',
        marginBottom: '3%',
        paddingLeft: 10,
        color:'white' // Adjust the padding-left as needed

        // paddingLeft:'10%'
    }, 
    phoneInput: {
        width:'100%',
        backgroundColor: '#1a1925',
        borderRadius: 10,
        borderColor: 'grey',
        borderWidth: 0.3,
        marginTop: 8,
        marginBottom: 16,
        paddingLeft: 10,
        color: 'white',
        height:'10%',
        paddingHorizontal: 10,

    },
    buttonStyle: {
        alignSelf: 'center',
        color: "white",
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500',
        // backgroundColor:'#8a4bd3',
        width: "70%",
    },
    linearGradient: {
        paddingVertical: 13,
        borderRadius: 25,
        alignItems: 'center',
    },
    SignUpText: {
        color: '#FF44F8',
        // fontsize:14,
        textDecorationLine: 'underline', // Underline text

    },
    genderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        marginBottom: '40%',
        marginTop: '5%',
        
    },
    genderButton: {
        padding: 10,
        backgroundColor: '#1a1925',
        color: 'white',
        borderRadius: 5,
        width:'31%'
    },
    selectedGenderButton: {
        borderColor: '#8a4bd3', // Highlight color for selected gender
        borderWidth: 0.5,
    },
    genderText: {
        color: '#555c73',
        textAlign:'center',

    },
    selectedGenderText: {
        color: '#555c73',
    },
    otherAccount: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '5%'
    },
});
export default SignUp;