import { Button, Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'

import { ThemeProvider } from './src/utils/import'

const App = () => {
  return <>
    <ThemeProvider>
      <SafeAreaView>
        <Text>Estamos en App</Text>
        <Button title='Cambiar tema light mode' />
      </SafeAreaView>
    </ThemeProvider>
  </>
}

export default App