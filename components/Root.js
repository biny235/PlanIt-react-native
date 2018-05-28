import React, { Component } from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
//import { connect } from 'react-redux'
class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <View>
        <Text>
        Hello
        </Text>
      </View>
    );
  }
}

const mapState = () => {
  return {

  }
}

const mapDispatch = () => {
  return {

  }
}

export default Root;
//export default connect(mapState, mapDispatch)(Root)
