import { Button, Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'

export const AppNavigation = () => {
    return <>
        <SafeAreaView>
            <Text>AppNavigation</Text>
            <Button title='Cerrar sesión' />
        </SafeAreaView>
    </>
}