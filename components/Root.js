import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchUsers } from '../store/users';

class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    console.log(this.props)
    return (
      <View>
        <Text>
        Hello
        </Text>
      </View>
    );
  }
}

const mapState = ({ users }) => {
  console.log(users)
  return {
    users
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

//export default Root;
export default connect(mapState, mapDispatch)(Root)
