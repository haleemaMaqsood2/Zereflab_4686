import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, FlatList } from 'react-native';
import { color } from '../../../src/styles/color';
import BarItem from './BarItem';
import Header from '../Components/Header';

const PrivacyScreen = ({ navigation }) => {
  const data = [
    {
      id: 1,
      leftIcon: require('../../../src/assets/images/Setting/termAndService.png'),
      title: 'Terms of Service',
      rightIcon: require('../../../src/assets/images/Setting/arrow-right.png'),
    },
    {
      id: 2,
      leftIcon: require('../../../src/assets/images/Setting//PrivacyPolicy.png'),
      title: 'Privacy Policy',
      rightIcon: require('../../../src/assets/images/Setting/arrow-right.png'),
    }
  ]

  const renderItem = ({ item }) => (
    <BarItem
      leftIcon={item.leftIcon}
      id={item.id}
      leftIconSize={24}
      middleText={item.title}
      rightIcon={item.rightIcon}
      rightIconSize={24}
      onPress={() => onPress(item.id)}
    />
  );
  {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Header title={"Privacy"} />

       <View style={{width:('95%'),alignSelf:'center',flex:1}}>
       <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
       </View>
       <TouchableOpacity style={styles.buttonContainer}>
       <Image
          source={require('../../../src/assets/images/Setting/deleteIcon.png')}
          style={[styles.leftIcon, { width: 16, height: 16 }]}
          resizeMode="contain"
           />
            <Text style={{ color: '#F9373F', fontSize: 14, fontFamily: 'Inter', fontWeight: '600' }}>Delete Account</Text>
        </TouchableOpacity>

      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: color.backgroundColor,
  },
  // ButtonContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   padding: 10,
  //   backgroundColor: color.inputFieldColor,
  //   marginVertical: 5,
  //   borderRadius: 8,
  // },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: color.inputFieldColor,
    width:'95%',
    height: '6%',
    alignSelf:'center',
    // flex:1,
    marginBottom: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    flexDirection:'row'
    // backgroundColor: 'red',
},
leftIcon: {
  marginRight: 10,
},
  secondHeader: {
    width: '95%',
    alignSelf: 'center',
    marginTop: '1%',
    justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor:'red'
  },
  listData: {
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  friendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: '6%',
    // width:'90%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
    flex: 1,
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'inter'
    // font:'urbanist'
  },
  touchableArea: {
    width: '100%', // Make it the full width of the container
    height: '100%', // Make it the full height of the container
    alignItems: 'center', // Center the text
    justifyContent: 'center', // Center the text
  },
  image: {
    height: 40,
    width: 40,
  },
  infoContainer: {
    // backgroundColor:'pink',
    width: '70%',
    alignSelf: 'center',
    paddingLeft: '4%'
  },
  descriptionText: {
    fontSize: 12,
    fontFamily: 'Inter',
    fontWeight: '700',
    color: color.whiteColor,
  },
  description2Text: {
    fontSize: 12,
    fontFamily: 'Inter',
    fontWeight: '400',
    color: color.whiteColor,
  },
  timestyle: {
    fontSize: 12,
    fontFamily: 'Inter',
    fontWeight: '400',
    color: '#ffffff80',
  }
});
export default PrivacyScreen;