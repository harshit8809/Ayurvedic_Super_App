import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/bottomTabScreens/Home";
import Consultation from "../screens/bottomTabScreens/Consultation";
import ShopScreen from "../screens/bottomTabScreens/Shop";
import Records from "../screens/bottomTabScreens/Records";

import {
    House,
    Stethoscope,
    ShoppingBag,
    FileText,
} from "lucide-react-native";
import { SCREENS } from "../constant/screens";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { APP_COLORS } from "../constant/appColors";


const Tab = createBottomTabNavigator();

const BottomTabs = () => {

    const { bottom } = useSafeAreaInsets();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: APP_COLORS.PRIMARY,
                tabBarInactiveTintColor: APP_COLORS.TEXT_SECONDARY,
                tabBarStyle: {
                    height: bottom + 65,
                    paddingBottom: bottom + 8,
                    paddingTop: 8,
                },
            }}
        >
            <Tab.Screen
                name={SCREENS.HOME}
                component={HomeScreen}
                options={{
                    title: 'Dashboard',
                    tabBarIcon: ({ color, size }) => (
                        <House size={size} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name={SCREENS.CONSULTATION}
                component={Consultation}
                options={{
                    title: 'Consultation',
                    tabBarIcon: ({ color, size }) => (
                        <Stethoscope size={size} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name={SCREENS.SHOP}
                component={ShopScreen}
                options={{
                    title: 'Shop',
                    tabBarIcon: ({ color, size }) => (
                        <ShoppingBag size={size} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name={SCREENS.RECORDS}
                component={Records}
                options={{
                    title: 'Records',
                    tabBarIcon: ({ color, size }) => (
                        <FileText size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabs;