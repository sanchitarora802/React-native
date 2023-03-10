import React from 'react';
import {
  View,
  Button,
  Text,
  Alert,
  StyleSheet,
  useColorScheme,
} from 'react-native';

function App() {
  const colorScheme = useColorScheme() === 'light';

  return (
    <>
      <View style={styles.wrap}>
        <Text style={colorScheme ? styles.darkColor : styles.lightColor}>
          Hello World
        </Text>
        <Button
          title="Submit"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
    </>
  );
}

// Css in key value pair
const styles = StyleSheet.create({
  wrap: {
    // display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10
  },
  darkColor: {
    color: 'black',
  },
  lightColor: {
    color: '#ffffff',
  },
});

export default App;
