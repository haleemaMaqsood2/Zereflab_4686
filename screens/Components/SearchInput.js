import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { color } from '../../src/styles/color'; // Adjust the import according to your project structure

const SearchInput = ({ iconSource, placeholder, value, onChangeText }) => {
  return (
    <View style={styles.searchContainer}>
      <Image source={iconSource} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={color.whiteWithfiftypercentOpacity} // Assuming you have a color file where you define your colors
        value={value}
        onChangeText={onChangeText}
        keyboardAppearance="dark"
        autoCorrect={false}
        autoCompleteType="off"
        autoCapitalize="none"
        spellCheck={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: color.inputFieldColor,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: wp('5%'),
    width: '95%',
    height:hp(4),
    marginTop: hp('2%'),
    alignSelf:'center',
    marginBottom:hp(2),
    borderWidth:1,
    borderColor:color.whiteWithTenPercencentOpacity,
  },
  icon: {
    height: RFPercentage(1.6),
    width: RFPercentage(1.6),
    marginRight: wp('3%'),
  },
  input: {
    flex: 1,
    fontFamily:'Inter',
    fontSize: 13,
    fontWeight: '400',
    color: color.whiteColor,
    height: Platform.OS === 'ios' ? RFPercentage(6) : null,
  },
});

export default SearchInput;
