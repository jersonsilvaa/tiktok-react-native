import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { TestScreen } from '../screens/TestScreen'
import { screen, HomeStack } from '../utils/import'

const Tab = createBottomTabNavigator()

export const TabNavigation = () => {
    return <>
        <Tab.Navigator>
            <Tab.Screen name={screen.home.tab} component={HomeStack} />
            <Tab.Screen name={screen.friends.tab} component={TestScreen} />
            <Tab.Screen name={screen.upload.tab} component={TestScreen} />
            <Tab.Screen name={screen.notifications.tab} component={TestScreen} />
            <Tab.Screen name={screen.account.tab} component={TestScreen} />
        </Tab.Navigator>
    </>
}