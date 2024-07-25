import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const PseudoRadialGradientButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <View style={styles.gradientContainer}>
          <LinearGradient
            colors={['rgba(111, 44, 122, 0.0)', 'rgba(204, 81, 224, 0.3)']}
            style={[styles.gradient, styles.gradientTop]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
          />
          <LinearGradient
            colors={['rgba(111, 44, 122, 0.0)', 'rgba(204, 81, 224, 0.3)']}
            style={[styles.gradient, styles.gradientBottom]}
            start={{ x: 0.5, y: 1 }}
            end={{ x: 0.5, y: 0 }}
          />
          <LinearGradient
            colors={['rgba(111, 44, 122, 0.0)', 'rgba(204, 81, 224, 0.3)']}
            style={[styles.gradient, styles.gradientLeft]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
          />
          <LinearGradient
            colors={['rgba(111, 44, 122, 0.0)', 'rgba(204, 81, 224, 0.3)']}
            style={[styles.gradient, styles.gradientRight]}
            start={{ x: 1, y: 0.5 }}
            end={{ x: 0, y: 0.5 }}
          />
        </View>
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 32,
    width: 200,
    height: 200,
    borderWidth: 1,
    borderColor: '#F93DAB',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  gradientContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: '50%',
  },
  gradientTop: {
    top: 0,
  },
  gradientBottom: {
    bottom: 0,
  },
  gradientLeft: {
    left: 0,
    width: '50%',
    height: '100%',
  },
  gradientRight: {
    right: 0,
    width: '50%',
    height: '100%',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default PseudoRadialGradientButton;