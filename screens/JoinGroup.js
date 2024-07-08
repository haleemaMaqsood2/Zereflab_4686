import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList,
    ImageBackground,

} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Header from './Components/Header';
import RadialGradientButton from './Components/RadialGradientButton';
import PseudoRadialGradientButton from './Components/PseudoRadialGradientButton';
const JoinGroup = () => {
    const navigation = useNavigation();
    const [search, setSearch] = useState('');

    const data = [
        {
            id: 1,
            name: 'AthLetic Community',
            type: 'Public ',
            members: '1.1k',
            friend: 2,
            image: require('../src/assets/groupImage.png'),
        },
        {
            id: 2,
            name: 'AthLetic Community',
            type: 'Public ',
            members: '1.1k',
            friend: 2,
            image: require('../src/assets/groupImage.png'),
        },
        {
            id: 3,
            name: 'AthLetic Community',
            type: 'Public ',
            members: '1.1k',
            friend: 2,
            image: require('../src/assets/groupImage.png'),
        },
        {
            id: 4,
            name: 'AthLetic Community',
            type: 'Public ',
            members: '1.1k',
            friend: 2,
            image: require('../src/assets/groupImage.png'),
        },
        {
            id: 5,
            name: 'AthLetic Community',
            type: 'Public ',
            members: '1.1k',
            friend: 2,
            image: require('../src/assets/groupImage.png'),
        },
        {
            id: 6,
            name: 'AthLetic Community',
            type: 'Public',
            members: '1.1k',
            friend: 2,
            image: require('../src/assets/groupImage.png'),
        }
    ];
    function moveNext() {
        navigation.navigate('ContactLoading')
    }
    const renderItem = ({ item }) => (
        <View style={{ width: '50%', marginTop: '3%' }}>
            <View style={styles.groupCard}>
            <ImageBackground
                    style={styles.profileImage}
                    source={item.image}
                />
                <View style={styles.closeIcon}>
                    <Image
                        style={styles.closeIconImage}

                            source={require('../src/assets/closeIcon.png')}
                        />
                </View>    

                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.usernameText}>{item.type} group - {item.members} members</Text>
                <View style={{ flexDirection: 'row', paddingLeft: '4%', paddingTop: '5%' }}>
                    <Image
                        source={require('../src/assets/friendsImage.png')}
                    />
                    <Text style={styles.usernameText}>{item.friend} friends are member</Text>
                </View>
                <View style={styles.genderContainer}>

                    <TouchableOpacity
                        style={[
                            styles.selectedGenderButton,styles.innerShadow
                        ]}
                    >
                        <Text style={styles.nameText}>
                            Join
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <LinearGradient
                colors={['#2b2043', '#000000']}
                style={styles.background}
                locations={[0, 0.3]}  // 90% of the gradient is black
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
            >
                <Header title="Join Groups" index={3} />
                {/* <PseudoRadialGradientButton/> */}

                <View style={styles.container}>
                    <TouchableOpacity style={styles.searchContainer}>
                        <Image
                            style={styles.searchImage}
                            source={require('../src/assets/searchIcon.png')}
                        />
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search Groups"
                            placeholderTextColor="#5E6368"
                            onChangeText={value => setSearch(value)}
                            value={search}
                        />
                        <Image
                            style={styles.searchImage}
                            source={require('../src/assets/filterIcon.png')}
                        />
                    </TouchableOpacity>

                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={2}
                        showsVerticalScrollIndicator={true}
                    />

                    <View style={{ marginBottom: '15%' }}>

                    </View>
                    <TouchableOpacity style={styles.fixedButton} onPress={moveNext}>
                        <LinearGradient
                            // colors={['#CB3DC8', '#8A4BD3']}
                            colors={['#F93DAB', '#A03FE3']}

                            style={styles.linearGradient}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                        >
                            <Text style={styles.buttonText}>Join Later</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        width: '95%',
        alignSelf: 'center',
    },
    fixedButton: {
        position: 'absolute',
        bottom: 20,
        left: '30%',
        // justifyContent:'center',
        transform: [{ translateX: -50 }], // Center horizontally
        width: '70%', // Adjust the width as needed
    },
    selectedGenderButton: {
        borderColor: '#F93DAB', // Highlight color for selected gender
        borderWidth: 0.5,
        width: '70%',
        height: 40,
        // marginTop: '5%',
        marginBottom: '13%',
        alignSelf: 'center',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchImage: {
        marginTop: '0%',
        marginLeft: '1%',
        marginRight: '4%',
    },
    // profileImage: {
    //     marginBottom: '5%',
    //     marginTop:'3%',
    //     width: '90%',
    //     backgroundColor: "#EEF2F3",
    //     alignSelf: 'center',
    //     // background:'red',
    // },
    profileImage: {
        marginBottom: '5%',
        // marginTop: '3%',
        width: '100%',
        height: 100, // Set a fixed height for the image
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        // borderRadius: 15, // Make the border radius same as container
        overflow: 'hidden', // Ensure the image respects the border radius
        alignSelf: 'center',
    },
    background: {
        flex: 1,
    },
    groupCard: {
        width: '95%',
        backgroundColor: '#1a1925',
        // borderWidth: 0.2,
        borderRadius: 15,
        alignSelf: 'center',
        marginBottom: '5%',
        borderColor: 'grey',
        // padding: 10,
    },
    buttonText: {
        alignSelf: 'center',
        color: "white",
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
    },
    nameText: {
        justifyContent: 'flex-start',
        // alignSelf: 'center',
        color: 'white',
        paddingLeft: '5%',
        fontSize: 16,
        paddingBottom:'3%',
 
    },
    usernameText: {
        justifyContent: 'flex-start',
        paddingLeft: '5%', 
        color: 'grey',
        fontSize: 12,
    },
    searchContainer: {
        backgroundColor: '#1a1925',
        flexDirection: 'row',
        borderRadius: 18,
        borderColor: 'grey',
        borderWidth: 0.1,
        // marginTop: '3%',
        marginBottom: '1%',
        color: 'grey',
        paddingLeft: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    searchInput: {
        flex: 1,
        color: 'white',
    },
    linearGradient: {
        paddingVertical: 13,
        borderRadius: 25,
        alignItems: 'center',
    },
    innerShadow: {
        // width: '80%',
        // height: 30,
        // marginTop: '10%',
        // marginBottom: '10%',
        // alignSelf: 'center',
        // borderRadius: 20,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#1a1925',
        shadowColor: '#8a4bd3',
        shadowOffset: { width: 0, height: 10},
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
    },
    closeIcon:{
        backgroundColor: 'rgba(26, 25, 37, 0.5)',
        width:'12%',
        height:'9%',
        position:'absolute',
        right:'5%',
        top:'3%',
        borderRadius:20,
        // backgroundColor:'red',


    },
    closeIconImage:{
        alignSelf:'center',
        marginTop:'25%'
    }
});

export default JoinGroup;
