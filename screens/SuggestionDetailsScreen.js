import React, {Component} from 'react';
import { Text } from 'react-native';
import { Container, Content, H1, Button } from 'native-base';

export default class SuggestionDetailsScreen extends Component {
  constructor() {
    super();
    this.state = {
      plans: []
    };
  }
  render() {
    return (
      <Container>
        <Content padder contentContainerStyle={{ flex: 1, alignItems: 'center' }}>
          <H1 style={{marginBottom: 10}}>Larry's Suggestion</H1>
          <Text>Map of recommendation?</Text>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate('Suggestions')}
            style={styles.closeWinTextView}
          >
            <Text style={styles.closeWinText}>Close window</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = {
  closeButtonView: {
    top: 14,
    position: 'absolute',
    right: 10
  },
  closeButtonIcon: {
    color: '#424242'
  },
  titleView: {
    marginTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'tomato',
    alignSelf: 'center',
    marginBottom: 6
  },
  title: {
    marginBottom: 6,
    color: 'tomato'
  },
  closeWinTextView: {
    marginTop: 20,
    alignSelf: 'center',
  },
  closeWinText: {
    color: '#424242'
  }
};
