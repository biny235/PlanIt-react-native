import React, { Component } from 'react';
import { View, Text, Picker, TouchableOpacity } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import styles from '../style';

export default class Category extends Component {

  constructor(props) {
    super(props)
    this.state = {
      category: ''
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <ModalDropdown options={options} />
      </View>
    )
  }
}

const options = [
  'Activities',
  'Restaurants',
  'Movies',
]
