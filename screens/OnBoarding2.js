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
    Platform,
    PermissionsAndroid,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const OnBoarding2 = () => {
    const navigation = useNavigation();
    const [username, setUserName] = useState('');
    const [bio, setBio] = useState('');
    const [filePath, setFilePath] = useState(null);

    function moveNext() {
        navigation.navigate('SuggestedGroups');
    }

    const requestCameraPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: 'Camera Permission',
                        message: 'App needs camera permission',
                    }
                );
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                return false;
            }
        } else return true;
    };

    const requestExternalWritePermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'External Storage Write Permission',
                        message: 'App needs write permission',
                    }
                );
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                alert('Write permission err', err);
            }
            return false;
        } else return true;
    };

    const chooseFile = async (type) => {
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
        };

        const isStoragePermitted = await requestExternalWritePermission();
        if (isStoragePermitted) {
            launchImageLibrary(options, (response) => {
                if (response.didCancel) {
                    alert('User cancelled image picker');
                    return;
                } else if (response.errorCode) {
                    alert(response.errorMessage);
                    return;
                }

                setFilePath(response.assets[0]);
            });
        }
    };

    return (
        <LinearGradient
            colors={['#2b2043', '#000000']}
            style={styles.background}
            locations={[0, 0.3]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
        >
            <View style={styles.imageContainer}>
                <View style={{ alignSelf: 'center' }}>
                    <Image
                        style={styles.mainImage}
                        source={
                            filePath ? { uri: filePath.uri } : require('../src/assets/profile.png')
                        }
                    />
                    <TouchableOpacity onPress={() => chooseFile('photo')}>
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
                        numberOfLines={4}
                    />
                </View>
                <LinearGradient
                    colors={['#CB3DC8', '#8A4BD3']}
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
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1a1429",
    },
    imageContainer: {
        width: '95%',
        alignSelf: 'center',
        marginTop: '27%',
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
        width: "70%",
    },
    uploadText: {
        color: 'white',
        textAlign: 'center',
        paddingTop: '10%',
        textDecorationLine: 'underline',
    },
    titleText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '300',
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
        marginTop: '20%',
    },
});

export default OnBoarding2;
