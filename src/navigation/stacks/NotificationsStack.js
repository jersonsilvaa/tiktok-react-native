import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { screen, NotificationsScreen } from '../../utils/import'

const Stack = createNativeStackNavigator()

export const NotificationsStack = () => {
    return <>
        <Stack.Navigator>
            <Stack.Screen
                name={screen.notifications.notifications}
                component={NotificationsScreen}
                options={{title: 'Toda la actividad'}}
            />
        </Stack.Navigator>
    </>
}