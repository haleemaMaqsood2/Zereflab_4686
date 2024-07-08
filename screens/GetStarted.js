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

const GetStarted = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');

  function getStart() {
    console.log(">>>>")
    navigation.navigate('OnBoarding')
  }

  {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.firstSection}>
            <Image
              style={styles.mainImage}
              source={require('../src/assets/Main.png')}
            />
          </View>

          <View style={styles.secondSection}>
            <View>
              <Image
                style={styles.imageLogo}
                source={require('../src/assets/logo.png')}
              />
              <Text style={styles.title}>Find your crew.Discover Your scene</Text>
              <Text style={styles.subTitle} >Connect with friends and find fun places to hang out </Text>
            </View>
            <TouchableOpacity style={styles.buttonStyle}
              onPress={getStart}
            >
              <LinearGradient
                // linear-gradient(120deg, #F93DAB -5.05%, #A03FE3 52.32%, #29F1E5 152.14%)
                // colors={['#CB3DC8', '#8A4BD3']}//CB3DC8
                colors={['#F93DAB', '#A03FE3', '#29F1E5']} // Corrected colors array
                style={styles.linearGradient}
                // start={{ x: 0, y: 0 }}
                // end={{ x: 1, y: 1 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              locations={[0.4, 0.98, 1]}
              >
                <Text style={styles.buttonStyle}>Get Started</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%'
  },
  firstSection: {
    // height: "53%",
    // backgroundColor: 'black'
  },
  mainImage: {
    width:'100%',

  },
  imageLogo: {
    alignSelf: 'center',
    marginTop: '8%',
    // height:'50%'
  },
  secondSection: {
    backgroundColor: "#1a1429",
    height: '47%'
  },
  Logo: {
    textAlign: 'center',
    color: 'white',
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 28,
    fontWeight: '400',
    marginTop:'15%',
  },
  subTitle: {
    textAlign: 'center',
    color: 'white',
    marginTop:'5%',
    marginBottom: '7%',
  },
  getStart: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20
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
  linearGradient: {
    paddingVertical: 13,
    borderRadius: 25,
    alignItems: 'center',
  },
});
export default GetStarted;