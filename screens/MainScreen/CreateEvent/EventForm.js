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
    Modal


} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useDispatch } from 'react-redux';

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
import { setEventData } from '../../../src/store/slices/eventDataSlice/eventDataSlice';
// CustomTextInput


const EventForm = ({ navigation }) => {
    //   const navigation = useNavigation();
    const dispatch = useDispatch();

    const [date, setDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [isDatePickerVisible, setDatePickerVisible] = useState(false); // State to control date picker visibility
    const [title, setTitle] = useState('')//200 Park Lane, Anytown, CA 98765
    const [location, setlocation] = useState('200 Park Lane, Anytown, CA 98765')//200 Park Lane, Anytown, CA 98765
    const [description, setDescription] = useState('')//200 Park Lane, Anytown, CA 98765

    const [modalVisible, setModalVisible] = useState(false); // Start with the modal visible
    const [privacy, setPrivacy] = useState('Public'); // Default privacy set to 'Public'
    const [privacyIcon, setPrivacyIcon] = useState(require('../../../src/assets/images/EventModule/publicImage.png')); // Default icon
    const [leftArrow, setLeftArrow] = useState(require('../../../src/assets/images/LeftArrow.png'));
    const [checklistData, setChecklistData] = useState([
        { id: '1', icon: require('../../../src/assets/images/EventModule/publicImage.png'), title: 'Public', description: 'Anyone can see', selected: true },
        { id: '2', icon: require('../../../src/assets/images/EventModule/PrivateIcon.png'), title: 'Private', description: 'Only those who are invited', selected: false },
    ]);
    const [isEndTimeVisible, setEndTimeVisible] = useState(false); // State to control end time field visibility

    const handleOptionSelect = (id) => {
        const updatedData = checklistData.map(item =>
            item.id === id ? { ...item, selected: !item.selected } : { ...item, selected: false }
        );
        setChecklistData(updatedData);
        const selectedOption = updatedData.find(item => item.selected);
        // setPrivacy(selectedOption.title);
        // setPrivacyIcon(selectedOption.icon);
        if (selectedOption) {
            setPrivacy(selectedOption.title);
            setPrivacyIcon(selectedOption.icon);
        }
        setModalVisible(false);
    };
    const onPressModalClose = () => {
        setModalVisible(false)

    };
    const createEventPress = () => {
        // navigation.navigate('InviteFriend')
        const eventData = { date, endDate, title, location, description, privacy };

        dispatch(setEventData({ date, endDate, title, location,description,privacy }));
        console.log(">>>>>>>>>>>",eventData)

        navigation.navigate('InviteFriend');
    };

    const handleDescriptionChange = (value) => {
        setDescription(value);
    };
    const handleDateConfirm = (selectedDate) => {
        setDate(selectedDate);
        setDatePickerVisible(false); // Hide the date picker after selecting a date
    };
    const handleTitleChange = (value) => {
        setTitle(value);
        // nameRef.current.focus();


    };
    const handleEndTimeConfirm = (selectedDate) => {
        setEndDate(selectedDate);
        // setEndTimeVisible(false);
    };
    const endTimePress = () => {
        setEndTimeVisible(true);

    };
    const removePress = () => {
        setEndTimeVisible(false);

    };

    const renderChecklistItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleOptionSelect(item.id)} style={styles.checklistItem}>
            <Image source={item.icon} style={styles.checklistIcon} />
            <View style={styles.checklistTextContainer}>
                <Text style={styles.checklistTitle}>{item.title}</Text>
                <Text style={styles.checklistDescription}>{item.description}</Text>
            </View>
            <Image
                source={item.selected ? require('../../../src/assets/images/EventModule/checked.png') : require('../../../src/assets/images/EventModule/unCheck.png')}
                style={styles.checklistCheckbox}
            />
        </TouchableOpacity>
    );



    {
        return (
            <SafeAreaView style={styles.safeArea}>
                <KeyboardAwareScrollView
                    showsVerticalScrollIndicator={false}  // Hide vertical scrollbar
                    showsHorizontalScrollIndicator={false}>

                    <Header title={"Create Event"} />
               
                    {/* <EventUpload /> */}
                    <Image source={require('../../../src/assets/images/EventModule/eventMain.png')}
                        // resizeMode={'contain'}
                        resizeMode="CONTAIN"

                        style={styles.image} />
                        <TouchableOpacity style={{backgroundColor:'white',        alignItems:'center'
,borderRadius:19,position:'absolute',top:'20%',alignSelf:'center',alignItems:'center',justifyContent:'center',width:wp(45),height:hp(4)}}>
                            <Text style={styles.imageUploadText}>Upload event banner</Text>
                        </TouchableOpacity>
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
                            {(isEndTimeVisible == 0) ?
                                <Text style={styles.fieldTitle}>Date and Time<Text style={{ color: 'red' }}>*</Text></Text>
                                :
                                <Text style={styles.fieldTitle}>Start Time<Text style={{ color: 'red' }}>*</Text></Text>

                            }
                            {/* <Text style={styles.fieldTitle}>Date and Time<Text style={{ color: 'red' }}>*</Text></Text> */}
                            <TouchableOpacity onPress={() => setDatePickerVisible(true)}>
                                <TextInput
                                    style={styles.dateInput}
                                    editable={false} // Prevent manual input
                                    value={date.toLocaleString()} // Display the selected date
                                    pointerEvents="none" // Disable pointer events to prevent any issues with TextInput focus

                                />
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



                        {isEndTimeVisible && (
                            <View style={styles.fieldWrapper}>
                                <Text style={styles.fieldTitle}>End Time</Text>
                                <TouchableOpacity
                                    onPress={() => setEndTimeVisible(true)}
                                >
                                    <TextInput
                                        style={styles.dateInput}
                                        editable={false}
                                        value={endDate.toLocaleString()}
                                        pointerEvents="none"
                                    />
                                </TouchableOpacity>
                                <DatePicker
                                    modal
                                    open={isEndTimeVisible}
                                    date={endDate}
                                    mode="datetime"
                                    onConfirm={handleEndTimeConfirm}
                                    onCancel={() => setEndTimeVisible(false)}
                                    theme={'dark'}
                                    textColor="white"
                                />
                            </View>
                        )}

                        {(isEndTimeVisible == 0) ?
                            <TouchableOpacity style={styles.endTimeContainer} onPress={endTimePress}>
                                <Text style={styles.endTimeText}>+ End Time{isEndTimeVisible}</Text>
                            </TouchableOpacity> :
                            <TouchableOpacity style={styles.endTimeContainer} onPress={removePress}>
                                <Text style={styles.endTimeText}>Remove End Time{isEndTimeVisible}</Text>
                            </TouchableOpacity>
                        }




                        <View style={styles.fieldWrapper}>
                            <Text style={styles.fieldTitle}>Location <Text style={{ color: 'red' }}>*</Text></Text>
                            {/* <TextInput
                                style={styles.locationInput} 
                                placeholderTextColor={color.whiteColor}
                                readOnly={'true'}

                                placeholder='200 Park Lane, Anytown, CA 98765'/> */}
                            <View style={styles.inputContainer}>
                                {/* Icon */}
                                <Image
                                    source={require('../../../src/assets/images/location1x4.png')}
                                    style={styles.icon}
                                    resizeMode='Contain'
                                />
                                {/* TextInput */}
                                <TextInput
                                    style={styles.locationInput}
                                    placeholderTextColor={color.whiteColor}
                                    editable={false} // To make the input read-only
                                    placeholder="200 Park Lane, Anytown, CA 98765"
                                />
                            </View>
                        </View>
                        <View style={styles.fieldWrapper}>
                            <Text style={styles.fieldTitle}>Description</Text>
                            <TextInput
                                style={styles.descriptionInput}
                                placeholderTextColor={color.whiteWithfiftypercentOpacity}
                                placeholder='(optional)'
                                multiline={true}
                                numberOfLines={4}
                                value={description}
                                onChangeText={handleDescriptionChange}  // And this line

                            />
                        </View>
                        <View style={styles.fieldWrapper}>
                            <Text style={styles.fieldTitle}>Privacy <Text style={{ color: 'red' }}>*</Text></Text>
                            <TouchableOpacity style={styles.privacyTouch} onPress={() => setModalVisible(true)}>

                                {/* <TextInput
                                style={styles.PrivacyInput}
                                placeholderTextColor={color.whiteWithfiftypercentOpacity}
                                value={privacy}
                                editable={false}
                            /> */}
                                <Image source={privacyIcon} style={styles.privacyIcon} />
                                <Text style={styles.privacyText}>{privacy}</Text>
                                <Image source={leftArrow} style={styles.leftArrow} />

                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.ButtonContainer} onPress={createEventPress}>
                        <Text style={{ alignSelf: 'center', fontSize: 14, fontWeight: '700', fontFamily: 'Inter', color: color.whiteColor }}>
                            Create Event
                        </Text>
                    </TouchableOpacity>
                    {/* </ScrollView> */}




                </KeyboardAwareScrollView>
                {/* Modal Implementation */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalContainer}>

                        <View style={styles.modalContent}>
                            <TouchableOpacity style={styles.hideIcon} onPress={onPressModalClose}>
                                <Image
                                    source={require('../../../src/assets/images/bar1x4.png')}
                                    style={styles.barIcon}
                                    resizeMode='contain'
                                />
                            </TouchableOpacity>

                            <View style={{ alignItems: 'center', width: '100%' }}>
                                <FlatList
                                    data={checklistData}
                                    renderItem={renderChecklistItem}
                                    keyExtractor={item => item.id}
                                />
                            </View>
                            <TouchableOpacity style={styles.ButtonContainer1} >
                                <Text style={{ alignSelf: 'center', fontSize: 14, fontWeight: '700', fontFamily: 'Inter', color: color.whiteColor }}>
                                    Done
                                </Text>
                            </TouchableOpacity>


                        </View>
                    </View>
                </Modal>
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
    privacyIcon: {
        width: wp('8%'),
        height: wp('8%'),
        marginRight: wp('3%')
    },
    leftArrow: {
        width: wp('5%'),
        height: wp('5%'),
        marginRight: wp('3%'),
    },
    privacyText: {
        color: color.whiteColor,
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Inter',
        width: '80%'
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
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // position: 'relative',
        backgroundColor: color.inputFieldColor,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: color.whiteWithTenPercencentOpacity,
        marginTop: '2%',
        alignItems: 'center'

    },
    icon: {
        width: RFPercentage(1.6), // Adjust size as needed
        height: RFPercentage(1.7),
        alignItems: 'center',
        // top:1,
        marginLeft: 10, // Adjust as needed
        tintColor: color.whiteColor, // Optional: Change icon color
        // position: 'absolute', // To position the icon inside the input field
        // left: 10, // Distance from the left side
        // backgroundColor:'red'
    },

    locationInput: {
        backgroundColor: color.inputFieldColor,
        // width: wp('96%'),
        // borderRadius: 10,
        // borderColor: '#414142',
        // borderWidth: 1,
        paddingLeft: 5, // Add padding to make space for the icon

        // flex: 1,
        color: color.whiteColor,
        fontSize: 13,
        fontWeight: '500',
        paddingRight: 100,
        // paddingLeft: wp(5),
        fontFamily: 'inter',
        height: hp(6),
        // marginTop: '2%',
        alignItems: 'center'
    },
    descriptionInput: {
        backgroundColor: color.inputFieldColor,
        width: wp('96%'),
        borderRadius: 10,
        borderColor: '#414142',
        borderWidth: 1,
        color: color.whiteColor,
        fontSize: 13,
        fontWeight: '400',
        paddingLeft: wp(5),
        paddingTop: hp(1.5),
        fontFamily: 'inter',
        height: hp(8),
        marginTop: '2%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    imageUploadText:{
        fontsize:11,
        fontWeight:'400',
        fontFamily:'inter',
        color:color.balckFontColor,
    },
    PrivacyInput: {
        backgroundColor: color.inputFieldColor,
        width: wp('96%'),
        borderRadius: 10,
        borderColor: '#414142',
        borderWidth: 1,
        color: color.whiteColor,
        fontSize: 13,
        fontWeight: '400',
        paddingLeft: wp(5),
        paddingTop: hp(1.5),
        fontFamily: 'inter',
        height: hp(6),
        marginTop: '2%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        // alignItems: 'center',
        // backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background
    },
    modalContent: {
        width: '100%',
        height: hp(25), // 60% of the screen height
        backgroundColor: color.inputFieldColor,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        // padding: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    hideIcon: {
        // marginTop: hp('1%'),
        marginBottom: hp('2%'),//5
        // backgroundColor:'red',
        width: '40%',
        height: '5%',
        justifyContent: 'center',

    },
    Notificationimage: {
        width: wp('35%'),
        marginBottom: hp('2%'),
        height: hp('20%'),
        // backgroundColor:'pink'


    },
    modalTitle: {
        fontSize: 28,
        fontWeight: '700',
        fontFamily: 'Inter',
        color: color.whiteFontColor,
        marginBottom: hp('2.25%'),
        // lineHeight:128.646,



    },
    barIcon: {
        width: 50,
        height: 4,
        // alignItems:'center'
        alignSelf: 'center',
        // backgroundColor:'pink'


    },
    modalDescription: {
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Inter',
        color: color.whiteFontColor,
        textAlign: 'center',
        // marginBottom: hp('8.5%'),
        // lineHeight:128.646



    },
    fieldWrapper: {
        marginBottom: hp('2%'),
    },
    endTimeContainer: {
        // backgroundColor: 'red',
        alignSelf: 'center',
        // marginTop: hp('2'),
        marginBottom: hp('2'),

    },
    endTimeText: {
        alignSelf: 'center',
        color: color.privacyPolicyColor,
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'Inter'
    },
    image: {
        height: 350,
        width: '100%',
        marginTop:hp(3)
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
        fontSize: 13,
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
    checklistItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: hp('1%'),
        // borderBottomWidth: 1,
        borderBottomColor: '#fff', // or any color you prefer
        width: '100%',
        paddingHorizontal: wp('5%'),
    },
    checklistIcon: {
        width: wp('8%'),
        height: wp('8%'),
        marginRight: wp('5%'),
    },
    checklistTextContainer: {
        // flex: 1,
        width: '80%'
    },
    checklistTitle: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Inter',
        fontWeight: '500'


    },
    checklistDescription: {
        color: color.whiteWithfiftypercentOpacity,
        fontSize: 12,
        fontFamily: 'Inter',
        fontWeight: '400'
    },
    checklistCheckbox: {
        width: wp('5%'),
        height: wp('5%'),
    },
    privacyTouch: {
        width: wp(100),
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: color.inputFieldColor,
        // width: wp('96%'),
        borderRadius: 10,
        height: hp('6%'),
        paddingLeft: 10,
        borderColor: '#414142',
        borderWidth: 1,
        color: color.whiteColor,
        fontSize: 13,
        fontWeight: '400',
        marginTop: '2%',
        marginBottom: '3%',
        width: '100%'



        // height:6,
    },
    ButtonContainer: {
        backgroundColor: color.onBoardingButton,
        alignSelf: 'center',
        justifyContent: 'center',
        width: '95%',
        height: hp(6),
        borderRadius: 10

    },
    ButtonContainer1: {
        backgroundColor: color.onBoardingButton,
        alignSelf: 'center',
        justifyContent: 'center',
        width: '95%',
        height: hp(6),
        borderRadius: 10,
        marginTop: '5%'
    }



});
export default EventForm;