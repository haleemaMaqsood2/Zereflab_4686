import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const SyncLaterButton = () => {
  const navigation = useNavigation();

  function moveNext() {
    navigation.navigate('JoinGroup')
}
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={moveNext}>
      <LinearGradient
                            // colors={['#CB3DC8', '#8A4BD3']}
                            colors={['#F93DAB', '#A03FE3', ]}

                            style={styles.linearGradient}
                            start={{ x: 0.2, y: 0 }}
                            end={{ x: 1, y: 1 }}
                        >
                            <Text style={styles.buttonText}>Sync Contacts</Text>
                        </LinearGradient>

      </TouchableOpacity>
                        <Text style={styles.syncText}> Sync you contacts to see who's on Where2</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: '7%',
  },
  button: {
    width: '70%', // Adjust the width as needed
        justifyContent:'center',
        alignSelf:'center',
        marginBottom:'2%',
        // height:'20%',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  buttonText: {
    alignSelf: 'center',
    color: "white",
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
},
syncText: {
  alignSelf: 'center',
  color: "white",
  textAlign: 'center',
  fontSize: 16,
  fontWeight: '300',
  marginBottom:'2%',

},
linearGradient: {
  paddingVertical: 13,
  borderRadius: 25,
  alignItems: 'center',
},
});

export default SyncLaterButton;
