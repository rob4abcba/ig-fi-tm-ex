import React from "react";
import { Text, View, TextInput } from "react-native";
import styles from "../styles.js"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateEmail } from "../actions/user.js"

class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Login </Text>
        <TextInput
        value={this.props.user}
        onChangeText = { input => this.props.updateEmail(input)}
        placeholder = "email"
        />
        <TextInput
        value="value"
        onChangeText = { input => console.log(input)}
        placeholder = "password"
        />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators( {updateEmail}, dispatch )
  }
  const mapStateToProps = (state) => {
  return {
    user: state
  }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login)