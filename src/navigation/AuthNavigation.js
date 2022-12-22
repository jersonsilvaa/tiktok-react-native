import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { useTheme } from '../hooks/useTheme'
import { AuthScreen, getNavigationTheme, screen, LoginEmailScreen, RegisterEmailScreen } from '../utils/import'

const Stack = createNativeStackNavigator()

export const AuthNavigation = () => {
    const { theme } = useTheme()
    const myTheme = getNavigationTheme(theme)
    return <>
        <NavigationContainer theme={myTheme}>
            <Stack.Navigator screenOptions={{headerTransparent: true}}>
                <Stack.Screen
                    name={screen.auth.auth}
                    component={AuthScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name={screen.auth.loginEmail}
                    component={LoginEmailScreen}
                />
                <Stack.Screen
                    name={screen.auth.registerEmail}
                    component={RegisterEmailScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    </>
}