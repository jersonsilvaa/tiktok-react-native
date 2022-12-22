import { TouchableOpacity, View } from 'react-native'
import { Button, Icon, Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'

import { screen } from '../../../utils/import'
import { useTheme } from '../../../hooks/useTheme'

import { styled } from './styles'

const AuthScreen = (props) => {
    const { navigation } = props
    const { toggleTheme } = useTheme()
    const styles = styled()

    const goToRegisterEmail = () => {
        navigation.navigate(screen.auth.registerEmail)
    }

    const goToLoginEmail = () => {
        navigation.navigate(screen.auth.loginEmail)
    }
    return <>
        <SafeAreaView style={styles.content}>
            <View style={styles.options_content}>
                <Text style={styles.title}>Regístrate en TikTok</Text>
                <Text style={styles.sub_title}>Crea un perfil, sigue otras cuentas, graba tus propios vídeos y más.</Text>

                <TouchableOpacity onPress={goToRegisterEmail} style={styles.item_register}>
                    <Icon type='material-community' name='at' />
                    <Text>Usar correo electrónico</Text>
                    <View />
                </TouchableOpacity>
            </View>
            <View style={styles.login_content}>
                <Text>¿Ya tienes una cuenta? <Text style={styles.color_login} onPress={goToLoginEmail}>Iniciar sesión</Text>
                </Text>
            </View>
        </SafeAreaView>
    </>
}

export default AuthScreen