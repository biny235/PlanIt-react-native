import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { fetchUsers } from '../store/users';
import SocketIOClient from 'socket.io-client';

import Main from './Main';
import Login from './Auth/Login';
import SignIn from './Auth/SignIn';
import Chat from './Chat';

class Root extends Component {
  constructor(){
    super()
    this.state = {
      counter: 0
    }
    this.socket = SocketIOClient('http://fwiwh.herokuapp.com');
    this.add = this.add.bind(this)
  }

  componentDidMount() {
    // this.props.fetchUsers();
  }
  setCounter(counter){
    this.setState({counter})
  }
  add(){
    const counter = this.state.counter + 1
    this.socket.emit('add', counter)
    this.setState({counter})
  }

  render() {
    const { socket } = this;
    socket.on("connect", () => console.log("connected"))
    socket.on("setCounter", (counter) => this.setCounter(counter))

    return (
      // <Router>
      //   <Scene key='root'>
      //     <Scene key='login' component={Login} title='LogIn' initial />
      //     <Scene key='signIn' component={SignIn} title='SignIn' />
      //     <Scene
      //       key="tabbar"
      //       tabs={true}
      //       tabBarStyle={{ backgroundColor: '#FFFFFF' }}
      //     >
      //       <Scene key="osu" title="OSU" >
      //         <Scene key='chat' component={Chat} title='Chat' />
      //       </Scene>
      //     </Scene>

      //   </Scene>

      // </Router>
      <View style={styles.container}>
        <Button title={`${this.state.counter}`} onPress={this.add} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})

const mapDispatch = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(null, mapDispatch)(Root)
