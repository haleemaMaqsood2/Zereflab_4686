import React, { useState,useEffect } from 'react';
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
    FlatList,
    Modal,
    Pressable,
    Alert
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { BlurView } from '@react-native-community/blur'; // Import the BlurView component
import { useNavigation } from '@react-navigation/native';
import Header from './Components/Header';
import RadialGradientButton from './Components/RadialGradientButton';
const Location = () => {
    const navigation = useNavigation();
    const [search, setSearch] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

   
    function moveNext() {
        navigation.navigate('JoinGroup')
    }

  



    {
        return (
            //    <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={['#2b2043', '#000000']}
                style={styles.background}
                locations={[0, 0.3]}  // 90% of the gradient is black
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
            >
                <Header title="Location" index={4} />
{/* 
            //////////////////////////////////////////////
            //////////////////////////////////////////////

            Location Filter code 

            //////////////////////////////////////////////
            //////////////////////////////////////////////

*/}

                <TouchableOpacity style={styles.searchContainer}>
                        <Image
                            style={styles.searchImage}
                            source={require('../src/assets/images/location1x4.png')}
                        />
                        <TextInput
                            style={styles.searchInput}
                            placeholder="200 Park Lane,Anytown, Ca98765"
                            placeholderTextColor="#5E6368"
                            onChangeText={value => setSearch(value)}
                            value={search}
                            autoCorrect={false}
                            autoCompleteType="off"
                            autoCapitalize="none" // Disable auto capitalization
                            keyboardType="default" // Default keyboard type
                            spellCheck={false} // Disable spell check
                        />
                        <Image
                            style={styles.searchImage}
                            source={require('../src/assets/edit.png')}
                        />
                    </TouchableOpacity>
                 <TouchableOpacity style={styles.currentLocation}>
                 <Image
                            style={styles.currentImage}
                            source={require('../src/assets/currentLocation.png')}
                        />
                        <Text style={styles.resendText}>Use my current Location</Text>
                    </TouchableOpacity>

                <TouchableOpacity style={styles.fixedButton} >
                        <LinearGradient
                            // colors={['#CB3DC8', '#8A4BD3']}
                            colors={['#F93DAB', '#A03FE3']}

                            style={styles.linearGradient}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                        >
                            <Text style={styles.buttonText}>Confirm Location</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                   
   

                </LinearGradient>

        );
    }

}
const styles = StyleSheet.create({
    container: {
        // backgroundColor: "#1a1429",
        width:'95%',
        alignSelf:'center'
    },
    searchInput: {
        flex: 1,
        color: 'white',
    },
    
    searchImage:{
        marginTop:'3%',
        marginLeft:'1%',
        marginRight:'5%',
    },
    profileImage:{
        marginTop:'15%',
        marginBottom:'5%',
        width: 60,
        height: 60,
        borderRadius: 30, // Half of width or height to make it a circle
        backgroundColor: "#EEF2F3",
        alignSelf: 'center',
    },
    background: {
        flex: 1,
    },
    currentLocation:{
        flexDirection:'row',
        // backgroundColor:'red',
    },
    inputContainer: {
        width: '50%',
        marginTop: '9%',
        flexDirection: 'row',
        justifyContent: 'space-around'
        // backgroundColor:'red',

    },
    searchContainer: {
        backgroundColor: '#1a1925',
        flexDirection:'row',
        // justifyContent:'space-between',
        width:'95%',
        borderRadius: 10,
        borderColor: 'grey',
        borderWidth: 0.2,
        marginBottom: '3%',
        color: 'grey',
        alignSelf:'center',
        paddingLeft: 10, // Adjust the padding-left as needed


    },
    linearGradient: {
        paddingVertical: 13,
        borderRadius: 25,
        alignItems: 'center',

    },
    resendText: {
        color: '#FF44F8',//FF44F8
        fontsize:14,
        // textDecorationLine: 'underline', // Underline text
    
      },
   
    fixedButton: {
        position: 'absolute',
        bottom: 30,
        left: '30%',
        // justifyContent:'center',
        transform: [{ translateX: -50 }], // Center horizontally
        width: '70%', // Adjust the width as needed
    },
    buttonText: {
        alignSelf: 'center',
        color: "white",
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
    },
    currentImage:{
        marginLeft:'5%',
        marginRight:'2%',
    }
 

});
export default Location;