import React, { Component } from 'react';
import AuthSwitchNav from './navigators/AuthSwitchNav';
import { Provider } from 'react-redux';
import store from './store';

// TODO: show <Expo.AppLoading /> while app loading

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AuthSwitchNav />
      </Provider>
    )
  }
}
