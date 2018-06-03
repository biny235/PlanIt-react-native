import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import styles from '../style';
import NewPlan from './NewPlan';

export default class TimePick extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDateTimePickerVisible: false,
      selected: ''
    }
    this._showDateTimePicker = this._showDateTimePicker.bind(this);
    this._hideDateTimePicker = this._hideDateTimePicker.bind(this);
    this._handleDatePicked = this._handleDatePicked.bind(this);
  }

  _showDateTimePicker() {
    this.setState({ isDateTimePickerVisible: true });
  }

  _hideDateTimePicker() {
    this.setState({ isDateTimePickerVisible: false });
  }

  _handleDatePicked(date) {
    console.log(date)
    this.setState({selected: date});
    this._hideDateTimePicker();
  }

  render() {
    console.log('this.state :', this.state);
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._showDateTimePicker}>
          <Text style={styles.button}>Time</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          mode={'time'}
          is24Hour={true}
        />

      </View>
    );
  }

}

