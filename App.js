import { Button, Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'

import { ThemeProvider, RootNavigation } from './src/utils/import'

const App = () => {
  return <>
    <ThemeProvider>
      <RootNavigation />
    </ThemeProvider>
  </>
}

export default App