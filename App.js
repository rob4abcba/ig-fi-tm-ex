import React from "react";
import SwitchNavigator from "./navigation/SwitchNavigator";
import reducer from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SwitchNavigator />
        </Provider>
    );
  }
}
