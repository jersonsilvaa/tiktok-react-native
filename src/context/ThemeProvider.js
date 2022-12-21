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

    const toggleTheme = () => {
        setDarMode(!darkMode)
    }

    const data = {
        theme: {},
        darkMode,
        toggleTheme
    }
    return (
        <ThemeContext.Provider value={data}>
            <Theme theme={darkMode ? darkTheme : lightTheme}>{ children }</Theme>
        </ThemeContext.Provider>
    )
}