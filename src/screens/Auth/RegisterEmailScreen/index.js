import { useState } from 'react'
import { View } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'

import { styled } from './styles'

const RegisterEmailScreen = (props) => {
    const { navigation } = props
    const [showPassword, setShowPassword] = useState(false) // Show password first input
    const [showPassword2, setShowPassword2] = useState(false) // Show password second input
    const styles = styled()

    const onShowPasswordInput = () => setShowPassword(prevState => !prevState)
    const onShowPasswordInput2 = () => setShowPassword2(prevState2 => !prevState2)

    return <>
        <SafeAreaView style={styles.content}>
            <View style={styles.form_content}>
                <Input
                    placeholder='Ingrese su correo electrónico'
                    autoCapitalize='none'
                />
                <Input
                    placeholder='Ingrese sus nombres y apellidos'
                    autoCapitalize='none'
                />
                <Input
                    placeholder='Ingrese un usuario'
                    autoCapitalize='none'
                />
                <Input
                    placeholder='Ingrese una contraseña'
                    secureTextEntry={!showPassword}
                    rightIcon={{
                        type: 'material-community',
                        onPress: onShowPasswordInput,
                        name: showPassword ? 'eye-off-outline' : 'eye-outline'
                    }}
                />
                <Input
                    placeholder='Repetir contraseña'
                    secureTextEntry={!showPassword2}
                    rightIcon={{
                        type: 'material-community',
                        onPress: onShowPasswordInput2,
                        name: showPassword2 ? 'eye-off-outline' : 'eye-outline'
                    }}
                />
            </View>

            <Button title='Registrarse' containerStyle={styles.button_content} />
        </SafeAreaView>
    </>
}

export default RegisterEmailScreen