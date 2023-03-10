import React from 'react';
import {View, Button, SafeAreaView, Text, Alert} from 'react-native';

function App() {
  return (
    <>
      <SafeAreaView>
        <View>
          <Text>Hello World</Text>
        </View>
      </SafeAreaView>
      <Button
        title="Submit"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </>
  );
}

export default App;
