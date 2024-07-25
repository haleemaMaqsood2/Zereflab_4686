import React, { useState, useEffect } from 'react';
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
import SyncLaterButton from './Components/SyncLaterButton';

const SuggestedGroups = () => {
    const navigation = useNavigation();
    const [search, setSearch] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [syncButton, setSyncButton] = useState(false);

    const data = [
        {
            id: 1,
            name: 'Marc T',
            username: '@username',
            image: require('../src/assets/images/profile.png'),
        },
        {
            id: 2,
            name: 'Marc T',
            username: '@username',
            image: require('../src/assets/images/profile.png'),

            // imagePath:
        },
        {
            id: 3,
            name: 'Marc T',
            username: '@username',
            image: require('../src/assets/images/profile.png'),
        },
        {
            id: 4,
            name: 'Marc T',
            username: '@username',
            image: require('../src/assets/images/profile.png'),
        },
        {
            id: 5,
            name: 'Marc T',
            username: '@username',
            image: require('../src/assets/images/profile.png'),
        },
        {
            id: 6,
            name: 'Marc T',
            username: '@username',
            image: require('../src/assets/images/profile.png'),
        }
    ]

    function moveNext() {
        navigation.navigate('JoinGroup')
        // navigation.navigate('SyncLater')
    }


    useEffect(() => {
        setModalVisible(true); // Show modal when the screen opens
    }, []);
    function syncLaterPress() {
        setModalVisible(!modalVisible);
        setSyncButton(true);
    }
    const renderItem = ({ item }) => (
        <View style={{ width: '50%', marginTop: '3%' }}>
            <View style={styles.groupCard}>
                <Image
                    style={styles.profileImage}
                    source={require('../src/assets/images/user.png')}
                />

                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.usernameText}>{item.username}</Text>
                <View style={styles.genderContainer}>
                    {/* <View style={{}}>
                                <TouchableOpacity
                                    style={[
                                        styles.selectedGenderButton,
                                    ]}
                                >
                                    <Text style={styles.nameText}>
                                        Add
                                    </Text>
                                </TouchableOpacity>
                    </View>     */}
                    <RadialGradientButton />
                </View>
            </View>
        </View>

        //mODAL code

    )
    {
        return (
            //    <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={['#2b2043', '#000000']}
                style={styles.background}
                // locations={[0, 0.3]}  // 90% of the gradient is black
                // start={{ x: 0.5, y: 0 }}
                // end={{ x: 0.5, y: 1 }}
                locations={[0.1, 0.3, 0.9]}  // Adjusting locations for middle gradient effect
        start={{ x: 0.3, y: 0 }}
        end={{ x: 0.5, y: 0.7}} 
            >
                <Header title="Add Friends" index={2} />
                {/* <SyncLaterButton/> */}

                {syncButton?
                <SyncLaterButton/>:
                null}
                <View style={styles.container}>
                    <TouchableOpacity style={styles.searchContainer}>
                        <Image
                            style={styles.searchImage}
                            source={require('../src/assets/images/searchIcon.png')}
                        />
                        <TextInput
                            style={{ paddingLeft: 10 }}
                            placeholder="Search Friends"
                            placeholderTextColor="#5E6368"

                            onChangeText={value => setSearch(value)}
                            value={search}
                        />
                    </TouchableOpacity>

                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={2}
                    />
                </View>

                {/* //mODAL code */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        //   Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>

                    <View style={styles.centeredView}>
                        {/* <BlurView
                    style={styles.absolute}
                    blurType="dark"
                    blurAmount={10}
                /> */}
                        <View style={styles.modalView}>

                            <Text style={styles.modalText}>To see your contact Turn on "Contact" in settings</Text>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Go to Setting</Text>
                            </TouchableOpacity>
                            <Pressable
                                style={[styles.button]}
                                //   onPress={() => navigation.navigate('SyncLater')}>
                                onPress={() => syncLaterPress()}>

                                <Text style={styles.textStyle}>Sync Later</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

            </LinearGradient>

        );
    }

}
const styles = StyleSheet.create({
    container: {
        // backgroundColor: "#1a1429",
        flex:1,
        width: '95%',
        alignSelf: 'center'
    },
    selectedGenderButton: {
        borderColor: '#8a4bd3', // Highlight color for selected gender
        borderWidth: 0.5,
        width: '60%',
        heigth: 30,
        marginTop: '10%',
        marginBottom: '10%',
        alignSelf: 'center',
        borderRadius: 10
    },
    searchImage: {
        marginTop: '4%',
        marginLeft: '1%'
    },
    profileImage: {
        marginTop: '15%',
        marginBottom: '5%',
        width: 60,
        height: 60,
        borderRadius: 30, // Half of width or height to make it a circle
        backgroundColor: "#EEF2F3",
        alignSelf: 'center',
    },
    background: {
        flex: 1,
    },
    groupCard: {
        width: '90%',
        // heigth: '40%',
        backgroundColor: 'rgba(26, 25, 37, 0.5)', // 0.5 is the alpha value, you can adjust it as needed

        // backgroundColor: '#1a1925',//
        borderWidth: 0.5,
        borderRadius: 28,
        alignSelf: 'center',
        marginBottom: '5%',
        borderWidth: 0.4,
        // borderColor: 'grey',


    },
    nameText: {
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'white'
        // color: 'grey',

    },
    usernameText: {
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'white',
        fontSize: 10,
        color: 'grey',
        paddingTop: '5%',

    },
    inputContainer: {
        width: '100%',
        marginTop: '9%',
        flexDirection: 'row',
        justifyContent: 'space-around'
        // backgroundColor:'red',

    },
    searchContainer: {
        backgroundColor: '#1a1925',
        flexDirection: 'row',
        // width:'95%',
        borderRadius: 10,
        borderColor: 'grey',
        borderWidth: 0.2,
        // marginTop: '2%',
        marginBottom: '3%',
        color: 'grey',
        paddingLeft: 10, // Adjust the padding-left as needed


    },
    linearGradient: {
        paddingVertical: 13,
        borderRadius: 25,
        alignItems: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '0%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)' // Semi-transparent background

    },
    modalView: {
        margin: 20,
        backgroundColor: 'rgba(26, 25, 37, 0.8)', // 0.5 is the alpha value, you can adjust it as needed
        // backgroundColor: '#1a1925',

        borderRadius: 10,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.50,
        shadowRadius: 4,
        elevation: 5,
        borderWidth: 0.2,
        borderColor: 'grey',
        width: '95%',
        height: '36%',
    },
    button: {
        // borderColor: '#8a4bd3', // Highlight color for selected gender
        borderWidth: 1,
        borderRadius: 20,
        width: '100%',
        height: '25%',
        // backgroundColor:'pink',
        // padding: 10,
        elevation: 2,
        alignSelf: 'center'
    },
    buttonClose: {
        // backgroundColor: 'grey',
        borderColor: '#8a4bd3', // Highlight color for selected gender
        // width:'100%',


    },
    textStyle: {
        color: 'white',
        // fontWeight: 'semi_bold',
        textAlign: 'center',
        fontSize: 16,
        paddingTop: '5%'
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 22,
        color: 'white',
    },
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },

});
export default SuggestedGroups;