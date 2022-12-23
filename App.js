import { AuthProvider } from './src/context/AuthContext'
import { ThemeProvider, RootNavigation } from './src/utils/import'
import './src/utils/yup-methods'

const App = () => {
  return <>
    <ThemeProvider>
      <AuthProvider>
        <RootNavigation />
      </AuthProvider>
    </ThemeProvider>
  </>
}

export default App