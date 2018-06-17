import React, {Component} from 'react';
import { View } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Text, Icon, Button } from 'native-base';
import SuggestionAccordion from '../components/SuggestionAccordion';

const recosData = [
  {
    id: 0,
    friend: 'Moe',
    friendIcon: require('../assets/friends-thumbnails/moe.jpg'),
    name: 'Balthazar',
    city: 'New York',
    state: 'NY',
    lat: 40.7226241814105,
    lng: -73.99817168712616,
    comment: 'Pricey but the raw red meat is great.',
    isFavorite: false,
    doneThat: false,
    isHidden: false
  },
  {
    id: 1,
    friend: 'Moe',
    friendIcon: require('../assets/friends-thumbnails/moe.jpg'),
    name: "Grimaldi's Pizza",
    city: 'New York',
    state: 'NY',
    lat: 40.702602314710816,
    lng: -73.99322032928467,
    comment: 'Homemade mozzarella cheese and beautiful view.',
    isFavorite: false,
    doneThat: false,
    isHidden: false
  },
  {
    id: 2,
    friend: 'Larry',
    friendIcon: require('../assets/friends-thumbnails/larry.jpg'),
    name: 'Terri',
    city: 'New York',
    state: 'NY',
    lat: 40.70661306619307,
    lng: -74.00703504681587,
    comment: 'Vegan delight.',
    isFavorite: false,
    doneThat: false,
    isHidden: false
  },
];

export default class SuggestionsScreen extends Component {
  constructor() {
    super();
    this.state = {
      recos: recosData
    };
  }

  // passed to child accordion component to like, hide...
  changeReco = reco => {
    this.setState({reco});
  }

  // helper function to clip comment, "Blah, blah..."
  formatText = (str, numChars) => {
    return '"' + str.substr(0, numChars) + (str.length >= numChars ? '...' : '') + '"';
  };

  render() {
    const { changeReco } = this;
    const { recos } = this.state;
    return (
      <Container>
        <Header style={{ backgroundColor: 'tomato' }}>
          <Left />
          <Body>
            <Text style={styles.title}>Friends Suggest</Text>
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
        <Content padder>
          <View>
            <SuggestionAccordion data={recos} navigation={this.props.navigation} changeState={changeReco} />
          </View>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate('Map')}
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
