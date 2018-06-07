import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { Container, Content, Body, Form, Title, Item, Label, Input, Button } from 'native-base';

class RegisterScreen extends Component {
  static navigationOptions = {
    title: 'Please register',
  }
  constructor(){
    super();
    this.state = {
      username: "",
      password: "",
      email: "",
    }
  }
  register = async () => {
    // for now just same as sign in
  }

  navToSignIn = () => {
    this.props.navigation.navigate('SignIn');
  }

  render() {
    const { register, navToSignIn } = this;
    return (
      <Container>
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
              onChangeText={(password)=>onChange(password, "password")}
              secureTextEntry
              />
          </Item>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCorrect={false}
              onChangeText={(email)=>onChange(email, "email")}
              />
          </Item>
          </Form>
          <Text>or</Text>
          <Button title="Sign In" onPress={navToSignIn} />
        </Content>   
      </Container>
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
