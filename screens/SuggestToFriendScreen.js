import React, {Component} from 'react';
import { Text } from 'react-native';
import { Container, Content, Body } from 'native-base';

export default class SuggestToFriendScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Body style={{margin: 20}}>
            <Text>Once friend's plans are broadcast, this screen allows the user to make suggestion to friends' plans. It contains a map with search box to find places to suggest. This screen could have access to the users' favorite places.</Text>
          </Body>
        </Content>
      </Container>
    );
  }
}
