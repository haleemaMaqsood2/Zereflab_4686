import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList,
} from 'react-native';
import HomePage from '../../../screens/MainScreen/HomePage';
import { color } from '../../styles/color';

const Tab = createBottomTabNavigator();
import { RFPercentage } from "react-native-responsive-fontsize";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ActivityStack from './ActivityStack';
export default function BottomTabStack() {
    const Tab = createBottomTabNavigator();

    const RenderIcon = ({ name,size}) => (
        <Image
            source={name}
            // source={require("../../assets/images/homeIcon.png")}
            style={{
                height:size,
                width: size,
            }}
            resizeMode="contain"
        />
    );

    return (
        <SafeAreaView style={{ 
            flex: 1
        // ,backgroundColor:color.inputFieldColor
        }}>
                        <View style={styles.topArea} />
                        <View style={styles.contentArea}>


    
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false, // Hide the labels
                    tabBarActiveTintColor: color.balckFontColor,
                    tabBarInactiveTintColor: color.balckFontColor,
                    tabBarStyle: {
                        backgroundColor: color.inputFieldColor, // Set tab bar color to black
                        height: Platform.OS === 'ios' ? hp(5.5) : hp(8), // Adjust height for Android
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingBottom: Platform.OS === 'ios' ? 0 : 0,
                        paddingTop: Platform.OS === 'ios' ?3 : 0,

                        borderTopWidth: 0, // Remove top border

                    },
                    headerShown: false,
                    tabBarHideOnKeyboard: true,
                }}
            >
                <Tab.Screen
                    name="HomePage"
                    component={HomePage}
                    options={{
                        // tabBarLabel: "HomePage",
                        tabBarIcon: ({ color, size }) => (
                            <RenderIcon
                                name={
                                    require("../../assets/images/BottomHome1x4.png")}
                                size= {RFPercentage(4)}
                            />
                        ),
                    }}
                />
                 <Tab.Screen
                    name="HomePage4"
                    component={HomePage}
                    options={{
                        // tabBarLabel: "HomePage",
                        tabBarIcon: ({ color, size }) => (
                            <RenderIcon
                                name={
                                    require("../../assets/images/bottomProfile1x4.png")}
                                    size= {RFPercentage(3)}

                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="HomePage1"
                    component={HomePage}
                    options={{
                        // tabBarLabel: "HomePage",
                        tabBarIcon: ({ color, size }) => (
                            <RenderIcon
                                name={
                                    require("../../assets/images/bottomPlus1x4.png")}
                                    size= {RFPercentage(3)}

                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="ActivityStack"
                    component={ActivityStack}
                    options={{
                        // tabBarLabel: "HomePage",
                        tabBarIcon: ({ color, size }) => (
                            <RenderIcon
                                name={
                                    require("../../assets/images/bottonClock1x4.png")}
                                    size= {RFPercentage(4.9)}

                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="HomePage3"
                    component={HomePage}
                    options={{
                        // tabBarLabel: "HomePage",
                        tabBarIcon: ({ color, size }) => (
                            <RenderIcon
                                name={
                                    require("../../assets/images/BottomUser1x4.png")}
                                    size= {RFPercentage(3.5)}

                            />
                        ),
                    }}
                />

            </Tab.Navigator>
            </View>
            <View style={styles.bottomArea} />

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    topArea: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: hp('7%'), // Adjust this value to change the height of the top color section
        backgroundColor: color.backgroundColor,
        zIndex: 1,
    },
    contentArea: {
        flex: 1,
        backgroundColor: color.inputFieldColor,
    },
    bottomArea: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: hp('5%'), // Adjust this value to change the height of the bottom color section
        backgroundColor: color.inputFieldColor,
        zIndex: 1,
    },
});