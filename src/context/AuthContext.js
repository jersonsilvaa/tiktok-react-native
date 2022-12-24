import { useState, useEffect, createContext } from 'react'
import jwtDecode from 'jwt-decode'

export const AuthContext = createContext({
    auth: undefined,
    accessToken: null,
    refreshToken: null,
    login: () => null,
    logout: () => null
})

export const AuthProvider = (props) => {
    const { children } = props
    const [auth, setAuth] = useState(undefined)
    const [accessToken, setAccessToken] = useState(null)
    const [refreshToken, setRefreshToken] = useState(null)

    const login = tokens => {
        if (tokens.access && tokens.refresh) {
            const decodeToken = jwtDecode(tokens.access)
            setAuth(decodeToken)

            setAccessToken(tokens.access)
            setRefreshToken(tokens.refresh)
        } else {
            logout()
        }
    }

    const logout = () => {
        setAuth(null)
        setAccessToken(null)
        setRefreshToken(null)
    }

    const data = {
        auth,
        accessToken,
        refreshToken,
        login,
        logout
    }

    return <AuthContext.Provider value={data}>
        {children}
    </AuthContext.Provider>
}