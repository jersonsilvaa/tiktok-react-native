import { StatusBar } from 'expo-status-bar'
import { Text, SafeAreaView, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Esto es una prueba</Text>
      <Button title='Solid button' />
      <StatusBar style='auto' />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
})

export default App