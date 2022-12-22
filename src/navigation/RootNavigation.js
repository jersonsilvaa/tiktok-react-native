import { StatusBar } from 'react-native'

import { AppNavigation } from './AppNavigation'
import { AuthNavigation } from './AuthNavigation'

import { useTheme } from '../hooks/useTheme'

export const RootNavigation = () => {
    const auth = false
    const { darkMode, toggleTheme } = useTheme()
    const mode = {
        theme: darkMode ? 'Cambiar modo claro' : 'Cambiar modo oscuro',
        mode: darkMode ? 'Modo oscuro' : 'Modo claro'
    }
    return <>
        <StatusBar animated barStyle={darkMode ? 'dark-content' : 'light-content'} />
        { auth ? <AppNavigation /> : <AuthNavigation /> }
    </>
}