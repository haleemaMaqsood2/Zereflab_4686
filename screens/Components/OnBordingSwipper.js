import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Image,
} from 'react-native';
import { color } from '../../src/styles/color';
import Swiper from 'react-native-swiper';

const Carousel = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Swiper style={styles.wrapper} loop={false}>
                    <View style={styles.slide1}>
                        <Image style={styles.image} source={require('../../src/assets/images/crousel1.png')} resizeMode="contain"/>
                    </View>
                    <View style={styles.slide2}>
                        <Image style={styles.image} source={require('../../src/assets/images/crousel1.png')}resizeMode="contain" />
                    </View>
                    <View style={styles.slide3}>
                        <Image style={styles.image} source={require('../../src/assets/images/crousel1.png')}resizeMode="contain" />
                    </View>
                </Swiper>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: color.backgroundColor,
    },
    container: {
        flex: 1,
    },
    wrapper: {
        height: '70%',
        width:'70%'
    },
    slide1: {
        height:'50%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:'20%'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});

export default Carousel;
