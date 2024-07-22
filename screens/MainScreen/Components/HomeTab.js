import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from "react-native-responsive-fontsize";
import { color } from '../../../src/styles/color';

const HomeTab = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState(data[0].id); // Default to the first tab

  return (
    <View style={{ width: wp('100%'), backgroundColor:color.balckFontColor}}>
      <View style={styles.tabContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {data.map((tab) => (
            <TouchableOpacity
              key={tab.id}
              style={[
                styles.tab,
                selectedTab === tab.id && styles.selectedTab // Apply selected tab style
              ]}
              onPress={() => setSelectedTab(tab.id)} // Set selected tab
            >
              <Text style={[
                styles.tabText,
                selectedTab === tab.id && styles.selectedTabText // Apply selected tab text style
              ]}>
                {tab.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    alignItems: 'center',
    height: hp('6%'),
    width: wp('94%'),
    backgroundColor: color.inputFieldColor, // Use inputField color for tab container
    alignSelf: 'center',
    borderWidth: 0.3,
    borderColor: color.whiteColor,
    borderRadius: 25,
    paddingTop:'1%',
    paddingBottom:'1%',

  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: color.inputFieldColor, // Default tab color
    justifyContent:'space-around',

  },
  selectedTab: {
    backgroundColor: color.whiteColor, // Selected tab color
    marginLeft:'1%'
  },
  tabText: {
    fontSize: 12, // Use responsive font size
    color: color.placeholderColor, // Default text color
  },
  selectedTabText: {
    fontWeight: 'bold', // Bold text for selected tab
    color: color.balckFontColor, // Black text color for selected tab
  },
});

export default HomeTab;
