import React, { Component } from 'react';
import { Provider } from 'react-redux';
//import { store } from './store';
import Root from './components/Root';

export default class App extends Component {
  render() {
    return (
      <Root />
    );
  }
}
/**
 * <Provider store={store}>
 *  <Root />
 * </Provider>
 */
