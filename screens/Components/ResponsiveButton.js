// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { color } from '../../src/styles/color';
// const ResponsiveButton = ({ buttonTitle, buttonState, nextScreenName, onPress, marginTop }) => {
//     const { height: screenHeight } = Dimensions.get('window');

//     return (
//         <View style={{ marginTop: marginTop, flex: 1 }}>
//             <View style={[styles.ButtonContainer, { marginTop: marginTop }]}>
//                 <TouchableOpacity onPress={onPress}
//                     style={[styles.touchableArea, buttonState ? styles.buttonActive : styles.buttonInactive]}
//                 >
//                     <Text style={styles.conTinueText}>{buttonTitle}</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     ButtonContainer: {
//         backgroundColor: '#ffffff33',
//         // height:hp('7%'),
//         height: hp(6),
//         // width:363,

//         width: wp('90%'),
//         marginTop: hp('-1%'),
//         textAlign: 'center',
//         borderRadius: 10,
//         alignItems: 'center',
//         justifyContent: 'center',
//         alignSelf: 'center'



//     },
//     conTinueText: {
//         alignItems: 'center',
//         color: '#FFFFFF',
//         fontSize: 16,
//         fontWeight: '700',
//         fontFamily: 'inter'

//     },
//     touchableArea: {
//         width: '100%', // Make it the full width of the container
//         height: '100%', // Make it the full height of the container
//         alignItems: 'center', // Center the text
//         justifyContent: 'center', // Center the text
//     },
//     buttonActive: {
//         backgroundColor: color.onBoardingButton,
//         borderRadius: 10,

//     },
//     buttonInactive: {
//         // backgroundColor: '#ffffff33',
//         borderRadius: 10,

//     },
//     conTinueText: {
//         alignItems: 'center',
//         color: '#FFFFFF',
//         fontSize: 16,
//         fontWeight: '700',
//         fontFamily: 'inter',

//     },
//     buttonText: {
//         fontSize: 16,
//         fontWeight: '400',
//         color: color.whiteFontColor,
//         fontFamily: 'Inter',
//         paddingLeft: wp('1%'),
//         // backgroundColor:'red',
//         alignSelf: 'center',
//         width: wp('50%')
//     },
// });
import React from 'react';
import { TouchableOpacity, View, SafeAreaView, KeyboardAvoidingView, Text, StyleSheet, Platform } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { color } from '../../src/styles/color';

const ResponsiveButton = ({ title, buttonState, keyboardVisible, keyboardHeight, onPress,marginTop }) => {
  return (
   

        <View style={[
          styles.buttonContainer,
          { marginTop:marginTop ,
            // flex:1 
        }
        ]}>
          <TouchableOpacity
            onPress={onPress}
            style={[
              styles.button,
              buttonState ? styles.activeButton : styles.inactiveButton
            ]}
          >
            <Text style={styles.buttonText}>{title}</Text>
          </TouchableOpacity>
        </View>
    
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    // left: wp(2),
    // right: wp(2),
    alignItems: 'center',
    width:'100%',
    bottom: 0, // Position the button at the bottom and adjust with marginBottom
  },
  button: {
    width: wp('92%'),
    height: hp(6),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeButton: {
    backgroundColor: color.onBoardingButton,
  },
  inactiveButton: {
    backgroundColor: color.WhiteWithThirtypercentOpacity,
    // backgroundColor: 'white',

  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});


export default ResponsiveButton;
