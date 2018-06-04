import React, { Component } from 'react';
import { View, Text, Header, ActivityIndicator, AsyncStorage } from 'react-native';
import { Container, Content, Body, Title, Form, Item, Label, Input, Button } from 'native-base';
import call from '../store/axiosFunc'

class SignInScreen extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: ''
    }
    this.onChange = this.onChange.bind(this);
    this.signIn = this.signIn.bind(this);
  }
  static navigationOptions = {
    title: 'Please sign in',
  }
  signIn(){
    const { username, password } = this.state;
    call('post', 'http://fwiwh.herokuapp.com/auth', { username, password})
      .then(res => res.data)
      .then(token => {
        AsyncStorage.setItem('token', token)
        this.props.navigation.navigate('App');
      })
      .catch(err => console.log(err))
  }
  onChange(text, type){
    this.setState({ [type]: text })
    console.log(this.state)
  }

  navToRegister = () => {
    this.props.navigation.navigate('Register');
  }

  render() {
    const { onChange, navToRegister, signIn } = this;
    return (
      <Container style={{marginTop: 50}}>
        <Content padder>
          <Title>Fine with Whatever</Title>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
                autoCorrect={false}
                onChangeText={(username)=>onChange(username, "username")}
                />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input
                autoCorrect={false}
                name="password"
                onChangeText={(password)=>onChange(password, "password")}
                secureTextEntry
                />
            </Item>
          </Form>
          <View style={{marginTop: 10}}>
            <Button
              primary
              block
              onPress={signIn}
            >
              <Text style={{color: 'white'}}>Sign In</Text>
            </Button>
          </View>
          <Body style={{alignItems: 'center', marginTop: 20}}>
            <Button transparent onPress={navToRegister}>
              <Text>Register</Text>
            </Button>
          </Body>
        </Content>
      </Container>
    );
  }
}

export default SignInScreen;
