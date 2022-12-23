import { StatusBar } from 'react-native'

import { AppNavigation } from './AppNavigation'
import { AuthNavigation } from './AuthNavigation'

import { useTheme } from '../hooks/useTheme'
import { useAuth } from '../hooks/useAuth'

export const RootNavigation = () => {
    const { auth } = useAuth()
    const { darkMode, toggleTheme } = useTheme()
    
    return <>
        <StatusBar animated barStyle={darkMode ? 'dark-content' : 'light-content'} />
        { auth ? <AppNavigation /> : <AuthNavigation /> }
    </>
}