import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
// import console = require('console');

export default class App extends React.Component {
  state = {
    count: 10
  };

  add = () => {
    console.log("App.js: add function");
    let num = this.state.count + 1;
    this.setState({ count: num });
  };
  subtract = () => {
    console.log("App.js: subtract function");
    let num = this.state.count - 1;
    this.setState({ count: num });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Counter {this.state.count} </Text>
        <Button title="Add" onPress={() => this.add()} />
        <Button title="Subtract" onPress={() => this.subtract()} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
