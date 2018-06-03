import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { Container, Content, Body } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class ProfileScreen extends Component {
  // not working
  static navigationOptions = {
    drawerLabel: 'Friends',
    drawerIcon: ({ tintColor }) => (
      <Ionicons name="ios-people" size={25} color={tintColor} />
    ),
  };
  render() {
    console.log(this.props.navigation);
    return (
      <Container>
        <Content>
          <Body style={{margin: 20}}>
            <Text>Modify your profile settings here - maybe other settings.</Text>
          </Body>
        </Content>
      </Container>
    );
  }
}
