import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HorizonalScorll = () => {
  return (
    <>
      <Text style={styles.headingText}>Horizonal Scroll</Text>
      <ScrollView horizontal>
      <View style={styles.container}>
        <View style={[styles.generalBox, styles.box1]}>
          <Text style={styles.containerText}>Tap</Text>
        </View>
        <View style={[styles.generalBox,styles.box1]}>
            <Text style={styles.containerText}>Me</Text>
        </View>
        <View style={[styles.generalBox,styles.box1]}>
            <Text style={styles.containerText}>To</Text>
        </View>
        <View style={[styles.generalBox,styles.box1]}>
            <Text style={styles.containerText}>Scroll</Text>
        </View>
        <View style={[styles.generalBox,styles.box1]}>
            <Text style={styles.containerText}>Horizontally</Text>
        </View>
        <View style={[styles.generalBox,styles.box1]}>
            <Text style={styles.containerText}>😎</Text>
        </View>
      </View>
    </ScrollView>
    </>
  );
};

export default HorizonalScorll;

const styles = StyleSheet.create({
  headingText: {
    color: 'black',
    fontSize: 24,
    fontWeight: '500',
    marginLeft: 10,
    marginTop: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  generalBox: {
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box1: {
    backgroundColor: '#83a3d6',
  },
  containerText: {
    color: 'white',
  },
});
