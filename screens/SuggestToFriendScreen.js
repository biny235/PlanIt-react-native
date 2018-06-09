import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Content, H1 } from 'native-base';
import GoogleSearch from './GoogleSearch';
import MapView from 'react-native-maps';
import { fetchPlaces } from '../store/places';
import { connect } from 'react-redux';

const chicago = {
  lat: '41.881832',
  lng: '-87.623177'
};

const hawaii = {
  lat: '21.315603',
  lng: '-157.858093'
}

class SuggestToFriendScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 41.881832,
        longitude: -87.623177,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
  }

  render() {
    const {  region } = this.state;
    return (
      <Container>
        <Content padder contentContainerStyle={{ flex: 1, alignItems: 'center' }}>
          <H1 style={{ marginBottom: 10 }}>Give Moe a Suggestion</H1>
          <GoogleSearch lat={chicago.lat} lng={chicago.lng} type="establishment" />
          <Content contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
            <MapView
              style={{ flex: 1, width: 350 }}
              initialRegion={region}
              provider={MapView.PROVIDER_GOOGLE}
            />
        </Content>
          <Text style={{ flex: 1 }}>Find suggestions for your friend's plan. This screen should contain a map focused on the location where your friend is traveling to. Search for places to suggest to your friend. Your favorites should also appear on this map.</Text>
        </Content>
      </Container>
    );
  }
}

const mapState = ({users, places}) => {
  return {
    users,
    places
  };
};

const mapDispatch = dispatch => {
  return {
      fetchPlaces: () => dispatch(fetchPlaces())
    };
  };

export default connect(mapState, mapDispatch)(SuggestToFriendScreen);
