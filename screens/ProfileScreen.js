import React, {Component} from 'react';
import { Text } from 'react-native';
import { Container, Content, Body } from 'native-base';

export default class ProfileScreen extends Component {
  render() {
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
