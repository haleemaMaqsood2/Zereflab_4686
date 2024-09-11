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
    Dimensions,
    Keyboard,
    Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { color } from '../../src/styles/color';
import Header from '../Components/Header';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import HeadingText from '../Components/HeadingText';
import CustomButtonContainer from '../Components/CustomButtonContainer';
import DocumentPicker from 'react-native-document-picker';

const ImageUpload = ({ navigation }) => {
    //   const navigation = useNavigation();
    const [name, setName] = useState('')
    const nameRef = useRef(null);
    const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
    const [imageUri, setImageUri] = useState(null);

    const handleImageUpload = async () => {
        console.log("handle image>>>>>>>>>>>>>>>>>>>>")
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.images],
            });
            console.log('Image URI:', res.uri);
            setImageUri(res.uri);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('User cancelled the picker');
            } else {
                throw err;
            }
        }
    };
    const handleChange = (value) => {
        setName(value);
        nameRef.current.focus();


    };
    const createTwoButtonAlert = () =>
        Alert.alert('Where2 would like to access your Photo Library', ' ', [
          {
            text: "Don't Allow",
            onPress: () => console.log('Cancel Pressed'),
            // style: 'cancel',
          },
          {text: 'Allow', onPress: () => {
            handleImageUpload(); // Trigger image upload
        }},
        ]);
        
       
    function moveNext() {
        navigation.navigate('DiscoverFriends')
    }
    function UploadClick() {
        console.log("upload click")
        // navigation.navigate('DiscoverFriends')
    }
   


    {
        return (
            <SafeAreaView style={styles.safeArea}>
                <KeyboardAvoidingView >
                    <Header />
                    <View style={{ marginTop: '2%' }}></View>
                    <HeadingText title={'Add profile picture'} />

                    <View style={styles.titleContainer}>
                        {/* <Text style={styles.titleText}>Add profile picture</Text> */}
                        {/* <View style={styles.inputContainer}>


                        </View> */}






                    </View>
                    <View style={styles.ImageContainer}>
                        <Image
                            style={styles.image}
                            source={require('../../src/assets/images/Profile1x4.png')}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={{ marginTop: (screenHeight < 890 ? hp('2%') : hp('3%')) }}>

                        <CustomButtonContainer
                            button1Name="Upload"
                            button2Name="Skip"
                            onPressButton1={createTwoButtonAlert}
                            onPressButton2={moveNext}
                            marginTop={7}
                        />
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
        // marginTop: '5%',
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
        // marginTop: '5%',
        width: wp(50),
        height: hp(40),
        marginBottom: hp('10')
    },
    ImageContainer: {
        alignSelf: "center",
        // backgroundColor:'red',
        height: RFPercentage(40),
        justifyContent: 'center'
    },
    uploadContainer: {
        backgroundColor: color.onBoardingButton,
        height: hp('6%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: wp('90%'),
        marginBottom: hp('2%')
    },
    uploadText: {
        // fontSize: 16,
        // fontFamily: 'inter',
        // fontweight: '700',
        color: color.whiteFontColor,
        // alignItems:'center',
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'inter'
    },
    SkipContainer: {

        height: hp('6%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: wp('90%'),
        borderWidth: 1,
        borderColor: '#ffffff80',
    },
    skipText: {
        // fontSize: 16,
        // fontFamily: 'Inter',
        // fontweight: '700',
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'inter',
        color: '#ffffff80',
    },
});
export default ImageUpload;