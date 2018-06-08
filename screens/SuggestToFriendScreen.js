import React, {Component} from 'react';
import { Text } from 'react-native';
import { Container, Content, H1 } from 'native-base';
import GoogleSearch from './GoogleSearch';

const chicago = {
  lat: '41.881832',
  lng: '-87.623177'
};

const hawaii = {
  lat: '21.289373',
  lng: '-157.917480'
}
const city = '(cities)';
const place = 'establishment';


export default class SuggestToFriendScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      place: {},
    };
  }
  render() {
    return (
      <Container>
        <Content padder contentContainerStyle={{ flex: 1, alignItems: 'center' }}>
            <H1 style={{marginBottom: 10}}>Give Moe a Suggestion</H1>
            <GoogleSearch lat={hawaii.lat} lng={hawaii.lng} type='establishment' />
            <Text>Find suggestions for your friend's plan. This screen should contain a map focused on the location where your friend is traveling to. Search for places to suggest to your friend. Your favorites should also appear on this map.</Text>
        </Content>
      </Container>
    );
  }
}

