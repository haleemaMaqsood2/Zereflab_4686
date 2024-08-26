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
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from "react-native-responsive-fontsize";
import { color } from '../../src/styles/color';
import Header from '../Components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { setOnBoardingComplete } from '../../src/store/slices/onBoardingSlice/onBoardingSlice';
import { font } from '../../src/styles/font';

const Location = ({ navigation }) => {
    const [location, setLocation] = useState('');
    const dispatch = useDispatch();
    const locationRef = useRef(null);
    const { height: screenHeight, width: screenWidth } = Dimensions.get('window');


    const onBoardingComplete = useSelector(
        (state) => state.onBoardingSlice.onBoardingComplete
    );
    const [keyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        locationRef.current.focus();
        const showSubscription = Keyboard.addListener('keyboardWillShow', (event) => {
            // const keyboardHeightInPercentage = (event.endCoordinates.height / screenHeight) * 100;
            setKeyboardVisible(true);
            // setKeyboardHeight(keyboardHeightInPercentage.toFixed(1));
        });
        const hideSubscription = Keyboard.addListener('keyboardWillHide', () => {
            setKeyboardVisible(false);
            // setKeyboardHeight(0);
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
        // setLocation(value);//Phi Gamma Delta House

    };

    const moveNext = () => {
        dispatch(setOnBoardingComplete(true));
        navigation.navigate('HomePage');
    };

    const renderItem = ({ item }) => (
        <View style={styles.ResultContainer}>
            <Image style={styles.locationImage} source={require('../../src/assets/images/location1x4.png')} />
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
                ? hp(34) 
                : (screenHeight > 890 ) 
                    ? hp(4) 
                    : (!keyboardVisible && screenHeight < 890)
                    ? hp(4) // If screenHeight < 890 and keyboard is not visible
                    : hp(36.2) 
        }
    ]}
    disabled={location === ''}
>
    <Text style={styles.conTinueText}>Continue</Text>
</TouchableOpacity>
        </SafeAreaView>
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
        marginTop: hp('1%'),
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
