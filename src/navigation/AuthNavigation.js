import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { useTheme } from '../hooks/useTheme'
import { AuthScreen, getNavigationTheme } from '../utils/import'

const Stack = createNativeStackNavigator()

export const AuthNavigation = () => {
    const { theme } = useTheme()
    const myTheme = getNavigationTheme(theme)
    return <>
        <NavigationContainer theme={myTheme}>
            <Stack.Navigator>
                <Stack.Screen name='auth' component={AuthScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    </>
}