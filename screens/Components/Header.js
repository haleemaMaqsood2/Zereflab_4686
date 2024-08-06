import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Header = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableOpacity onPress={goBack} style={styles.circleContainer}>
          <Image
            source={require('../../src/assets/images/circle.png')}
            style={styles.circleImage}
            resizeMode="contain"
          />
          <Image
            source={require('../../src/assets/images/arrow-right.png')}
            style={styles.arrowImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.centerContainer}>
        <Image
          source={require('../../src/assets/images/logo1.png')}
          style={styles.logoIcon}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.counter}></Text>
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
    paddingVertical: '2%',
    borderBottomColor: '#ccc',
    alignSelf: 'center',
  },
  leftContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Allows absolute positioning inside
  },
  circleImage: {
    width: 50,
    height: 50,
  },
  arrowImage: {
    position: 'absolute',
    width: 16, // Adjust size as needed
    height: 16, // Adjust size as needed
    alignItems:'center',
    alignSelf:'center',
    // top: '50%',
    // left: '50%',
    transform: [{ translateX: -2.0 }], // Center the arrow
  },
  logoIcon: {
    alignSelf: 'center',
    marginRight: wp('18%'),
    width: wp(25),
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
    // backgroundColor:'red'
  },
  counter: {
    color: 'white',
  },
});

export default Header;
