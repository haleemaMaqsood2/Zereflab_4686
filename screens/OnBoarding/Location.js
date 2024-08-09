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
    Keyboard
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { color } from '../../src/styles/color';
import Header from '../Components/Header';
import { font } from '../../src/styles/font';
import { useDispatch,useSelector } from 'react-redux';
import { setOnBoardingComplete } from '../../src/store/slices/onBoardingSlice/onBoardingSlice';
import CustomButton from '../Components/CustomButton';

const Location = ({ navigation }) => {
    const [location, setLocation] = useState('');
    const dispatch = useDispatch();
    const onBoardingComplete = useSelector(
        (state) => state.onBoardingSlice.onBoardingComplete
      );
      const [keyboardVisible, setKeyboardVisible] = useState(false);

      const [keyboardHeight, setKeyboardHeight] = useState(0);
      const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
  

    const searchResult = [
        { id: 1, locationName: 'Phi Gamma Delta House' },
        { id: 2, locationName: 'Phi Gamma Delta House' },
        { id: 3, locationName: 'Phi Gamma Delta House' },
        { id: 4, locationName: 'Phi Gamma Delta House' },
        { id: 5, locationName: 'Phi Gamma Delta House' },
    ];

    const handleChange = (value) => {
        setLocation('Phi Gamma Delta House');
    };

    const moveNext = () => {
        dispatch(setOnBoardingComplete(true));
        console.log("continue press",onBoardingComplete)
        
        navigation.navigate('HomePage')
        // navigation.navigate('MainStack', { screen: 'HomePage' });
    };
    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardVisible(true);
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardVisible(false);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);
    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', (event) => {
            const keyboardHeightInPercentage = (event.endCoordinates.height / screenHeight) * 100;
            setKeyboardVisible(true);
            setKeyboardHeight(keyboardHeightInPercentage.toFixed(1));
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardVisible(false);
            setKeyboardHeight(0);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, [screenHeight]);


    const renderItem = ({ item }) => (
        <View style={styles.ResultContainer}>
            <Image style={styles.locationImage}source={require('../../src/assets/images/location1x4.png')}/>
            <View style={styles.infoContainer}>
                <Text style={styles.locationName}>{item.locationName}</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <Header />
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Where are you located?</Text>
                <Text style={styles.title2Text}>Enter your location to discover events nearby.</Text>
                <View style={{ backgroundColor: color.inputFieldColor, borderRadius: 10, flexDirection: 'row', width: '97%', alignItems: 'center', paddingLeft: '5%', marginTop: hp('5%') }}>
                {location !== '' ? (
                                            <Image source={require('../../src/assets/images/WhiteSearch.png')} style={styles.addIcon} />

                    ) : (
                        <Image source={require('../../src/assets/images/searchIcon1x4.png')} style={styles.addIcon} />

                    )}
                    {/* <Image source={require('../../src/assets/images/searchIcon1x4.png')} style={styles.addIcon} /> */}
                    
                    <TextInput
                        style={styles.input}
                        onChangeText={handleChange}
                        placeholder='Search'
                        placeholderTextColor={color.placeholderColor}
                        keyboardAppearance="dark"
                        value={location}
                        autoCorrect={false}
                        autoCompleteType="off"
                        autoCapitalize="none" // Disable auto capitalization
                        keyboardType="default" // Default keyboard type
                        spellCheck={false} // Disable spell check
                    />
                    {location !== '' && (
                        <TouchableOpacity onPress={() => setLocation('')}>
                            <Image source={require('../../src/assets/images/crossIcon1x4.png')} style={styles.imageClose} />
                        </TouchableOpacity>
                    )}
                </View>
            </View>
            {location !== '' && (
                <View style={{ height: '25%', marginTop: '5%' }}>
                    <FlatList
                        data={searchResult}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                        contentContainerStyle={styles.list}
                    />
                </View>
            )}
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={moveNext}
                    style={[styles.ButtonContainer, location !== '' ? styles.buttonEnabled : styles.buttonDisabled]}
                    disabled={location === ''}
                >
                    <Text style={styles.conTinueText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
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
        fontSize:15,
        fontFamily:'inter',
        marginTop: hp('1.5%'),
    },
    ButtonContainer: {
        height: hp(6),
        width: wp('92%'),
        // marginTop: hp('28%'),
        textAlign: 'center',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonDisabled: {
        backgroundColor:color.WhiteWithThirtypercentOpacity,
        // backgroundColor: color.inputFieldColor,
        marginTop:'115%'
    },
    buttonEnabled: {
        backgroundColor: color.onBoardingButton,
        marginTop:'60%'

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
        // borderWidth: 0.5,
        height:Platform.OS === 'ios' ? RFPercentage(6):null,
        color: color.whiteWithfiftypercentOpacity,
        // backgroundColor: 'red',

        fontSize: 16,
        fontWeight: '500',
        paddingLeft: wp(0),
        fontFamily: 'inter',
        color:color.whiteColor
    },
    imageClose: {
        height:RFPercentage(2),
        width:RFPercentage(2),
    },
    locationName: {
        color: color.whiteFontColor,
        fontSize: 12,
        fontWeight: '400',
        fontFamily: font.Regular,
        paddingLeft:wp(2)
    },
    ResultContainer: {
        flexDirection: 'row',
        marginTop: hp('2%'),
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center',
    },
    list: {
        // Add any specific styles for the FlatList container if needed
    },
    image: {
        marginRight: hp('1%'),
    },
    addIcon: {
        marginRight: wp('3%'),
        height:RFPercentage(2),
        width:RFPercentage(2),
    },
    locationImage:{
        height:RFPercentage(1.9),
        width:RFPercentage(1.5)
    }
});

export default Location;
