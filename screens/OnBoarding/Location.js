import React, { useState, useRef, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList,
    Platform,
    Dimensions,
    Alert,
    Keyboard,TouchableWithoutFeedback
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from "react-native-responsive-fontsize";
import { color } from '../../src/styles/color';
import Header from '../Components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { setOnBoardingComplete } from '../../src/store/slices/onBoardingSlice/onBoardingSlice';
import { font } from '../../src/styles/font';
import Geolocation from 'react-native-geolocation-service';
import { profileComplete } from '../../src/store/services/services';


const Location = ({ navigation }) => {
    const [location, setLocation] = useState('');
    const [loading, setLoading] = useState(false);
    const city_id=1;

    const dispatch = useDispatch();
    const locationRef = useRef(null);
    const { height: screenHeight, width: screenWidth } = Dimensions.get('window');


    const name = useSelector((state) => state.user.name); // Ensure the correct slice name
    const uname = useSelector((state) => state.user.userName); // Ensure the correct slice name
    const dob = useSelector((state) => state.user.dateOfBirth); // Ensure the correct slice name
    const token = useSelector((state) => state.user.token); // Ensure the correct slice name


    const onBoardingComplete = useSelector(
        (state) => state.onBoardingSlice.onBoardingComplete
    );
    const [keyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        // locationRef.current.focus();
        const showSubscription = Keyboard.addListener('keyboardWillShow', (event) => {
            setKeyboardVisible(true);
        });
        const hideSubscription = Keyboard.addListener('keyboardWillHide', () => {
            setKeyboardVisible(false);
        });
    
        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };              
    }, []);

    const searchResult = [
        { id: 1, locationName: 'Phi Gamma Delta House' },
        { id: 2, locationName: 'Phi Gamma Delta House' },
        { id: 3, locationName: 'Phi Gamma Delta House' },
        { id: 4, locationName: 'Phi Gamma Delta House' },
        { id: 5, locationName: 'Phi Gamma Delta House' },
    ];

    const handleChange = (value) => {
        setLocation('Phi Gamma Delta House');//Phi Gamma Delta House

    };

    const moveNext = () => {
        // dispatch(setOnBoardingComplete(true));
        completeProfileApi()

        // navigation.navigate('HomePage');
    };

    const completeProfileApi = async () => {
        console.log("complete profile code>>>")
       
        try {
            const formData = new FormData();
            formData.append('_method', 'PUT'); // Required for PUT method
            formData.append('name', name); // Ensure name is not empty
            formData.append('user_name', uname || '@username'); // Ensure user_name is not empty
            formData.append('dob',dob); // Ensure dob is in YYYY-MM-DD format
            formData.append('city_id', '1'); // Ensure city_id is a string
         
            // Logging formData to see the data being sent
            console.log('request Data being sent:', formData);
    
            // Call the profileComplete API with formData
            const response = await profileComplete(formData);
    
            if (response.user) {
                Alert.alert('Success', 'Profile updated successfully!');
                dispatch(setOnBoardingComplete(true));
                navigation.navigate('HomePage');
            } else {
                Alert.alert('Error', response.message || 'Profile update failed.');
            }
        } catch (error) {
            console.error('API Error:', error);
            Alert.alert('Error', 'Something went wrong. Please try again.');
        }
    };
    

    useEffect(() => {
        console.log("profile screen...........name",name);
        console.log("profile screen...........uname",uname);
        console.log("profile screen...........dob",dob);
        console.log("profile screen...........token",token);



        // fetchLocation();
    }, []);

    const fetchLocation = () => {
        setLoading(true);

        // Request location permission and fetch location
        Geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;

                // Perform reverse geocoding to get city name
                getCityFromCoordinates(latitude, longitude);
                console.log("location>>>>",latitude)
            },
            (error) => {
                Alert.alert('Error', 'Unable to fetch location');
                setLoading(false);
                console.error(error);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    };

    const getCityFromCoordinates = async (latitude, longitude) => {
        try {
            // Using OpenStreetMap Nominatim API for reverse geocoding
            const response = await axios.get(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const city = response.data.address.city || response.data.address.town || response.data.address.village;
            setLocation(city || 'Unknown');
            setLoading(false);
        } catch (error) {
            Alert.alert('Error', 'Unable to fetch city from coordinates');
            console.error(error);
            setLoading(false);
        }
    };

    const renderItem = ({ item }) => (
        // <View style={styles.ResultContainer}>
           <TouchableOpacity style={styles.ResultContainer} onPress={locationRef.current.focus()}>
           <Image style={styles.locationImage} source={require('../../src/assets/images/location1x4.png')} />
            <View style={styles.infoContainer}>
                <Text style={styles.locationName}>{item.locationName}</Text>
            </View>
           </TouchableOpacity>
        // </View>
    );

    return (
        // <TouchableWithoutFeedback onPress={() => console.log("hello")}>

        <SafeAreaView style={styles.safeArea}>

            <Header />
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Where are you located?</Text>
                <Text style={styles.title2Text}>Enter your location to discover events nearby.</Text>
                <View style={styles.searchContainer}>
                    <Image
                        source={location !== '' ? require('../../src/assets/images/WhiteSearch.png') : require('../../src/assets/images/searchIcon1x4.png')}
                        style={styles.addIcon}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={handleChange}
                        placeholder='Search'
                        placeholderTextColor={color.placeholderColor}
                        keyboardAppearance="dark"
                        value={location}
                        autoCorrect={false}
                        autoCompleteType="off"
                        autoCapitalize="none"
                        keyboardType="default"
                        spellCheck={false}
                        ref={locationRef}
                    />
                    {location !== '' && (
                        <TouchableOpacity onPress={() => setLocation('')}>
                            <Image source={require('../../src/assets/images/crossIcon1x4.png')} style={styles.imageClose} />
                        </TouchableOpacity>
                    )}
                </View>
            </View>
            {location !== '' && (
                <View style={styles.resultList}>
                    <FlatList
                        data={searchResult}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                        contentContainerStyle={styles.list}
                    />
                </View>
            )}
            <TouchableOpacity
    onPress={moveNext}
    style={[
        styles.ButtonContainer,
        // { bottom: screenHeight > 890 ? 35 : 4 }, // Correctly placed `bottom` property inside an object
        location !== '' ? styles.buttonEnabled : styles.buttonDisabled,
        {
            bottom: (screenHeight > 890 && keyboardVisible) 
                ? hp(33.5) 
                : (screenHeight > 890 ) 
                    ? hp(3.5) 
                    : (!keyboardVisible && screenHeight < 890)
                    ? hp(4) // If screenHeight < 890 and keyboard is not visible
                    : hp(35.5) 
        }
    ]}
    disabled={location === ''}
>
    <Text style={styles.conTinueText}>Continue</Text>
</TouchableOpacity>

        </SafeAreaView>
        // </TouchableWithoutFeedback>

    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: color.backgroundColor,
    },
    titleContainer: {
        width: wp('95%'),
        alignSelf: 'center',
        // marginTop: hp('1%'),
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'red'
    },
    titleText: {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: '700',
        width: wp('95%'),
        textAlign: 'center',
        fontFamily: 'inter',
    },
    title2Text: {
        color: color.whiteFontColor,
        fontSize: 15,
        fontFamily: 'inter',
        marginTop: hp('1.5%'),
    },
    searchContainer: {
        backgroundColor: color.inputFieldColor,
        borderRadius: 10,
        flexDirection: 'row',
        width: '97%',
        alignItems: 'center',
        paddingLeft: '5%',
        marginTop: hp('5%'),
    },
    ButtonContainer: {
        height: hp(6),
        width: wp('92%'),
        textAlign: 'center',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: wp('4%'),
    },
    buttonWithKeyboard: {
        position:'absolute',
        bottom: hp(35), // Position when keyboard is visible
    },
    buttonWithoutKeyboard: {
        bottom: hp(4), // Position when keyboard is hidden
    },
    buttonDisabled: {
        backgroundColor: color.WhiteWithThirtypercentOpacity,
    },
    buttonEnabled: {
        backgroundColor: color.onBoardingButton,
    },
    conTinueText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'inter',
    },
    input: {
        backgroundColor: color.inputFieldColor,
        width: wp('72%'),
        height: Platform.OS === 'ios' ? RFPercentage(6) : null,
        fontSize: 16,
        fontWeight: '500',
        paddingLeft: wp(0),
        fontFamily: 'inter',
        color: color.whiteColor,
    },
    imageClose: {
        height: RFPercentage(2),
        width: RFPercentage(2),
    },
    locationName: {
        color: color.whiteFontColor,
        fontSize: 16,
        fontWeight: '500',
        fontFamily: font.Regular,
        paddingLeft: wp(3),
    },
    ResultContainer: {
        flexDirection: 'row',
        marginTop: hp('2%'),
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center',
        // backgroundColor:"red"
    },
    resultList: {
        height: '25%',
        marginTop: '5%',
    },
    addIcon: {
        marginRight: wp('3%'),
        height: RFPercentage(2),
        width: RFPercentage(2),
    },
    locationImage: {
        height: RFPercentage(2.5),
        width: RFPercentage(2.75),
    }
});

