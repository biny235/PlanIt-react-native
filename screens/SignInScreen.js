import React, { Component } from 'react';
import { View, Text, AsyncStorage, Image,} from 'react-native';
import { Container, Content, Body, Title, Form, Item, Label, Input, Button } from 'native-base';
import { connect } from 'react-redux';
import { authenticate, register } from '../store/users'

class SignInScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      register: false,
      username: '',
      password: '',
      email: ''
    }
    this.onChange = this.onChange.bind(this);
    this.signIn = this.signIn.bind(this);
    // this.handleOpenURL = this.handleOpenURL.bind(this)
    // this.googleSignIn = this.googleSignIn.bind(this);
  }
  static navigationOptions = {
    title: 'Sign In or Register',
  }
  componentDidMount(){
    // Linking.addEventListener('url', this.handleOpenURL);
    this.checker()
  }
  // componentDidUpdate() {
  //   Linking.addEventListener('url', this.handleOpenURL);
  // }

  // componentWillUnmount() {
  //   Linking.removeEventListener('url', this.handleOpenURL);
  // }

  // handleOpenURL(event){
  //   const url = event.url.split('token=')
  //   if(url.length === 2){
  //     const token = url[1];
  //     AsyncStorage.setItem('token', token)
  //     this.props.navigation.navigate('Map')
  //   }

  // }
  async checker(){
    const token = await AsyncStorage.getItem('token')
    token ? this.props.navigation.navigate('Map') : null

  }
  signIn(){
    const { username, password, email, register } = this.state;
    !register ?
    this.props.authenticate({ username, password })
      .then(token => token ? this.props.navigation.navigate('Map') : null)

    :
    this.props.register({username, password, email})
      .then(token => token ? this.props.navigation.navigate('Map') : null)
  }
  onChange(text, type){
    this.setState({ [type]: text })
  }

  navToRegister = () => {
    const register = !this.state.register
    this.setState({ register })
  }
  // async googleSignIn(){

  //   await Expo.AuthSession.startAsync({
  //     authUrl: `http://localhost:3000/auth/google`
  //   })
  //     .then(result => AsyncStorage.setItem('token', result.params.token))
  //   this.checker()
  // }
  render() {
    const { onChange, navToRegister, signIn,  } = this;
    const { register } = this.state
    return (
      <Container style={{marginTop: 50}}>
        <Content padder>
          <Image
          style={{alignSelf: 'center', width: 200, height: 120}}
          source={require('../assets/Logo.png')}
        />
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
                autoCorrect={false}
                onChangeText={(username)=>onChange(username, "username")}
                />
            </Item>
            {register ? (
              <Item floatingLabel>
                <Label>Email</Label>
                <Input
                  autoCorrect={false}
                  name="email"
                  onChangeText={(email)=>onChange(email, "email")}
                  />
              </Item>)
              :
            null}
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
              <Text style={{color: 'white'}}>{register ? 'Sign Up' : 'Sign In'}</Text>
            </Button>
          </View>
          <Body style={{alignItems: 'center', marginTop: 20}}>
            <Button transparent onPress={navToRegister}>
              <Text>{register ? "Back to Sign In" : "Register" }</Text>
            </Button>
          </Body>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ users }) =>{

  return {
    users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authenticate: credentials => dispatch(authenticate(credentials)),
    register: credentials => dispatch(register(credentials))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
