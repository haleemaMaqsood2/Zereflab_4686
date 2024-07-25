import React from 'react';
import { SafeAreaView, View, Text, StyleSheet ,Image,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress';
// import CircularProgress from 'react-native-circular-progress-indicator';

const CenteredTextScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={['#2b2043', '#000000']}
        style={styles.background}
        start={{ x: 1, y: 0 }}
        end={{ x: 0.8, y: 1 }}
      >
        <TouchableOpacity
                    onPress={() => navigation.navigate('Location')}

        >

                  <Text style={{color:'white'}}>Next</Text>
                  <Progress.Bar progress={0.3} width={200} />
                  <Progress.Pie progress={0.4} size={50} />
                  <Progress.Circle size={30} indeterminate={true} />
                  {/* <Progress.CircleSnail color={['red', 'green', 'blue']} /> */}


        </TouchableOpacity>
        <View style={styles.centeredContainer}>
          <View style={styles.textContainer}>
          <Image
                        source={require('../src/assets//images/loadingIcon.png')}
                    />
            <Text style={styles.addingText}>Adding your Contacts</Text>
            <Text style={styles.waitingText}>This may will take a minute</Text>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    // backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  addingText:{
    color:'white',
    fontSize:16,
    fontWeight:'500',
    paddingTop:'5%',
  },
  waitingText:{
    color:'white',
    paddingTop:'1%',
    fontSize:14,
  }
});

export default CenteredTextScreen;
