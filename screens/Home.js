import React from "react";
import { Text, View, Button } from "react-native";
import styles from "../styles.js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Home extends React.Component {
  state = {
    count: 10
  };

  add = () => {
    console.log("Home.js: add function");
    let num = this.state.count + 1;
    this.setState({ count: num });
  };
  subtract = () => {
    console.log("Home.js: subtract function");
    let num = this.state.count - 1;
    this.setState({ count: num });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Home {this.props.counter} </Text>
        <Button title="Add" onPress={() => this.add()} />
        <Button title="Subtract" onPress={() => this.subtract()} />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators( {add, subtract}, dispatch )
}
const mapStateToProps = (state) => {
return {
  counter: state
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)