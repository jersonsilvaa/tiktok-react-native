import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { AccountScreen, screen } from '../../utils/import'

const Stack = createNativeStackNavigator()

export const AccountStack = () => {
    return <>
        <Stack.Navigator>
            <Stack.Screen
            name={screen.account.account}
            component={AccountScreen}
            options={{headerShown: false}}
        />
        </Stack.Navigator>
    </>
}