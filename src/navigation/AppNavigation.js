import { Button, Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAuth } from '../hooks/useAuth'

export const AppNavigation = () => {
    const { logout } = useAuth()
    return <>
        <SafeAreaView>
            <Text>AppNavigation</Text>
            <Button title='Cerrar sesión' onPress={logout} />
        </SafeAreaView>
    </>
}