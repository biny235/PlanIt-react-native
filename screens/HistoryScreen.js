import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { Container, Content, Body } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class HistoryScreen extends Component {
  // not working
  static navigationOptions = {
    drawerLabel: 'Friends',
    drawerIcon: ({ tintColor }) => (
      <Ionicons name="ios-people" size={25} color={tintColor} />
    ),
  };
  render() {
    return (
      <Container>
        <Content>
          <Body style={{margin: 20}}>
            <Text>View all the travel plans that have been broadcast.</Text>
          </Body>
        </Content>
      </Container>
    );
  }
}
