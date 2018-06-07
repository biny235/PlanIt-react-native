import React, {Component} from 'react';
import { Text, Button } from 'react-native';
import { Container, Content, H1 } from 'native-base';

export default class FriendsPlansScreen extends Component {
  render() {
    return (
      <Container>
        <Content padder contentContainerStyle={{ flex: 1, alignItems: 'center' }}>
          <H1 style={{marginBottom: 10}}>Friends' List of Plans</H1>
          <Text>This screen will consist of a list of plans your friends' have made. Tap on one of your friend's plans to make a suggestion.</Text>
          <Button
            title="Give Moe a place suggestions >"
            onPress={() => this.props.navigation.navigate('SuggestToFriend')}
          />
        </Content>
      </Container>
    );
  }
}
