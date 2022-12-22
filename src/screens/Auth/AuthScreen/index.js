import { Button, Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'

import { screen } from '../../../utils/import'
import { useTheme } from '../../../hooks/useTheme'

const AuthScreen = (props) => {
    const { navigation } = props
    const { toggleTheme } = useTheme()
    return <>
        <SafeAreaView>
            <Text>AuthScreen</Text>
            <Button title='Cambiar tema' onPress={toggleTheme} />
            <Button title='Iniciar sesión' onPress={() => navigation.navigate(screen.auth.loginEmail)} />
        </SafeAreaView>
    </>
}

export default AuthScreen