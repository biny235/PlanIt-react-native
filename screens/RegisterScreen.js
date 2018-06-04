import React, { Component } from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';

class RegisterScreen extends Component {
  static navigationOptions = {
    title: 'Please register',
  }

  register = async () => {
    // for now just same as sign in
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Map');
  }

  navToSignIn = () => {
    this.props.navigation.navigate('SignIn');
  }

  render() {
    const { register, navToSignIn } = this;
    return (
      <View style={styles.container}>
        <Button title="Register and sign in!" onPress={register} />
        <Text>or</Text>
        <Button title="Goto sign in screen" onPress={navToSignIn} />
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default RegisterScreen;
