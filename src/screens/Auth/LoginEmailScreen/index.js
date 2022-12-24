import { useState } from 'react'
import { View } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Auth } from '../../../api/auth'
import { useAuth } from '../../../hooks/useAuth'
import { useFormik } from 'formik'
import { InitialValues, validationSchema } from './LoginEmailScreen.data'

import { styled } from './styles'

const auth = new Auth()

const LoginEmailScreen = () => {
  const styles = styled()
  const [showPassword, setShowPassword] = useState(false)
  const { login } = useAuth()

  const onShowPasswordInput = () => setShowPassword(prevState => !prevState)

  const formik = useFormik({
    initialValues: InitialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const res = await auth.login(formValue)
        login(res)
      } catch (error) {
        console.error(error)
      }
    }
  })
  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.form_content}>
      <Input
          placeholder="Ingrese su nombre de usuario"
          autoCapitalize="none"
          onChangeText={text => formik.setFieldValue('username', text)}
          errorMessage={formik.errors.username}
        />
        <Input
          placeholder='Ingrese su contraseña'
          secureTextEntry={!showPassword}
          rightIcon={{
            type: 'material-community',
            onPress: onShowPasswordInput,
            name: showPassword ? 'eye-off-outline' : 'eye-outline'
          }}
          onChangeText={text => formik.setFieldValue('password', text)}
          errorMessage={formik.errors.password}
        />
      </View>

      <Button
        title='Iniciar sesión'
        containerStyle={styles.button_content}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </SafeAreaView>
  )
}

export default LoginEmailScreen