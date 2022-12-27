import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { screen, HomeStack, FriendsStack, UploadVideoStack, AccountStack, NotificationsStack } from '../utils/import'

const Tab = createBottomTabNavigator()

export const TabNavigation = () => {
    return <>
        <Tab.Navigator>
            <Tab.Screen
                name={screen.home.tab}
                component={HomeStack}
                options={{headerShown: false,
                    tabBarLabelStyle: {
                    display: 'none'
                }}}
            />
            <Tab.Screen
                name={screen.friends.tab}
                component={FriendsStack}
                options={{headerShown: false,
                    tabBarLabelStyle: {
                    display: 'none'
                }}}
            />
            <Tab.Screen
                name={screen.upload.tab}
                component={UploadVideoStack}
                options={{headerShown: false,
                    tabBarLabelStyle: {
                    display: 'none'
                }}}
            />
            <Tab.Screen
                name={screen.notifications.tab}
                component={NotificationsStack}
                options={{headerShown: false,
                    tabBarLabelStyle: {
                    display: 'none'
                }}}
            />
            <Tab.Screen
                name={screen.account.tab}
                component={AccountStack}
                options={{headerShown: false,
                    tabBarLabelStyle: {
                    display: 'none'
                }}}
            />
        </Tab.Navigator>
    </>
}