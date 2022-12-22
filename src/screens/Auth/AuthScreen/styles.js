import { StyleSheet } from 'react-native'

import { useTheme } from '../../../hooks/useTheme'

export const styled = () => {
    const { theme } = useTheme()
    
    return StyleSheet.create({
        content: {
            height: '100%',
            justifyContent: 'space-between'
        },
        options_content: {
            marginHorizontal: 20
        },
        title: {
            fontSize: 20,
            textAlign: 'center',
            marginTop: 50,
            fontWeight: 'bold'
        },
        sub_title: {
            color: '#ccc',
            marginTop: 15,
            textAlign: 'center'
        },
        item_register: {
            marginTop: 30,
            alignItems: 'center',
            borderColor: '#ccc',
            borderWidth: 1,
            borderRadius: 1,
            height: 40,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 15
        },
        login_content: {
            alignItems: 'center',
            paddingVertical: 20,
            backgroundColor: theme.Default.backgroundSecondary
        },
        color_login: {
            color: '#FE2C55',
            fontWeight: 'bold'
        }
    })
}