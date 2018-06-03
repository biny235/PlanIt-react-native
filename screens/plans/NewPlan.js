import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../style';
import Calendars from './Calendars';
import TimePick from './TimePick';
import Category from './Category';


export default class NewPlan extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selected: ''
    }
  }

  render() {
    console.log('newPlan:', this.state);
    return (
      <View>
        <Calendars />
        <TimePick />
        <Category />
      </View>
    )
  }

}
