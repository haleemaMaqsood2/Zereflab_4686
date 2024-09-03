import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../../src/styles/color';

const DescriptionSection = ({ description }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    const isLongDescription = description.length > 172;
    const displayedDescription = isLongDescription && !showFullDescription ? `${description.slice(0, 172)}...` : description;
    const toggleText = showFullDescription ? ' Show Less' : ' Show More';

    return (
        <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
                {displayedDescription}
                {isLongDescription && (
                    <Text style={[styles.descriptionText, { color: color.privacyPolicyColor }]} onPress={toggleDescription}>
                        {toggleText}
                    </Text>
                )}
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
        // flexWrap: 'wrap', // Allow text and button to wrap if needed

        // flexDirection:'row',
        // alignItems:'flex-start'
        // justifyContent:'center',
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
