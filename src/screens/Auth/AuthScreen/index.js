import { Button, Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '../../../hooks/useTheme'

const AuthScreen = () => {
    const { toggleTheme } = useTheme()
    return <>
        <SafeAreaView>
            <Text>AuthScreen</Text>
            <Button title='Cambiar tema' onPress={toggleTheme} />
        </SafeAreaView>
    </>
}

export default AuthScreen