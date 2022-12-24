import { useState, useEffect, createContext } from 'react'
import jwtDecode from 'jwt-decode'
import { jwt } from '../api/jwt'
import { Auth } from '../api/auth'

const authController = new Auth()

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

    useEffect(() => {
        (async () => {
            const res = await jwt.getTokens()
            const accessExpired = jwt.hasExpired(res.access)

            if (accessExpired) {
                const refreshExpired = jwt.hasExpired(res.refresh)

                if (refreshExpired) {
                    logout()
                } else {
                    try {
                        const result = await authController.refreshToken(res.refresh)
                        jwt.saveTokens(result.access, res.refresh)
                        login({
                            access: result.access,
                            refresh: res.refresh
                        })
                    } catch (error) {
                        console.error(error)
                        logout()
                    }
                }
            } else {
                login(res)
            }
        })()
    }, [])

    const login = tokens => {
        if (tokens.access && tokens.refresh) {
            const decodeToken = jwtDecode(tokens.access)
            setAuth(decodeToken)

            setAccessToken(tokens.access)
            setRefreshToken(tokens.refresh)
            jwt.saveTokens(tokens.access, tokens.refresh)
        } else {
            logout()
        }
    }

    const logout = () => {
        setAuth(null)
        setAccessToken(null)
        setRefreshToken(null)
        jwt.removeTokens()
    }

    const data = {
        auth,
        accessToken,
        refreshToken,
        login,
        logout
    }

    if (auth === undefined) return null

    return <AuthContext.Provider value={data}>
        {children}
    </AuthContext.Provider>
}