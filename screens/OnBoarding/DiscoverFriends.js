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
    KeyboardAvoidingView,
    DevToolsSettingsManager,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { color } from '../../src/styles/color';
import Header from '../Components/Header';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


const DiscoverFriends = ({ navigation }) => {
    //   const navigation = useNavigation();
    const [name, setName] = useState('');
    const [continuePress, setContinuePress] = useState(false)

    const nameRef = useRef(null);
    const handleChange = (value) => {
        setName(value);
        nameRef.current.focus();


    };
    function onPressContinue() {
        setContinuePress(true)
        // navigation.navigate('AddFriendScreen')
    }
    function moveNext() {
        navigation.navigate('AddFriendScreen')    }



    {
        return (
            <SafeAreaView style={styles.safeArea}>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <Header />

                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>Discover your friends</Text>







                    </View>
                    <View style={styles.ImageContainer}>
                        <Image
                            style={styles.image}
                            source={require('../../src/assets/images/discoverFriend.png')}
                            resizeMode="cover"
                        />
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.descriptionText}>Allow Where2 access to your contacts to help you find friends.</Text>
                        </View>
                    </View>


                    {(!continuePress) ?
                        <View style={styles.contineContainer}>
                            <TouchableOpacity style={styles.uploadContainer} onPress={onPressContinue}>
                                <Text style={styles.uploadText}>Continue</Text>

                            </TouchableOpacity>
                            <TouchableOpacity style={styles.SkipContainer} onPress={moveNext}>
                                <Text style={styles.skipText}>Skip</Text>

                            </TouchableOpacity>
                        </View> :
                        <View style={styles.modalContainer}>
                            <View style={styles.titleContainer2}>
                                <Text style={styles.titleText}>“Where2” would like to access your contacts</Text>
                                <Text style={styles.descriptionText2}>This helps you discover friends and connect with them. Your contacts will be synced and securely stored on Where2's servers.</Text>
                                <View style={styles.modalButtonContainer}>
                                <TouchableOpacity style={styles.allowButtonContainer} onPress={moveNext}>
                                    <Text style={styles.allowButtonText}>Allow</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.dontAllowButtonContainer}onPress={moveNext}>
                                    <Text style={styles.dontAllowButtonText}>Don't Allow</Text>
                                </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    }

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
        width: wp('90%'),
        alignSelf: 'center',
        marginTop: hp('1%'),
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'yellow',
        height: hp('10%')
    },
    titleContainer2: {
        width: wp('80%'),
        alignSelf: 'center',
        marginTop: hp('12%'),
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'yellow',
        height: hp('10%')
    },
    titleText: {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: '700',
        width: wp('70%'),
        textAlign: 'center',
        fontFamily: 'inter'
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
        height: 50,
        // width:363,

        width: wp('92%'),
        marginTop: hp(25),
        textAlign: 'center',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'



    },
    conTinueText: {
        alignItems: 'center',
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'inter'

    },
    image: {
        marginTop: '0%',
        // backgroundColor:'red'
        // width: wp(100),
        // height: hp(100)
    },
    ImageContainer: {
        alignSelf: "center",
        height: RFPercentage(40)
        ,
    },
    uploadContainer: {
        backgroundColor: color.onBoardingButton,
        height: hp('6%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: wp('85%'),
        marginBottom: hp('2%')
    },
    uploadText: {
        fontSize: 16,
        fontFamily: 'Inter',
        fontweight: '700',
        color: color.whiteFontColor,
    },
    SkipContainer: {

        height: hp('6%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: wp('85%'),
        borderWidth: 1,
        borderColor: color.placeholderColor,
    },
    skipText: {
        fontSize: 16,
        fontFamily: 'Inter',
        fontweight: '700',
        color: color.placeholderColor,
    },
    contineContainer: {
        marginTop: RFPercentage(23),
        alignItems: 'center'
    },
    descriptionContainer: {
        width: wp('80%'),
        alignSelf: 'center',
        paddingTop: RFPercentage(3)
    },
    descriptionText: {
        // backgroundColor: 'red',
        fontFamily: 'Inter',
        fontSize: 16,
        fontWeight: '400',
        color: color.whiteFontColor,
        textAlign: 'center'
    },
    modalContainer: {
        backgroundColor: color.inputFieldColor,
        height: hp('40%'),
        marginTop: hp('2%'),
        borderTopLeftRadius: hp(3),
        borderTopRightRadius: hp(3)
    },
    descriptionText2:{
        color:color.modalDescriptionText,
        fontsize:14,
        // fontWeight:'400',
        marginTop:'5%',
        textAlign:'center',

    },
    modalButtonContainer:{
        marginTop:hp('2%')

    },  
    allowButtonContainer:{
        backgroundColor:color.whiteColor,
        width:wp('80%'),
        height:hp('5%'),
         justifyContent:'center',
        alignItems:'center',
        borderRadius:hp('1%'),
        marginBottom:hp('1%')
    },
    allowButtonText:{
        textAlign:'center',
       
        color:color.balckFontColor,
        fontSize:16,
        fontWeight:'700'
    },
    dontAllowButtonContainer:{
        // backgroundColor:color.whiteColor,
        width:wp('80%'),
        height:hp('5%'),
         justifyContent:'center',
        alignItems:'center',
        borderRadius:hp('1%'),
        marginBottom:hp('1%'),
        borderWidth:0.7,
        borderColor:color.modalDescriptionText,
    },
    dontAllowButtonText:{
        textAlign:'center',
       
        color:color.modalDescriptionText,
        fontSize:16,
        fontWeight:'700'
    },

});
export default DiscoverFriends;