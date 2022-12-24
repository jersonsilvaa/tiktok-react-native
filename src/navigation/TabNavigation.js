import { Text } from "react-native-elements"
import { SafeAreaView } from "react-native-safe-area-context"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { TestScreen } from "../screens/TestScreen"

const Tab = createBottomTabNavigator()

export const TabNavigation = () => {
    return <>
        <Tab.Navigator>
            <Tab.Screen name='Inicio' component={TestScreen} />
            <Tab.Screen name='Amigos' component={TestScreen} />
            <Tab.Screen name='Subir' component={TestScreen} />
            <Tab.Screen name='Notificaciones' component={TestScreen} />
            <Tab.Screen name='Perfil' component={TestScreen} />
        </Tab.Navigator>
    </>
}