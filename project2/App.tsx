import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Flat from './Components/Flat'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <Text>App</Text>
      <Flat/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App