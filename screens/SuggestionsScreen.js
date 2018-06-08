import React, {Component} from 'react';
import { Text, Button } from 'react-native';
import { Container, Content, H1 } from 'native-base';

export default class SuggestionsScreen extends Component {
  render() {
    return (
      <Container>
        <Content padder contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <H1>Friend's Suggestions</H1>
          <Text style={styles.p}>Review your  friend's suggestions for you here.</Text>
          <Text style={styles.p}>Mark good place ideas "to-do", "pass" on the not so good ones, and chek off as "visited" if you've been there, done that.</Text>
          <Button
            title="Close window!"
            onPress={() => this.props.navigation.navigate('Map')}
          />
        </Content>
      </Container>
    );
  }
}

const styles = {
  p: {
    margin: 10
  }
};