export default Location;
// import React, { useState, useEffect } from 'react';
// import {
//     SafeAreaView,
//     StyleSheet,
//     Text,
//     View,
//     TextInput,
//     TouchableOpacity,
//     Image,
//     Platform,
//     Dimensions,
//     Keyboard,
//     Alert,
//     NativeModules,  NativeEventEmitter
// } from 'react-native';
// import Geolocation from 'react-native-geolocation-service';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { RFPercentage } from "react-native-responsive-fontsize";
// import { useDispatch, useSelector } from 'react-redux';
// import { setOnBoardingComplete } from '../../src/store/slices/onBoardingSlice/onBoardingSlice';
// import axios from 'axios'; // You'll use axios to perform reverse geocoding

// const Location = ({ navigation }) => {
//     const [location, setLocation] = useState('');
//     const [loading, setLoading] = useState(false);
//     const dispatch = useDispatch();
//     const { height: screenHeight } = Dimensions.get('window');

//     const onBoardingComplete = useSelector(
//         (state) => state.onBoardingSlice.onBoardingComplete
//     );

//     useEffect(() => {
//         // requestLocationPermission();
//     }, []);

//     // const requestLocationPermission = async () => {
//     //     try {
//     //         if (Platform.OS === 'ios') {
//     //             Geolocation.requestAuthorization('whenInUse');
//     //         }
//     //         fetchLocation();
//     //     } catch (error) {
//     //         console.error('Permission error:', error);
//     //     }
//     // };
//     const requestLocationPermission = async () => {
//         if (Platform.OS === 'ios') {
//             const auth = await Geolocation.requestAuthorization('whenInUse');
//             if (auth === 'granted') {
//                 // Permission granted, fetch location
//                 Geolocation.getCurrentPosition(
//                     (position) => {
//                         console.log(position);
//                     },
//                     (error) => {
//                         console.log("Location error: ", error);
//                     },
//                     { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//                 );
//             } else {
//                 Alert.alert('Location permission denied');
//             }
//         } else if (Platform.OS === 'android') {
//             try {
//                 const granted = await PermissionsAndroid.request(
//                     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//                     {
//                         title: 'Location Permission',
//                         message: 'We need access to your location for showing nearby events.',
//                         buttonNeutral: 'Ask Me Later',
//                         buttonNegative: 'Cancel',
//                         buttonPositive: 'OK',
//                     }
//                 );
//                 if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//                     // Permission granted, fetch location
//                     Geolocation.getCurrentPosition(
//                         (position) => {
//                             console.log(position);
//                         },
//                         (error) => {
//                             console.log("Location error: ", error);
//                         },
//                         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//                     );
//                 } else {
//                     Alert.alert('Location permission denied');
//                 }
//             } catch (err) {
//                 console.warn(err);
//             }
//         }
//     };

