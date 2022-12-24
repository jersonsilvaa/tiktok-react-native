import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { useTheme } from '../hooks/useTheme'
import { TabNavigation } from './TabNavigation'
import { getNavigationTheme, screen } from '../utils/import'

const Stack = createNativeStackNavigator()

export const AppNavigation = () => {
    const { theme } = useTheme()
    const myTheme = getNavigationTheme(theme)
    return <>
        <NavigationContainer theme={myTheme}>
            <Stack.Navigator>
                <Stack.Screen
                    name={screen.app.tab}
                    component={TabNavigation}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    </>
}