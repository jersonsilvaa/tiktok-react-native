import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen, screen } from '../../utils/import'

const Stack = createNativeStackNavigator()

export const HomeStack = () => {
    return <>
        <Stack.Navigator>
            <Stack.Screen
                name={screen.home.tab}
                component={HomeScreen}
                options={{title: '', headerShown: false}}
            />
        </Stack.Navigator>
    </>
}