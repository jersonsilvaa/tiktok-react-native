import { Platform, StyleSheet } from 'react-native'
import { useTheme } from '../../../hooks/useTheme'

export const styled = () => {
    const { theme } = useTheme()

    return StyleSheet.create({
        content: {
            height: '100%',
            justifyContent: 'space-between',
            marginHorizontal: 15,
            backgroundColor: theme.Default.backgroundSecondary
        },
        form_content: {
            marginTop: Platform.OS === 'android' ? 70 : 20,
        },
        button_content: {
            marginBottom: 250,
            margin: 30,
            borderRadius: 100
        }
    })
}