//     const fetchLocation = () => {
//         Geolocation.getCurrentPosition(
//             (position) => {
//                 const { latitude, longitude } = position.coords;
//                 getCityFromCoordinates(latitude, longitude);
//             },
//             (error) => {
//                 Alert.alert('Error', 'Unable to fetch location.');
//                 console.error('Location error:', error);
//             },
//             { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//         );
//     };

//     const getCityFromCoordinates = async (latitude, longitude) => {
//         try {
//             // Reverse geocoding to get the city from coordinates
//             const response = await axios.get(
//                 `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
//             );
//             const city = response.data.address.city || response.data.address.town || response.data.address.village;
//             setLocation(city || 'Unknown');
//             setLoading(false);
//         } catch (error) {
//             Alert.alert('Error', 'Unable to fetch city from coordinates.');
//             console.error('Geocoding error:', error);
//             setLoading(false);
//         }
//     };

//     const moveNext = () => {
//         dispatch(setOnBoardingComplete(true));
//         // navigation.navigate('HomePage');
//     };

//     return (
//         <SafeAreaView style={styles.safeArea}>
//             <View style={styles.titleContainer}>
//                 <Text style={styles.titleText}>Where are you located?</Text>
//                 <Text style={styles.title2Text}>Enter your location to discover events nearby.</Text>
//                 <View style={styles.searchContainer}>
//                     <Image
//                         source={location !== '' ? require('../../src/assets/images/WhiteSearch.png') : require('../../src/assets/images/searchIcon1x4.png')}
//                         style={styles.addIcon}
//                     />
//                     <TextInput
//                         style={styles.input}
//                         placeholder='Search'
//                         placeholderTextColor="#888"
//                         value={loading ? 'Fetching location...' : location}
//                         editable={false} // Disable editing of the location input
//                     />
//                 </View>
//             </View>

