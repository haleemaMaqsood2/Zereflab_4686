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
    Platform
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { color } from '../../src/styles/color';
import Header from '../Components/Header';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import AddFriendList1 from '../MainScreen/Components/AddFriendList1';
// import AddFriendList from '../Components/AddFriendList';
import Contacts from 'react-native-contacts';


const AddFriendScreen = ({ navigation }) => {
    const [contacts, setContacts] = useState([]);

    //   const navigation = useNavigation();
    const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

    const addFriendData=[
        {
            id:1,
            name:"Full Name",
            username:'@Username',
            image: require('../../src/assets/images/Profile2.png'),
            status:'Add'
        },
        {
            id:2,
            name:"Full Name",
            username:'@Username',
            image: require('../../src/assets/images/Profile2.png'),
            status:'Add'

        },
    ];
    const inviteFriendData=[
        {
            id:1,
            name:"Cristofer Nolan ",
            username:'@Username',
            image: require('../../src/assets/images/Profile2.png'),
            status:'Invite'
        },
        {
            id:2,
            name:"Ronald C",
            username:'@Username',
            image: require('../../src/assets/images/Profile2.png'),
            status:'Invite'

        },
        {
            id:3,
            name:"Full Name",
            username:'@Username',
            image: require('../../src/assets/images/Profile2.png'),
            status:'Invite'

        },{
            id:4,
            name:"Full Name",
            username:'@Username',
            image: require('../../src/assets/images/Profile2.png'),
            status:'Invite'

        },{
            id:5,
            name:"Full Name",
            username:'@Username',
            image: require('../../src/assets/images/Profile2.png'),
            status:'Invite'

        },{
            id:6,
            name:"Ronald C",
            username:'@Username',
            image: require('../../src/assets/images/Profile2.png'),
            status:'Invite'

        },{
            id:7,
            name:"Cristofer Nolan",
            username:'@Username',
            image: require('../../src/assets/images/Profile2.png'),
            status:'Invite'

        },{
            id:8,
            name:"Full Name",
            username:'@Username',
            image: require('../../src/assets/images/Profile2.png'),
            status:'Invite'

        },{
            id:9,
            name:"Full Name",
            username:'@Username',
            image: require('../../src/assets/images/Profile2.png'),
            status:'Invite'

        },{
            id:10,
            name:"Full Name",
            username:'@Username',
            image: require('../../src/assets/images/Profile2.png'),
            status:'Invite'

        },{
            id:11,
            name:"Full Name",
            username:'@Username',
            image: require('../../src/assets/images/Profile2.png'),
            status:'Invite'

        },{
            id:12,
            name:"Full Name",
            username:'@Username',
            image: require('../../src/assets/images/Profile2.png'),
            status:'Invite'

        },
    ]
    function moveNext() {
        navigation.navigate('Location')
    }
    const requestContactsPermission = async () => {
        if (Platform.OS === 'android') {
          try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
              {
                title: 'Contacts Permission',
                message: 'This app would like to view your contacts.',
                buttonPositive: 'OK',
              }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              console.log('Contacts permission granted');
              fetchContacts();
            } else {
              console.log('Contacts permission denied');
            }
          } catch (err) {
            console.warn(err);
          }
        } else if (Platform.OS === 'ios') {
            console.log("request permission clicked1")

          Contacts.checkPermission().then(permission => {
            if (permission === 'undefined') {
              Contacts.requestPermission().then(permission => {
                if (permission === 'authorized') {
                  fetchContacts();
                } else {
                  Alert.alert('Permission denied', 'Contacts permission was denied');
                }
              });
            } else if (permission === 'authorized') {
              fetchContacts();
            } else {
              Alert.alert('Permission denied', 'Contacts permission was denied');
            }
          });
        }
      };
      const fetchContacts = () => {
        Contacts.getAll()
          .then((contacts) => {
            setContacts(contacts);
            console.log('Contacts fetched:', contacts);
          })
          .catch((error) => {
            console.error('Failed to load contacts', error);
          });
      };
    //   useEffect(() => {
    //     console.log("request permission clicked")
    //     requestContactsPermission();
    //   }, []);
    
    


    {
        return (
            <SafeAreaView style={styles.safeArea}>
                <KeyboardAvoidingView >
                    <Header />
                    <AddFriendList1 data={addFriendData} inviteFriends={inviteFriendData}/>

                    {/* <View style={{justifyContent:'center'}}> */}
                    <View style={[styles.ButtonContainer, { marginTop: screenHeight > 890 ? hp(30) : hp(30) }]}>
                    <TouchableOpacity onPress={moveNext} style={styles.touchableArea}>
                                <Text style={styles.conTinueText}>Continue</Text>
                            </TouchableOpacity>
                        </View>
                    {/* </View> */}


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
        fontFamily: 'inter'
        // font:'urbanist'
    },
    touchableArea: {
        width: '100%', // Make it the full width of the container
        height: '100%', // Make it the full height of the container
        alignItems: 'center', // Center the text
        justifyContent: 'center', // Center the text
      },



    ButtonContainer: {
        backgroundColor: color.onBoardingButton,
        // height:hp('7%'),
        height: hp(6),
        // width:363,

        width: wp('92%'),
        marginTop: hp(29),
        textAlign: 'center',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        // top: hp('60%'),//65 on android
        top:Platform.OS === 'ios' ? hp('54%') :hp('65%'),
        left:hp('2%')




    },
    conTinueText: {
        alignItems: 'center',
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'inter'

    }

});
export default AddFriendScreen;