// DescriptionSection.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../../src/styles/color';
import CenteredTextScreen from '../../ContactLoading';

const DescriptionSection = ({ description }) => {
    return (
        <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
                {description}
                <TouchableOpacity style={{height:17}}>
                    <Text style={[styles.descriptionText, { color: color.privacyPolicyColor }]}> Show More</Text>
                </TouchableOpacity>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    descriptionContainer: {
        left: 10,
        marginTop: hp(2.5),
        marginBottom: hp(3),
        width:'95%',//95
        flexDirection:'row',
        // alignItems:'flex-start'
        justifyContent:'center',
        // backgroundColor:'red'
    },
    descriptionText: {
        color: 'white',
        fontSize: 13,
        fontWeight: '300',
        fontFamily: 'Inter',
        lineHeight: 19.5,
        justifyContent:'center',
        alignItems:'center'
        // lineHeight:'150%',

        
        // textAlign:'left'
    },
});

export default DescriptionSection;
