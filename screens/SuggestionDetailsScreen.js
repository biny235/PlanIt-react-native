import React, {Component} from 'react';
import { Text } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Icon, Button } from 'native-base';

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
        <Header style={{ backgroundColor: 'tomato' }}>
          <Left />
          <Body>
            <Text style={styles.title}>Larry Suggests</Text>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('Map')}
            >
              <Icon
                type="Ionicons"
                name="ios-close-circle-outline"
                style={styles.closeButtonIcon}
              />
            </Button>
          </Right>
        </Header>
        <Content padder contentContainerStyle={{ flex: 1, alignItems: 'center' }}>
          <Text>Details</Text>
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
  title: {
    color: 'white',
    fontSize: 18,
  },
  closeButtonIcon: {
    color: 'white'
  },
  closeWinTextView: {
    marginTop: 20,
    alignSelf: 'center',
  },
  closeWinText: {
    color: '#424242'
  }
};
