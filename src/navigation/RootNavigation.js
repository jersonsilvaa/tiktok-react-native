import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, Button } from 'react-native-elements'

import { useTheme } from '../hooks/useTheme'

export const RootNavigation = () => {
    const { darkMode, toggleTheme } = useTheme()
    const mode = {
        theme: darkMode ? 'Cambiar modo claro' : 'Cambiar modo oscuro',
        mode: darkMode ? 'Modo oscuro' : 'Modo claro'
    }
    return <>
        <SafeAreaView>
            <Text>Este es la navegación</Text>
            <Text>Modo {mode.mode}</Text>
            <Button title={mode.theme} onPress={toggleTheme} />
        </SafeAreaView>
    </>
}