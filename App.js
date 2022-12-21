import { Text, SafeAreaView } from 'react-native'

import { ThemeProvider } from './src/utils/import'

const App = () => {
  return <>
    <ThemeProvider>
      <SafeAreaView>
        <Text>Estamos en App</Text>
      </SafeAreaView>
    </ThemeProvider>
  </>
}

export default App