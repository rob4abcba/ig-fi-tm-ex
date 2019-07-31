import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  state = {
    count: 10
  }
  return (
    <View style={styles.container}>
      <Text>Counter {this.state.count} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
