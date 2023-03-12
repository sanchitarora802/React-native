import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Flat = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View  style={styles.container}>
        <View style={[styles.generalBox,styles.box1]}>
            <Text style={styles.containerText}>Red</Text>
        </View>
        <View style={[styles.generalBox,styles.box2]}>
            <Text style={styles.containerText}>Green</Text>
        </View>
        <View style={[styles.generalBox,styles.box3]}>
            <Text style={styles.containerText}>Blue</Text>
        </View>
        <View style={[styles.generalBox,styles.box3]}>
            <Text style={styles.containerText}>Blueeeee</Text>
        </View>
      </View>
    </View>
  )
}

export default Flat

const styles = StyleSheet.create({
    headingText:{
        color: 'black',
        fontSize: 24,
        fontWeight:'500',
        marginLeft: 10,
        marginTop: 20
    },
    container:{
        flex:1,
        flexDirection:'row',
        flexWrap:'nowrap'
    },
    generalBox:{
        width:100,
        height:100,
        borderRadius:4,
        margin: 10,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    box1:{
        backgroundColor:'red'
    },
    box2:{
        backgroundColor:'green'
    },
    box3:{
        backgroundColor:'blue'
    },
    containerText:{
        color:'white'
    }
})