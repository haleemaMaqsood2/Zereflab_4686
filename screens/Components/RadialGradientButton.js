import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const RadialGradientButton = () => {
  const navigation = useNavigation();

  function moveNext() {
    navigation.navigate('JoinGroup')
}
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={moveNext}>
        <LinearGradient
          colors={['rgba(111, 44, 122, 0.00)', 'rgba(204, 81, 224, 0.30)']}
          // start={{ x: 0.5, y: 0.5 }}
          // end={{ x: 0.5, y: 1 }}
          start={{ x: 0.1, y: 0.2 }}
          end={{ x: 0.9, y: 0.1 }}
          // // locations={[0.2, 0.5, 0.5]}
          // start={{ x: 0, y: 0.75 }}
          // end={{ x: 1, y: 0.5 }}
          style={styles.gradient}
        >
          <Text style={styles.buttonText}>Add</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '7%',
    marginBottom:'13%'
  },
  button: {
    width: 103,
    height: 32,
    borderRadius: 16,
    borderWidth: 0.2,
    borderColor: '#F93DAB',
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default RadialGradientButton;
