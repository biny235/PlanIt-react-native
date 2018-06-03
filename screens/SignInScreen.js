import React, { Component } from 'react';
import { View, Text, Header, ActivityIndicator, AsyncStorage } from 'react-native';
import { Container, Content, Body, Title, Form, Item, Label, Input, Button } from 'native-base';

class SignInScreen extends Component {
  static navigationOptions = {
    title: 'Please sign in',
  }

  signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Map');
  }

  navToRegister = () => {
    this.props.navigation.navigate('Register');
  }

  render() {
    const { signInAsync, navToRegister } = this;
    return (
      <Container style={{marginTop: 50}}>
        <Content padder>
          <Title>Fine with Whatever</Title>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input
                autoCorrect={false}
                onChangeText={email => this.setState({email})}
                />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input
                autoCorrect={false}
                onChangeText={password => this.setState({password})}
                secureTextEntry
                />
            </Item>
          </Form>
          <View style={{marginTop: 10}}>
            <Button
              primary
              block
              onPress={signInAsync}
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
