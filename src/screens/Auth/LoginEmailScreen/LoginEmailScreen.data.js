import * as Yup from 'yup'

export const InitialValues = () => {
    return {
        username: '',
        password: ''
    }
}

export const validationSchema = () => {
    return Yup.object({
        username: Yup.string()
            .required('El correo es obligatorio.'),

        password: Yup.string()
            .required('La contraseña es obligatoria.'),
    })
}