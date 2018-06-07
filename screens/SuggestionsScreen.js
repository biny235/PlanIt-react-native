import React, {Component} from 'react';
import { Text, Button } from 'react-native';
import { Container, Content, H1 } from 'native-base';

export default class SuggestionsScreen extends Component {
  render() {
    return (
      <Container>
        <Content padder contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <H1>Friend's Suggestions</H1>
          <Text style={{margin: 10}}>The user reviews her friend's suggestions here. She marks places "to-do", "visited", or "pass".</Text>
          <Button
            title="Close window!"
            onPress={() => this.props.navigation.navigate('Map')}
          />
        </Content>
      </Container>
    );
  }
}
