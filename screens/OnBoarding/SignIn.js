import React, { useState, useRef,useEffect} from 'react';
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
import { useNavigation,useFocusEffect } from '@react-navigation/native';
import { color } from '../../src/styles/color';
import Header from '../Components/Header';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import SignInTab from '../Components/SignInTab';

// class ErrorBoundary extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { hasError: false };
//     }
  
//     static getDerivedStateFromError(error) {
//       return { hasError: true };
//     }
  
//     componentDidCatch(error, errorInfo) {
//       console.log('Error:', error, errorInfo);
//     }
  
//     render() {
//       if (this.state.hasError) {
//         return <Text>Something went wrong.</Text>;
//       }
  
//       return this.props.children; 
//     }
//   }
  
const SignIn = () => {
    //   const navigation = useNavigation();


    const navigation = useNavigation();
   

    // function moveNext() {
    //     navigation.navigate('SignUp')
    // }


    {
        return (
            <SafeAreaView style={styles.safeArea}>
                <KeyboardAvoidingView >
                <Header/>
                <SignInTab/>

                
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
  

});
export default SignIn;