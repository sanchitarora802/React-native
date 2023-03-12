import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Flat from './Components/Flat'
import HorizonalScorll from './Components/HorizonalScorll'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.wrap}>
        <Text style={styles.heading}>Project2</Text>
        </View>
      <Flat/>
      <HorizonalScorll />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrap: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  },
  heading:{
    color:'black',
    fontSize:24,
    fontWeight:'500',
    marginTop:20
  }
})

export default App