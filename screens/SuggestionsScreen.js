import React, {Component} from 'react';
import { View } from 'react-native';
import { Container, Content, H3, List, Text, Icon, Button } from 'native-base';
import SuggestionAccordion from '../components/SuggestionAccordion';

const recosData = [
  {
    id: 0,
    friend: 'Moe',
    friendIcon: require('../assets/friends-thumbnails/moe.jpg'),
    name: 'Balthazar',
    city: 'New York',
    state: 'NY',
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
    console.log('NEW RECO', reco);
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
        <Content padder>
          <View
            style={styles.closeButtonView}>
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
          </View>
          <View style={styles.titleView}>
            <H3 style={styles.title}>Friends Suggest</H3>
          </View>
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
