import { Icon } from 'react-native-elements'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { screen, HomeStack, FriendsStack, UploadVideoStack, AccountStack, NotificationsStack } from '../utils/import'

const Tab = createBottomTabNavigator()

export const TabNavigation = () => {
    return <>
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarActiveTintColor: '#fff',
            tabBarStyle: { backgroundColor: '#252525', borderTopWidth: 0 },
            tabBarIcon: (props) => tabIcon({ route, ...props })
        })}>
            <Tab.Screen
                name={screen.home.tab}
                component={HomeStack}
                options={{
                    headerShown: false,
                    tabBarLabelStyle: {
                        display: 'none'
                    }
                }}
            />
            <Tab.Screen
                name={screen.friends.tab}
                component={FriendsStack}
                options={{
                    headerShown: false,
                    tabBarLabelStyle: {
                        display: 'none'
                    }
                }}
            />
            <Tab.Screen
                name={screen.upload.tab}
                component={UploadVideoStack}
                options={{
                    headerShown: false,
                    tabBarLabelStyle: {
                        display: 'none'
                    }
                }}
            />
            <Tab.Screen
                name={screen.notifications.tab}
                component={NotificationsStack}
                options={{
                    headerShown: false,
                    tabBarLabelStyle: {
                        display: 'none'
                    }
                }}
            />
            <Tab.Screen
                name={screen.account.tab}
                component={AccountStack}
                options={{
                    headerShown: false,
                    tabBarLabelStyle: {
                        display: 'none'
                    }
                }}
            />
        </Tab.Navigator>
    </>
}

const tabIcon = (props) => {
    const { route, color, focused, size } = props

    // Icon upload video
    if (route.name === screen.upload.tab) {
        return <>
            <Icon
                type='material-community'
                name='plus'
                size={size}
                color={color}
                containerStyle={{
                    backgroundColor: '#fff',
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 6
                }}
                iconStyle={{
                    color: '#000',
                    fontSize: 20
                }}
            />
        </>
    }

    let iconName = 'plus'

    // Tab icons
    if (route.name === screen.home.tab) {
        iconName = focused ? 'home' : 'home-outline'
    }
    if (route.name === screen.friends.tab) {
        iconName = focused ? 'account-multiple' : 'account-multiple-outline'
    }
    if (route.name === screen.notifications.tab) {
        iconName = focused ? 'message-processing' : 'message-processing-outline'
    }
    if (route.name === screen.account.tab) {
        iconName = focused ? 'account' : 'account-outline'
    }
    return <>
        <Icon type='material-community' name={iconName} size={40} color={color} />
    </>
}