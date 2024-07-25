import React, { useState, useRef } from 'react';
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

const OnBoarding = () => {
  const navigation = useNavigation();
  const [v1, setV1] = useState('');
  const [v2, setV2] = useState('');
  const [v3, setV3] = useState('');
  const [v4, setV4] = useState('');
  const v1Ref = useRef(null);
  const v2Ref = useRef(null);
  const v3Ref = useRef(null);
  const v4Ref = useRef(null);
  const handleChange = (value, setValue, nextRef) => {
    setValue(value);
    if (value.length === 1 && nextRef) {
      nextRef.current.focus();
    }
  };
  function moveNext() {
    navigation.navigate('SignUp')
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
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Please enter the verification code here</Text>


          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              // onChangeText={value => setV1(value)}
              onChangeText={value => handleChange(value, setV1, v2Ref)}

              keyboardType="numeric"
              maxLength={1}
              value={v1}
              ref={v1Ref}
            />
            <TextInput
              style={styles.input}
              // onChangeText={value => setV2(value)}
              onChangeText={value => handleChange(value, setV2, v3Ref)}

              value={v2}
              keyboardType="numeric"
              maxLength={1}
              ref={v2Ref}

            />
            <TextInput
              style={styles.input}
              // onChangeText={value => setV3(value)}
              onChangeText={value => handleChange(value, setV3, v4Ref)}

              value={v3}
              keyboardType="numeric"
              maxLength={1}
              ref={v3Ref}

            />
            <TextInput
              style={styles.input}
              onChangeText={value => handleChange(value, setV4, null)}

              // onChangeText={value => setV4(value)}
              ref={v4Ref}

              value={v4}
              keyboardType="numeric"
              maxLength={1}
            />
          </View>

          <View style={styles.bottomSection}>
            <Text style={styles.resendText}>Resend code</Text>
            <TouchableOpacity onPress={moveNext}>
              <Text style={styles.whatsappText}>Receive code via whatsapp</Text>
            </TouchableOpacity>
          </View>
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
  background: {
    flex: 1,
  },
  titleContainer: {
    width: '95%',
    alignSelf: 'center',
    marginTop: '27%'
  },
  titleText: {
    color: 'white',
    fontSize: 28,
    fontWeight: '400',
    // font:'urbanist'
  },
  inputView: {
    backgroundColor: '#555C73',
  },
  textInput: {
    width: '80%',
    height: "40%",
    backgroundColor: 'red', // Light grey background color
    // borderRadius: 5,
    // paddingHorizontal: 10,
    // color: 'black', // Text color inside the input field
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '5%',
    paddingLeft:'3%'
  },
  resendText: {
    color: '#FF44F8',//FF44F8
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
    width: '22%',
    borderRadius: 20,
    borderColor: 'grey',
    // borderWidth: 0.1,
    color: 'white',
    fontSize: 28,
    textAlign: 'center'
  }

});
export default OnBoarding;