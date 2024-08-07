
import React, { useRef, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { color } from '../../src/styles/color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Swiper from 'react-native-swiper';
import { font } from '../../src/styles/font';

const CustomDot = ({ isActive }) => {
    return (

        <View style={{ top: 150 }}>
            <Image
                source={isActive ? require('../../src/assets/images/EllipseDark.png') : require('../../src/assets/images/EllipseWhite.png')}
                style={isActive ? styles.activeDot : styles.dot}
            />
        </View>
    );
};
const Carousel = ({ navigation }) => {
    const swiper = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    function moveNext() {
        navigation.navigate('SignIn');
    }

    useFocusEffect(
        React.useCallback(() => {
            if (swiper.current) {
                swiper.current.scrollTo(0, false); // Reset to first slide
            }
        }, [])
    );

    const renderPagination = (index, total, context) => {
        const dots = [];
        for (let i = 0; i < total; i++) {
            dots.push(<CustomDot key={i} isActive={i === index} />);
        }
        return (
            <View style={styles.paginationContainer}>
                {dots}
            </View>
        );
    };
    function handleIndexChanged(params) {
        console.log(params)
        setCurrentIndex(params);

    }
    return (
        <SafeAreaView style={styles.safeArea}>
            <Swiper
                ref={swiper}
                // dotStyle={styles.dotStyle}
                // activeDotStyle={styles.activeDotStyle}
                onIndexChanged={handleIndexChanged}
                // renderPagination={renderPagination}
                // paginationStyle={styles.paginationStyle}
                loop={false}
            >
                <View style={styles.slide}>
                    <Image
                        style={styles.image}
                        source={require('../../src/assets/images/iPhone.png')}
                        resizeMode="contain"
                    />

                </View>

                <View style={styles.slide}>
                    <Image
                        style={styles.image}
                        source={require('../../src/assets/images/crousel-2.png')}
                        resizeMode="contain"
                    />

                </View>
                <View style={styles.slide}>
                    <Image
                        style={styles.image}
                        source={require('../../src/assets/images/crousel-3.png')}
                        resizeMode="contain"
                    />

                </View>
            </Swiper>

            <LinearGradient
                colors={['rgba(5, 5, 7, 0.00)', '#050507']}
                // start={{x: 0, y: 1}} 
                // end={{x:0.3, y: 1}}
                start={{ x: 1, y: 0 }}
                end={{ x: 1, y: 0.47 }}

                style={styles.gradient}
                pointerEvents="none"
            >
                {/* <View style={{flexDirection:'row'}}>

                </View> */}
                <View style={styles.paginationContainer}>
                    {renderPagination(currentIndex, 3)}
                </View>

                {/* <View style={isActive ? styles.activeDot : styles.dot} /> */}

                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Find your crew. Discover your scene</Text>
                </View>


            </LinearGradient>
            <TouchableOpacity style={styles.buttonContainer} onPress={moveNext}>
                <Text style={styles.getStarted}>Get started</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: color.backgroundColor,
        // backgroundColor:'red',
        alignItems: 'center',
    },
    buttonContainer: {
        backgroundColor: color.onBoardingButton,
        height: hp('6%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: wp('85%'),
        // top:hp(50),
        marginBottom: hp('3%'),
        // position:'absolute'
    },
    getStarted: {
        fontSize: 16,
        fontFamily: 'Inter',
        // fontFamily: font.Medium,

        fontWeight: '700',
        color: color.whiteFontColor,
    },
    titleContainer: {
        width: wp('95%'),
        alignSelf: 'center',
        marginTop: hp('15%'),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: hp('1%'),
        // backgroundColor:'red'
    },
    titleText: {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: '600',
        width: wp('90%'),
        textAlign: 'center',
        lineHeight: 36.02,
        // fontFamily: 'Inter'
        font: 'Urbanist'
    },
    slide: {
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: '15%',
    },
    image: {
        width: wp('80%'),
        height: hp('100%'),
    },
    gradient: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'black', // Ensures the gradient starts with solid black
        // opacity: 0.9, // Optional, to adjust the intensity of the gradient
    },
    dot: {
        backgroundColor: 'rgba(255,255,255,.3)',
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 4,
    },
    activeDot: {
        backgroundColor: '#fff',
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 4,
    },
    paginationStyle: {
        top: 100
        // bottom: 20,
    },
    paginationContainer: {
        position: 'absolute',
        bottom: hp('22%'), // Adjust this value to position dots above the title text
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        // zIndex: 1,
    },
});

export default Carousel;
