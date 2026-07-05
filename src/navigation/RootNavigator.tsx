import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { SCREENS } from '../constant/screens'
import BottomTabs from './BottomTabs'
import { useAppTheme } from '../theme/ThemeProvider'
import DoctorDetails from '../screens/consultation/DoctorDetails'
import MyBookings from '../screens/consultation/MyBookings'

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
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default AppRoutes