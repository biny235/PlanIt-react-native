import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { fetchUsers } from '../store/users';

import Main from './Main';
import Login from './Auth/Login';
import SignIn from './Auth/SignIn';
import Chat from './Chat';

class Root extends Component {

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {

    return (
      <Router>
        <Scene key='root'>
          <Scene key='login' component={Login} title='LogIn' initial />
          <Scene key='signIn' component={SignIn} title='SignIn' />
          <Scene
            key="tabbar"
            tabs={true}
            tabBarStyle={{ backgroundColor: '#FFFFFF' }}
          >
            <Scene key="osu" title="OSU" >
              <Scene key='chat' component={Chat} title='Chat' />
            </Scene>
          </Scene>

        </Scene>

      </Router>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(null, mapDispatch)(Root)
