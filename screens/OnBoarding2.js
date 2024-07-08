import React, { useState } from 'react';
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
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const OnBoarding2 = () => {
    const navigation = useNavigation();
    const [username, setUserName] = useState('');
    const [bio, setBio] = useState('');


    function moveNext() {
        navigation.navigate('SuggestedGroups')
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
                <View style={styles.imageContainer}>
                    <View style={{ alignSelf: 'center' }}>
                        <Image
                            style={styles.mainImage}
                            source={require('../src/assets/profile.png')}
                        />
                        <TouchableOpacity>
                            <Text style={styles.uploadText}>Upload photo</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: '5%' }}>
                        <Text style={styles.titleText}>Username</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="@username"
                            placeholderTextColor="#5E6368"

                            onChangeText={value => setUserName(value)}
                            value={username}
                        />
                        <Text style={styles.titleText}>Add bio</Text>
                        <TextInput
                            style={styles.input2}
                            placeholder=""
                            placeholderTextColor="#5E6368"

                            onChangeText={value => setBio(value)}
                            value={bio}
                            multiline={true}
                            numberOfLines={4} // Adjust the number of lines as needed
                        />
                    </View>
                    <LinearGradient
                        colors={['#CB3DC8', '#8A4BD3']}//CB3DC8

                        style={styles.linearGradient}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <TouchableOpacity onPress={moveNext}>
                            <Text style={styles.buttonStyle}>Done</Text>
                        </TouchableOpacity>
                    </LinearGradient>




                </View>
            </LinearGradient>

        );
    }

}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: "#1a1429",
    },
    imageContainer: {
        width: '95%',
        alignSelf: 'center',
        marginTop: '27%'
    },
    background: {
        flex: 1,
    },
    buttonStyle: {
        alignSelf: 'center',
        color: "white",
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500',
        // backgroundColor:'#8a4bd3',
        width: "70%",
    },
    uploadText: {
        color: 'white',
        textAlign: 'center',
        paddingTop: '10%',
        // fontsize:14,
        textDecorationLine: 'underline',
    },
    titleText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '300',
        // font:'urbanist'
    },

    textInput: {
        width: '80%',
        height: "40%",
        // backgroundColor: 'red', // Light grey background color
        // borderRadius: 5,
        // paddingHorizontal: 10,
        // color: 'black', // Text color inside the input field
    },
    resendText: {
        color: '#FF44F8',
        // fontsize:14,
        textDecorationLine: 'underline', // Underline text

    },
    whatsappText: {
        color: 'white',
        // fontsize:14,
        textDecorationLine: 'underline', // Underline text

    },
    inputContainer: {
        width: '100%',
        marginTop: '10%',
        flexDirection: 'row',
        justifyContent: 'space-around'
        // backgroundColor:'red',

    },
    input: {
        backgroundColor: '#1a1925',
        borderRadius: 10,
        borderColor: '#828CA9',
        borderWidth: 0.3,
        marginTop: '3%',
        marginBottom: '3%',
        color: 'grey',
        paddingLeft: 15,
        paddingVertical: 10,
    },
    input2: {
      
        backgroundColor: '#1a1925',
        borderRadius: 10,
        borderColor: '#828CA9',
        borderWidth: 0.3,
        marginTop: '3%',
        marginBottom: '3%',
        color: 'grey',
        paddingLeft: 15,
        paddingVertical: 10,
        height: '30%',

    },
    linearGradient: {
        paddingVertical: 13,
        borderRadius: 25,
        alignItems: 'center',
        width: '80%',
        alignSelf: 'center',
        marginTop:'20%'
    },

});
export default OnBoarding2;