import React, {Component} from 'react';
import { Text } from 'react-native';
import { Container, Content, H1 } from 'native-base';

export default class SuggestToFriendScreen extends Component {
  render() {
    return (
      <Container>
        <Content padder contentContainerStyle={{ flex: 1, alignItems: 'center' }}>
            <H1 style={{marginBottom: 10}}>Give Moe a Suggestion</H1>
            <Text>Find suggestions for your friend's plan. This screen should contain a map focused on the location where your friend is traveling to. Search for places to suggest to your friend. Your favorites should also appear on this map.</Text>
        </Content>
      </Container>
    );
  }
}
