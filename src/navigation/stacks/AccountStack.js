import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { AccountScreen, ChangeDescription, ChangeInstagramScreen, ChangeNameScreen, ChangeWebSiteScreen, SettingsScreen, screen } from '../../utils/import'

const Stack = createNativeStackNavigator()

export const AccountStack = () => {
    return <>
        <Stack.Navigator>
            <Stack.Screen
                name={screen.account.account}
                component={AccountScreen}
                options={{ title: 'Perfil' }}
            />

            <Stack.Group screenOptions={{presentation: 'modal'}}>
                <Stack.Screen
                    name={screen.account.config}
                    component={SettingsScreen}
                    options={{ title: 'Ajustes' }}
                />
                <Stack.Screen
                    name={screen.account.changeName}
                    component={ChangeNameScreen}
                    options={{ title: 'Nombre' }}
                />
                <Stack.Screen
                    name={screen.account.changeDescription}
                    component={ChangeDescription}
                    options={{ title: 'Descripción corta' }}
                />
                <Stack.Screen
                    name={screen.account.changeWebsite}
                    component={ChangeWebSiteScreen}
                    options={{ title: 'Página web' }}
                />
                <Stack.Screen
                    name={screen.account.changeInstagram}
                    component={ChangeInstagramScreen}
                    options={{ title: 'Instagram' }}
                />
            </Stack.Group>
        </Stack.Navigator>
    </>
}