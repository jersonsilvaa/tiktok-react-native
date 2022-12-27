import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { FriendsScreen, screen } from '../../utils/import'

const Stack = createNativeStackNavigator()

export const FriendsStack = () => {
    return <>
        <Stack.Navigator>
            <Stack.Screen
                name={screen.friends.friends}
                component={FriendsScreen}
                options={{title: 'Amigos'}}
            />
        </Stack.Navigator>
    </>
}