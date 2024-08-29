import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from "react-native-responsive-fontsize";
import { color } from '../../../src/styles/color';

const HomeTab = ({ data, onTabSelect }) => {
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
    // height:'25%',
    width: '95%',
    backgroundColor: color.inputFieldColor, // Use inputField color for tab container
    // backgroundColor:'red',
    alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: color.whitewithThirty,
    borderRadius: 25,
    paddingTop:'1%',
    paddingBottom:'1%',
    flexDirection:'row'

  },
  tab: {
    
    // paddingHorizontal: (33.5),
    width:'31%',
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: color.inputFieldColor, // Default tab color
    // backgroundColor:'red', // Default tab color
    height:'100%',
    alignItems:'center',

    justifyContent:'space-around',

  },
  selectedTab: {
    backgroundColor: color.whiteColor, // Selected tab color
    marginLeft:'1%',
    height:'100%',
    borderRadius: 20,
  },
  tabText: {
    fontSize: 12, // Use responsive font size
    fontWeight:'500',
    font:'Inter',
    color: color.whiteWithfiftypercentOpacity, // Default text color
  },
  selectedTabText: {
    // fontWeight: 'bold', // Bold text for selected tab
    color: color.balckFontColor, // Black text color for selected tab
  },
});

export default HomeTab;