//             <TouchableOpacity
//                 onPress={moveNext}
//                 style={[
//                     styles.ButtonContainer,
//                     location !== '' ? styles.buttonEnabled : styles.buttonDisabled,
//                     { bottom: hp(4) }
//                 ]}
//                 disabled={location === ''}
//             >
//                 <Text style={styles.conTinueText}>Continue</Text>
//             </TouchableOpacity>
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     safeArea: {
//         flex: 1,
//         backgroundColor: '#121212',
//     },
//     titleContainer: {
//         width: wp('95%'),
//         alignSelf: 'center',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     titleText: {
//         color: '#FFFFFF',
//         fontSize: 28,
//         fontWeight: '700',
//         width: wp('95%'),
//         textAlign: 'center',
//     },
//     title2Text: {
//         color: '#AAA',
//         fontSize: 15,
//         marginTop: hp('1.5%'),
//     },
//     searchContainer: {
//         backgroundColor: '#333',
//         borderRadius: 10,
//         flexDirection: 'row',
//         width: '97%',
//         alignItems: 'center',
//         paddingLeft: '5%',
//         marginTop: hp('5%'),
//     },
//     ButtonContainer: {
//         height: hp(6),
//         width: wp('92%'),
//         textAlign: 'center',
//         borderRadius: 10,
//         alignItems: 'center',
//         justifyContent: 'center',
//         position: 'absolute',
//         left: wp('4%'),
//     },
//     buttonDisabled: {
//         backgroundColor: '#555',
//     },
//     buttonEnabled: {
//         backgroundColor: '#ff9900',
//     },
//     conTinueText: {
//         color: '#FFFFFF',
//         fontSize: 16,
//         fontWeight: '700',
//     },
//     input: {
//         backgroundColor: '#333',
//         width: wp('72%'),
//         height: Platform.OS === 'ios' ? RFPercentage(6) : null,
//         fontSize: 16,
//         fontWeight: '500',
//         paddingLeft: wp(0),
//         color: '#FFF',
//     },
//     addIcon: {
//         marginRight: wp('3%'),
//         height: RFPercentage(2),
//         width: RFPercentage(2),
//     },
// });

// export default Location;
