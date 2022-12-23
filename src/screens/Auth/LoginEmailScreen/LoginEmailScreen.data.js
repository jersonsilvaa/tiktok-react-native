import * as Yup from 'yup'

export const InitialValues = () => {
    return {
        email: '',
        password: ''
    }
}

export const validationSchema = () => {
    return Yup.object({
        email: Yup.string()
            .email('El correo no es válido.')
            .required('El correo es obligatorio.'),

        password: Yup.string()
            .required('La contraseña es obligatoria.'),
    })
}