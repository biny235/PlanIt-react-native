import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Content, H1 } from 'native-base';
import GoogleSearch from './GoogleSearch';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { fetchUser } from '../store/users';

const chicago = {
  lat: '41.881832',
  lng: '-87.623177'
};

const hawaii = {
  lat: '21.315603',
  lng: '-157.858093'
}

export default class SuggestToFriendScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapLoaded: false,
      region: {
        latitude: 41.881832,
        longitude: -87.623177,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
  }

  componentDidMount() {
    this.setState({ mapLoaded: true });
  }

  render() {

    return (
      <View style={{ flex: 1 }}>
        <GoogleSearch lat={chicago.lat} lng={chicago.lng} type="establishment"  />
        <MapView
          style={{ flex: 1, width: 350 }}
          initialRegion={this.state.region}
          provider={MapView.PROVIDER_GOOGLE}
          // customMapStyle={mapStyle}
          showsUserLocation={true}
          followsUserLocation={true}
          showsMyLocationButton={true}
          showsPointsOfInterest={true}
          showsBuildings={true}

        />

      </View>
    );
  }
}

