import * as Yup from 'yup'

export const InitialValues = () => {
    return {
        email: '',
        password: '',
        username: '',
        first_name: '',
        repeatPassword: ''
    }
}

export const validationSchema = () => {
    return Yup.object({
        email: Yup.string()
            .email('El correo no es válido.')
            .required('El correo es obligatorio.'),

        first_name: Yup.string()
            .required('El nombre es obligatorio.'),

        username: Yup.string()
            .required('El nombre de usuario es obligatorio.'),

        password: Yup.string()
            .required('La contraseña es obligatoria.'),

        repeatPassword: Yup.string()
            .required('La contraseña es obligatoria.').
            oneOf([Yup.ref('password')], 'Las contraseñas no coinciden, asegurese que sea la correcta.')
    })
}