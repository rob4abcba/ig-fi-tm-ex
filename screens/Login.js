import React from "react";
import { Text, View, TextInput } from "react-native";
import styles from "../styles.js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateEmail, updatePassword } from "../actions/user.js";

class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Login </Text>
        <TextInput
          value={this.props.newuser}
          onChangeText={input => this.props.updateEmail(input)}
          placeholder="email"
        />
        <TextInput
          value={this.props.newpassword}
          onChangeText={input => this.props.updatePassword(input)}
          placeholder="password"
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateEmail, updatePassword }, dispatch);
};
const mapStateToProps = state => {
  return {
    newuser: state.user,
    newpassword: state.password
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
