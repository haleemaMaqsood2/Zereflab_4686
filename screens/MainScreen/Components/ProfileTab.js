import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from "react-native-responsive-fontsize";
import { color } from '../../../src/styles/color';

const ProfileTab = ({ data, onTabSelect }) => {
  const [selectedTab, setSelectedTab] = useState(data[0].id); // Default to the first tab
  const handleTabSelect = (tab) => {
    setSelectedTab(tab.id);
    onTabSelect(tab.name); // Notify the parent component of the selected tab
  };

  return (
    <View style={{ width: wp('100%'), backgroundColor:color.balckFontColor}}>
      <View style={styles.tabContainer}>
        {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}> */}
          {data.map((tab) => (
            <TouchableOpacity
              key={tab.id}
              style={[
                styles.tab,
                selectedTab === tab.id && styles.selectedTab // Apply selected tab style
              ]}
              // onPress={() => setSelectedTab(tab.id)} // Set selected tab
              onPress={() => handleTabSelect(tab)} // Set selected tab and notify parent

            >
              <Text style={[
                styles.tabText,
                selectedTab === tab.id && styles.selectedTabText // Apply selected tab text style
              ]}>
                {tab.name}
              </Text>
            </TouchableOpacity>
          ))}
        {/* </ScrollView> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    alignItems: 'center',
    height: hp('5%'),
    width: '95%',
    // backgroundColor:'red',
    alignSelf: 'center',
   
    paddingTop:'1%',
    paddingBottom:'1%',
    flexDirection:'row'

  },
  tab: {
    
    // paddingHorizontal: (33.5),
    width:'45%',
    marginRight: 10,
    borderRadius: 20,
    marginLeft:'1%',
    height:'100%',
    alignItems:'center',
    justifyContent:'space-around',

  },
  selectedTab: {
    // marginLeft:'0.5%',
    height:'100%',
    borderRadius: 20,
    // width:'30%',
  },
  tabText: {
    fontSize: 16, // Use responsive font size
    fontWeight:'400',
    font:'Inter',
    color: color.whiteWithfiftypercentOpacity, // Default text color
  },
  selectedTabText: {
    color: color.whiteColor, // Black text color for selected tab
    textDecorationLine:'underline',
    fontWeight:'600',

  },
});

export default ProfileTab;
