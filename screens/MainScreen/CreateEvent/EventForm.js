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
    FlatList,
    KeyboardAvoidingView,
    

} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
// import AddFriendList from '../Components/AddFriendList1';
import DatePicker from 'react-native-date-picker';

import Header from '../Components/Header';
import { color } from '../../../src/styles/color';
import AddFriendList from '../../Components/AddFriendList';
import EventUpload from '../../Components/EventUpload';
import CustomTextInputMain from '../../Components/CustomTextInputMain';
// CustomTextInput


const EventForm = ({ navigation }) => {
    //   const navigation = useNavigation();
    const [date, setDate] = useState(new Date());
    const [isDatePickerVisible, setDatePickerVisible] = useState(false); // State to control date picker visibility
    const [title, setTitle] = useState('')

    const handleDateConfirm = (selectedDate) => {
        setDate(selectedDate);
        setDatePickerVisible(false); // Hide the date picker after selecting a date
    };
    const handleTitleChange = (value) => {
        setTitle(value);
        // nameRef.current.focus();


    };




    {
        return (
            <SafeAreaView style={styles.safeArea}>
                <KeyboardAwareScrollView
                 showsVerticalScrollIndicator={false}  // Hide vertical scrollbar
                 showsHorizontalScrollIndicator={false}>

                <Header title={"Create Event"} />
                {/* <ScrollView contentContainerStyle={styles.scrollViewContent}
                    showsVerticalScrollIndicator={false}  // Hide vertical scrollbar
                    showsHorizontalScrollIndicator={false} // Hide horizontal scrollbar
                > */}
                    {/* <EventUpload /> */}
                    <Image source={require('../../../src/assets/images/EventModule/eventMain.png')}
                        // resizeMode={'contain'}
                        resizeMode="CONTAIN"

                        style={styles.image} />
                    <View style={styles.fieldsContainer}>
                        <View style={styles.fieldWrapper}>
                            <Text style={styles.fieldTitle}>Event Title <Text style={{ color: 'red' }}>*</Text></Text>
                            <CustomTextInputMain
                                value={title}
                                onChangeText={handleTitleChange}
                                placeholder=''
                                placeholderTextColor={color.placeholderColor}

                            // ref={}
                            />
                        </View>
                        <View style={styles.fieldWrapper}>
                            <Text style={styles.fieldTitle}>Date and Time <Text style={{ color: 'red' }}>*</Text></Text>
                            <TouchableOpacity onPress={() => setDatePickerVisible(true)}>
                                <TextInput
                                    style={styles.dateInput}
                                    editable={false} // Prevent manual input
                                    value={date.toLocaleString()} // Display the selected date
                                    pointerEvents="none" // Disable pointer events to prevent any issues with TextInput focus

                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.endTimeContainer} onPress={() => setDatePickerVisible(true)}>
                                <Text style={styles.endTimeText}>+ End Time</Text>
                            </TouchableOpacity>
                            <DatePicker
                                modal
                                open={isDatePickerVisible}
                                date={date}
                                mode="datetime"
                                onConfirm={handleDateConfirm}
                                onCancel={() => setDatePickerVisible(false)}
                                theme={'dark'}
                                textColor="white" // Set text color to white


                            />
                        </View>
                        <View style={styles.fieldWrapper}>
                            <Text style={styles.fieldTitle}>Location <Text style={{ color: 'red' }}>*</Text></Text>
                            <TextInput
                                style={styles.locationInput} 
                                placeholderTextColor={color.whiteColor}
                                readOnly={'true'}

                                placeholder='200 Park Lane, Anytown, CA 98765'/>
                        </View>
                        <View style={styles.fieldWrapper}>
                            <Text style={styles.fieldTitle}>Description</Text>
                            <TextInput
                                style={styles.descriptionInput} 
                                placeholderTextColor={color.whiteWithfiftypercentOpacity}
                                placeholder='(optional)'
                                multiline={4}
/>
                        </View>
                        <View style={styles.fieldWrapper}>
                            <Text style={styles.fieldTitle}>Privacy <Text style={{ color: 'red' }}>*</Text></Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.ButtonContainer}>
                        <Text style={{ alignSelf: 'center', fontSize: 14, fontWeight: '700', fontFamily: 'Inter', color: color.whiteColor }}>
                            Create Event
                        </Text>
                    </TouchableOpacity>
                {/* </ScrollView> */}




                </KeyboardAwareScrollView>

            </SafeAreaView>

        );
    }



}
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: color.backgroundColor,
    },
    fieldTitle: {
        fontSize: 14,
        fontFamily: 'Inter',
        color: 'white',
        fontWeight: 'bold'
    },
    scrollViewContent: {
        // flexGrow: 1,
        width: '100%',
        paddingBottom: hp('2%'), // Add padding at the bottom for spacing
    },
    fieldsContainer: {
        paddingHorizontal: wp('2%'),
        marginTop: hp('2%'),
    },
    locationInput:{
        backgroundColor: color.inputFieldColor,
        width: wp('96%'),
        borderRadius: 10,
        borderColor: '#414142',
        borderWidth: 1,
        color: color.whiteColor,
        fontSize: 16,
        fontWeight: '500',
        paddingLeft: wp(5),
        fontFamily: 'inter',
        height: hp(6),
        marginTop: '2%',
    },
    descriptionInput:{
        backgroundColor: color.inputFieldColor,
        width: wp('96%'),
        borderRadius: 10,
        borderColor: '#414142',
        borderWidth: 1,
        color: color.whiteColor,
        fontSize: 16,
        fontWeight: '500',
        paddingLeft: wp(5),
        fontFamily: 'inter',
        height: hp(8),
        marginTop: '2%',
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    fieldWrapper: {
        marginBottom: hp('2%'),
    },
    endTimeContainer: {
        // backgroundColor: 'red',
        alignSelf: 'center',
        marginTop:hp('2'),
        marginBottom:hp('2'),

    },
    endTimeText: {
        alignSelf: 'center',
        color:color.privacyPolicyColor,
        fontSize:14,
        fontWeight:'500',
        fontFamily:'Inter'
    },
    image: {
        height: 350,
        width: '100%'
    },
    input: {
        backgroundColor: color.inputFieldColor,
        height: hp(6),
        borderWidth: 1,
        borderRadius: 10,
        marginTop: '2%',
        borderColor: color.whiteWithTenPercencentOpacity
    },
    dateInput: {
        backgroundColor: color.inputFieldColor,
        // width: wp('96%'),
        borderRadius: 10,
        height: hp(6),
        marginTop: hp('1%'),

        borderColor: '#414142',
        borderWidth: 1,
        color: color.whiteColor,
        fontSize: 16,
        fontWeight: '500',
        paddingLeft: wp(5),
        fontFamily: 'inter',
    },
    // descriptionInput: {
    //     backgroundColor: color.inputFieldColor,
    //     height: hp(7),
    //     borderWidth: 1,
    //     borderRadius: 10,
    //     marginTop: '2%',
    //     borderColor: color.whiteWithTenPercencentOpacity
    // },
    ButtonContainer: {
        backgroundColor: color.onBoardingButton,
        alignSelf: 'center',
        justifyContent: 'center',
        width: '95%',
        height: hp(6),
        borderRadius: 10
    }



});
export default EventForm;