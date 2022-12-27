import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { screen, HomeStack, FriendsStack, UploadVideo, NotificationsScreen, AccountScreen } from '../utils/import'

const Tab = createBottomTabNavigator()

export const TabNavigation = () => {
    return <>
        <Tab.Navigator>
            <Tab.Screen
                name={screen.home.tab}
                component={HomeStack}
                options={{headerShown: false}}
            />
            <Tab.Screen
                name={screen.friends.tab}
                component={FriendsStack}
                options={{headerShown: false}}
            />
            <Tab.Screen
                name={screen.upload.tab}
                component={UploadVideo}
                options={{headerShown: false}}
            />
            <Tab.Screen
                name={screen.notifications.tab}
                component={NotificationsScreen}
                options={{headerShown: false}}
            />
            <Tab.Screen
                name={screen.account.tab}
                component={AccountScreen}
                options={{headerShown: false}}
            />
        </Tab.Navigator>
    </>
}