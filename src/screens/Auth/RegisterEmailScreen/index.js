import { useState } from 'react'
import { View } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Auth } from '../../../api/auth'
import { useFormik } from 'formik'
import { InitialValues, validationSchema } from './RegisterEmailScreen.data'

import { styled } from './styles'

const auth = new Auth()

const RegisterEmailScreen = (props) => {
    const { navigation } = props
    const [showPassword, setShowPassword] = useState(false) // Show password first input
    const [showPassword2, setShowPassword2] = useState(false) // Show password second input
    const styles = styled()

    const formik = useFormik({
        initialValues: InitialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                await auth.register(formValue)
                navigation.goBack()
            } catch (error) {
                console.error(error)
            }
        }
    })

    const onShowPasswordInput = () => setShowPassword(prevState => !prevState)
    const onShowPasswordInput2 = () => setShowPassword2(prevState2 => !prevState2)

    return <>
        <SafeAreaView style={styles.content}>
            <View style={styles.form_content}>
                <Input
                    placeholder='Ingrese su correo electrónico'
                    autoCapitalize='none'
                    onChangeText={text => formik.setFieldValue('email', text.toLowerCase())}
                    errorMessage={formik.errors.email}
                />
                <Input
                    placeholder='Ingrese sus nombres y apellidos'
                    autoCapitalize='none'
                    onChangeText={text => formik.setFieldValue('first_name', text)}
                    errorMessage={formik.errors.first_name}
                />
                <Input
                    placeholder='Ingrese un usuario'
                    autoCapitalize='none'
                    onChangeText={text => formik.setFieldValue('username', text)}
                    errorMessage={formik.errors.username}
                />
                <Input
                    placeholder='Ingrese una contraseña'
                    secureTextEntry={!showPassword}
                    rightIcon={{
                        type: 'material-community',
                        onPress: onShowPasswordInput,
                        name: showPassword ? 'eye-off-outline' : 'eye-outline'
                    }}
                    onChangeText={text => formik.setFieldValue('password', text)}
                    errorMessage={formik.errors.password}
                />
                <Input
                    placeholder='Repetir contraseña'
                    secureTextEntry={!showPassword2}
                    rightIcon={{
                        type: 'material-community',
                        onPress: onShowPasswordInput2,
                        name: showPassword2 ? 'eye-off-outline' : 'eye-outline'
                    }}
                    onChangeText={text => formik.setFieldValue('repeatPassword', text)}
                    errorMessage={formik.errors.repeatPassword}
                />
            </View>

            <Button
                title='Registrarse'
                onPress={formik.handleSubmit}
                loading={formik.isSubmitting}
                containerStyle={styles.button_content}
            />
        </SafeAreaView>
    </>
}

export default RegisterEmailScreen