import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { useTheme } from '../hooks/useTheme'
import { TabNavigation } from './TabNavigation'
import { getNavigationTheme, screen, FollowedScreen, FollowersScreen, UsersScreen, VideoFavoritesScreen, VideoPublishedScreen, VideoScreen } from '../utils/import'

const Stack = createNativeStackNavigator()

export const AppNavigation = () => {
    const { theme } = useTheme()
    const myTheme = getNavigationTheme(theme)
    return <>
        <NavigationContainer theme={myTheme}>
            <Stack.Navigator>
                <Stack.Screen
                    name={screen.app.tab}
                    component={TabNavigation}
                    options={{headerShown: false}}
                />

                <Stack.Screen
                    name={screen.app.user}
                    component={UsersScreen}
                    options={{title: ''}}
                />
                <Stack.Screen
                    name={screen.app.video}
                    component={VideoScreen}
                    options={{title: '', headerTransparent: true}}
                />
                <Stack.Screen
                    name={screen.app.videoPublished}
                    component={VideoPublishedScreen}
                    options={{title: '', headerTransparent: true}}
                />
                <Stack.Screen
                    name={screen.app.videoFavorites}
                    component={VideoFavoritesScreen}
                    options={{title: '', headerTransparent: true}}
                />
                <Stack.Group screenOptions={{presentation: 'modal'}}>
                    <Stack.Screen
                        name={screen.app.followers}
                        component={FollowersScreen}
                        options={{headerShown: false}}
                />
                <Stack.Screen
                    name={screen.app.followeds}
                    component={FollowedScreen}
                    options={{headerShown: false}}
                />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    </>
}