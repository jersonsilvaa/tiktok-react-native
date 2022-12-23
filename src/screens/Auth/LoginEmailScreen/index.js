import { useState } from 'react'
import { View } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'

import { styled } from './styles'

const LoginEmailScreen = () => {
  const [showPassword, setShowPassword] = useState(false)
  const styles = styled()

  const onShowPasswordInput = () => setShowPassword(prevState => !prevState)
  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.form_content}>
                <Input
                    placeholder='Ingrese su correo electrónico'
                    autoCapitalize='none'
                />
                <Input
                    placeholder='Ingrese su contraseña'
                    secureTextEntry={!showPassword}
                    rightIcon={{
                        type: 'material-community',
                        onPress: onShowPasswordInput,
                        name: showPassword ? 'eye-off-outline' : 'eye-outline'
                    }}
                />
            </View>

            <Button
                title='Iniciar sesión'
                containerStyle={styles.button_content}
            />
    </SafeAreaView>
  )
}

export default LoginEmailScreen