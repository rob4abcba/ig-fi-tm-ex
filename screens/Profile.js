import React from "react";
import { Text, View } from "react-native";
import styles from "../styles.js";
import { connect } from "react-redux";

class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Profile {this.props.counter} </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      counter: state
    }
}
    
export default connect(mapStateToProps)(Profile)
