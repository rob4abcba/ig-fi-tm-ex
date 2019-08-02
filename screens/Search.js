import React from "react";
import { Text, View, Button } from "react-native";
import styles from "../styles.js"

export default class Search extends React.Component {
  state = {
    count: 10
  };

  add = () => {
    console.log("Search.js: add function");
    let num = this.state.count + 1;
    this.setState({ count: num });
  };
  subtract = () => {
    console.log("Search.js: subtract function");
    let num = this.state.count - 1;
    this.setState({ count: num });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Search {this.state.count} </Text>
        <Button title="Add" onPress={() => this.add()} />
        <Button title="Subtract" onPress={() => this.subtract()} />
      </View>
    );
  }
}

