import React, { useState, useEffect, createContext } from 'react'

import { ThemeProvider as Theme } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { darkTheme } from './DarkTheme'
import { lightTheme } from './LightTheme'

export const ThemeContext = createContext({
    darkMode: true,
    toggleTheme: () => null,
    theme: {}
})

export const ThemeProvider = (props) => {
    const { children } = props
    const [darkMode, setDarMode] = useState(true)

    useEffect(() => {
        (async () => {
            const res = await AsyncStorage.getItem('theme')
            res && setDarMode(JSON.parse(res))
        })()
    }, [])

    const toggleTheme = async () => {
        setDarMode(!darkMode)
        await AsyncStorage.setItem('theme', JSON.stringify(!darkMode))
    }

    const data = {
        theme: darkMode ? darkTheme : lightTheme,
        darkMode,
        toggleTheme
    }
    return (
        <ThemeContext.Provider value={data}>
            <Theme theme={data.theme}>{ children }</Theme>
        </ThemeContext.Provider>
    )
}