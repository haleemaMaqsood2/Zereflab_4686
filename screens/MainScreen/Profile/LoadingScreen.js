import React from 'react';
import { SafeAreaView, View, Text,StyleSheet ,Image,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import { color } from '../../../src/styles/color';
// import CircularProgress from 'react-native-circular-progress-indicator';

// import CircularProgress from 'react-native-circular-progress-indicator';

const LoadingScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
    
       
{/* 
                  <Progress.Bar progress={0.3} width={200} />
                  <Progress.Pie progress={0.4} size={50} />
                  <Progress.Circle size={30} indeterminate={true} /> */}

{/* <CircularProgress value={58} /> */}

                  {/* <Progress.CircleSnail color={['red', 'green', 'blue']} /> */}


        <View style={styles.centeredContainer}>
          <View style={styles.textContainer}>
          <Progress.Circle size={35} indeterminate={true} />
          {/* <Image
                        source={require('../src/assets//images/loadingIcon.png')}
                    /> */}
            <Text style={styles.addingText}>Adding your Contacts</Text>
            <Text style={styles.waitingText}>This may will take a minute</Text>
          </View>
        </View>
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: color.backgroundColor,

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
    fontWeight:'700',
    fontFamily:'Inter',
    paddingTop:'5%',
  },
  waitingText:{
    color:'white',
    paddingTop:'1%',
    fontSize:14,
    fontWeight:'300',
    fontFamily:'Inter',


  }
});

export default LoadingScreen;
