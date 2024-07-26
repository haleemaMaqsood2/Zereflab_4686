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
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { color } from '../../src/styles/color';
import Header from '../Components/Header';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


const ImageUpload = ({ navigation }) => {
    //   const navigation = useNavigation();
    const [name, setName] = useState('')
    const nameRef = useRef(null);
    const handleChange = (value) => {
        setName(value);
        nameRef.current.focus();


    };

    function moveNext() {
        navigation.navigate('DiscoverFriends')
    }



    {
        return (
            <SafeAreaView style={styles.safeArea}>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <Header />

                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>Add profile picture</Text>
                        <View style={styles.inputContainer}>


                        </View>






                    </View>
                    <View style={styles.ImageContainer}>
                        <Image
                            style={styles.image}
                            source={require('../../src/assets/images/Profile1.png')}
                            resizeMode="cover"
                        />
                    </View>
                    {/* //android=23 Platform.OS === 'ios' ? RFPercentage(13) : RFPercentage(23),*/}
                    <View style={{marginTop:Platform.OS === 'ios' ? RFPercentage(13) : RFPercentage(23),alignItems:'center'}}>
                    <TouchableOpacity style={styles.uploadContainer} onPress={moveNext}>
                        <Text style={styles.uploadText}>Upload</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles. SkipContainer} onPress={moveNext}>
                        <Text style={styles.skipText}>Skip</Text>

                    </TouchableOpacity>
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
        width: wp('90%'),
        alignSelf: 'center',
        marginTop: hp('1%'),
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'red',
        height: hp('10%')
    },
  
    titleText: {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: '700',
        width: wp('80%'),
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
        marginTop: '25%'
        // width: wp(100),
        // height: hp(100)
    },
ImageContainer:{
    alignSelf:"center",
    height:RFPercentage(40)
,},
uploadContainer:{
    backgroundColor: color.onBoardingButton,
    height: hp('6%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width:wp('85%'),
    marginBottom:hp('2%')
},
uploadText:  {
    fontSize: 16,
    fontFamily: 'Inter',
    fontweight: '700',
    color: color.whiteFontColor,
},
SkipContainer:{

    height: hp('6%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width:wp('85%'),
    borderWidth:1,
    borderColor:'#ffffff80',
},
skipText:  {
    fontSize: 16,
    fontFamily: 'Inter',
    fontweight: '700',
    color: '#ffffff80',
},
});
export default ImageUpload;