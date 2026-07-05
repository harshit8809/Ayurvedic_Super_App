import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { SCREENS } from '../constant/screens'
import BottomTabs from './BottomTabs'
import { useAppTheme } from '../theme/ThemeProvider'
import DoctorDetails from '../screens/consultation/DoctorDetails'
import MyBookings from '../screens/consultation/MyBookings'
import WishlistScreen from '../screens/shop/WishlistScreen'
import ProductDetails from '../screens/shop/ProductDetails'

const Stack = createNativeStackNavigator()

const AppRoutes = () => {

    const theme = useAppTheme();

    return (
        <NavigationContainer
            theme={theme}
        >
            <Stack.Navigator>
                <Stack.Screen name={SCREENS.TAB} component={BottomTabs}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name={SCREENS.DOCTOR_DETAILS} component={DoctorDetails}
                    options={{
                        title: 'Details',
                    }}
                />

                <Stack.Screen name={SCREENS.MY_BOOKINGS} component={MyBookings}
                    options={{
                        title: 'My Bookings',
                    }}
                />
                <Stack.Screen name={SCREENS.WISHLIST_SCREEN} component={WishlistScreen}
                    options={{
                        title: 'Wishlist',
                    }}
                />
                <Stack.Screen name={SCREENS.PRODUCT_DETAILS} component={ProductDetails}
                    options={{
                        title: 'Product Details',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default AppRoutes