import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { SCREENS } from '../constant/screens'
import BottomTabs from './BottomTabs'
import { useAppTheme } from '../theme/ThemeProvider'
import DoctorDetails from '../screens/consultation/DoctorDetails'

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
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default AppRoutes