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
export default function BottomTabStack() {
    const Tab = createBottomTabNavigator();

    const RenderIcon = ({ name }) => (
        <Image
            source={name}
            // source={require("../../assets/images/homeIcon.png")}
            style={{
                height: RFPercentage(3),
                width: RFPercentage(3),
            }}
            resizeMode="contain"
        />
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false, // Hide the labels
                    tabBarActiveTintColor: color.balckFontColor,
                    tabBarInactiveTintColor: color.balckFontColor,
                    tabBarStyle: {
                        backgroundColor: color.inputFieldColor, // Set tab bar color to black
                        height: Platform.OS === 'ios' ? hp(9) : hp(8), // Adjust height for Android
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingBottom: Platform.OS === 'ios' ? 10 : 0,
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
                                    require("../../assets/images/homeIcon.png")}
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
                                    require("../../assets/images/userIcon.png")}
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
                                    require("../../assets/images/addBottomIcon.png")}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="HomePage2"
                    component={HomePage}
                    options={{
                        // tabBarLabel: "HomePage",
                        tabBarIcon: ({ color, size }) => (
                            <RenderIcon
                                name={
                                    require("../../assets/images/clockIcon.png")}
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
                                    require("../../assets/images/MyProfileIcon.png")}
                            />
                        ),
                    }}
                />

            </Tab.Navigator>
        </SafeAreaView>
    );
}