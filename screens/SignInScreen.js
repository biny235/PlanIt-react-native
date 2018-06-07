import React, { Component } from 'react';
import { View, Text, Header, ActivityIndicator, AsyncStorage, Linking} from 'react-native';
import Expo from 'expo';
import { Container, Content, Body, Title, Form, Item, Label, Input, Button } from 'native-base';
import call from '../store/axiosFunc';
import axios from 'axios';

class SignInScreen extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: ''
    }
    this.onChange = this.onChange.bind(this);
    this.signIn = this.signIn.bind(this);
    this.handleOpenURL = this.handleOpenURL.bind(this)
    this.googleSignIn = this.googleSignIn.bind(this);
  }
  static navigationOptions = {
    title: 'Please sign in',
  }
  componentDidMount(){
    Linking.getInitialURL().then(url => console.log(url))
    Linking.addEventListener('url', this.handleOpenURL);
    this.checker()
  }
  // componentDidUpdate() {
  //   Linking.addEventListener('url', this.handleOpenURL);
  // }

  // componentWillUnmount() {
  //   Linking.removeEventListener('url', this.handleOpenURL);
  // }

  handleOpenURL(event){
    const url = event.url.split('token=')
    if(url.length === 2){
      const token = url[1];   
      AsyncStorage.setItem('token', token)
      this.props.navigation.navigate('Map')
    }
    
  }
  checker = async ()=>{
    const token = await AsyncStorage.getItem('token');
    !!token ? this.props.navigation.navigate('Map') : null
  }
  signIn(){
    const { username, password } = this.state;
    call('post', 'auth', { username, password })
    axios.post('http://localhost:3000/auth', {username, password})
      .then(res => res.data)
      .then(token => {
        AsyncStorage.setItem('token', token)
        token ? this.props.navigation.navigate('App') : null;
      })
      .catch(err => console.log(err))
  }
  onChange(text, type){
    this.setState({ [type]: text })
  }

  navToRegister = () => {
    this.props.navigation.navigate('Register');
  }
  async googleSignIn(){
    console.log("google Sign IN")
    await Expo.AuthSession.startAsync({
      authUrl: `http://localhost:3000/auth/google`
    })
      .then(result => AsyncStorage.setItem('token', result.params.token))
    this.checker()
  }
  render() {
    const { onChange, navToRegister, signIn, googleSignIn } = this;
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
            <Button transparent onPress={()=> googleSignIn()}>
              <Text>Sign In With Google</Text>
            </Button>
          </Body>
        </Content>
      </Container>
    );
  }
}

export default SignInScreen;
