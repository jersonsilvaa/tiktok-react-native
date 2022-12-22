import { screen } from './screens'
import { ThemeProvider } from '../context/ThemeProvider'
import { RootNavigation } from '../navigation/RootNavigation'
import { getNavigationTheme } from './navigation-theme'

import AuthScreen from '../screens/Auth/AuthScreen'
import LoginEmailScreen from '../screens/Auth/LoginEmailScreen'
import RegisterEmailScreen from '../screens/Auth/RegisterEmailScreen'

export { ThemeProvider, RootNavigation, AuthScreen, getNavigationTheme, RegisterEmailScreen, LoginEmailScreen, screen }