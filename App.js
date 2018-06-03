import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Map from './components/Map';
//import DateTimePick from './screens/plans/DateTimePick';
import Calendars from './screens/plans/Calendars';
import NewPlan from './screens/plans/NewPlan';
import ChoosingFriends from './screens/plans/ChoosingFriends';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NewPlan />
      </Provider>
    );
  }
}
//"react-native": "https://github.com/expo/react-native/archive/sdk-27.0.1.tar.gz",
