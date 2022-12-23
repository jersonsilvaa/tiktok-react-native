import { useState } from 'react'
import { View } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useFormik } from 'formik'
import { InitialValues, validationSchema } from './LoginEmailScreen.data'

import { styled } from './styles'

const LoginEmailScreen = () => {
  const styles = styled()
  const [showPassword, setShowPassword] = useState(false)

  const onShowPasswordInput = () => setShowPassword(prevState => !prevState)

  const formik = useFormik({
    initialValues: InitialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: (formValue) => {
      console.log(formValue)
    }
  })
  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.form_content}>
                <Input
                    placeholder='Ingrese su correo electrónico'
                    autoCapitalize='none'
                    onChangeText={text => formik.setFieldValue('email', text)}
                    errorMessage={formik.errors.email}
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