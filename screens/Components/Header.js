import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = ({title,index}) => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>

      <View style={styles.rightContainer}>

        <TouchableOpacity onPress={goBack}>
          <Image
            source={require('../../src/assets/arrow.png')}
            style={styles.profileIcon}
            resizeMode="contain"

          />
        </TouchableOpacity>
        {/* <Text style={{color:'white'}}>Arr</Text> */}
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.usernameText}>{title}</Text>
      </View>
      <TouchableOpacity style={styles.rightContainer}>
        <Text style={styles.counter}>{index}/4</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '3%',
    paddingVertical: '8%',
    borderBottomColor: '#ccc',
    // width:'95%',
    // backgroundColor:'red',
    alignSelf: 'center'
  },
  profileIcon: {
    // width: 20,
    // // height:29,
    // backgroundColor:"#EEF2F3 ",
    // paddingTop:45,
    alignSelf: 'center',
    width: 100,
    // height: '50%', 
  },

  ProfileContainer: {
    padding: 5,
    borderColor: 'white',
    borderWidth: 0.25,
    width: '11%',
    height: 35,
    // borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  usernameText: {
    fontSize: 18,
    color: "white",
    textAlign: 'center',
  },
  rightContainer: {
    padding: 5,
    borderColor: 'white',
    borderWidth: 0.25,
    width: '12.5%',
    height: 49,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  counter: {
    color: 'white'
  }
});

export default Header;
