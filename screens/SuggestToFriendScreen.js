import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Container, Content, H1, Button } from 'native-base';
import GoogleSearch from './GoogleSearch';
import MapView, { AnimatedRegion } from 'react-native-maps';
import { fetchPlaces } from '../store/places';
import { connect } from 'react-redux';
import { addRecommendationToStore } from '../store/recommendations';

const chicago = {
  lat: '41.881832',
  lng: '-87.623177'
};

//sample data
const hawaii = {
  lat: '21.315603',
  lng: '-157.858093'
};

class SuggestToFriendScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      googleObject: null,
      region: {
        latitude: 41.881832,
        longitude: -87.623177,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      marker: false
    };
  }

  addToState = (obj) => {
    this.setState({ googleObject: obj });
  }

  addRec = () => {
    // console.log('This Plan: ' + Object.keys(this.props.navigation.state.params.plan));

    this.props.addRecommendationToStore(this.state.googleObject, this.props.userId, this.props.navigation.state.params.plan.id); //passing in hardcoded planId for testing
  }

  onRegionChange = (region) => {
    this.setState({ region });
  }

  addToRegion = (region) => {
    this.onRegionChange(region);
    this.setState({ marker: true });
  }

  render() {
    console.log('this.state :', this.state);
    console.log('navigation', this.props.navigation.state);
    const { region } = this.state;
    return (
      <Container>
        <Content padder contentContainerStyle={{ flex: 1, alignItems: 'center' }}>
          <H1 style={{ marginBottom: 10 }}>Give Moe a Suggestion</H1>
          <GoogleSearch region={this.addToRegion} setLoc={this.addToState} lat={chicago.lat} lng={chicago.lng} type="establishment" />
          <MapView
            style={{ flex: 2, width: 370, marginBottom: 60 }}
            //initialRegion={region}
            region={region}
            provider={MapView.PROVIDER_GOOGLE}
            onRegionChangeComplete={regions => this.onRegionChange(regions)}
          >
           {
              this.state.marker ? (
                <MapView.Marker
                  id={1}
                  coordinate={{
                    latitude: this.state.region.latitude,
                    longitude: this.state.region.longitude
                  }}
                //title={data.name}
                //description=""
                />
              ) : ''
           }

          </MapView>
          {
            this.state.googleObject &&
            <Button
              block
              style={{ alignSelf: 'center', width: 200 }}
              onPress={this.addRec}
            >
              <Text> Add Your Suggestion </Text>
            </Button>
          }
          <Text style={{ flex: 0.5 }} />
        </Content>
      </Container>
    );
  }
}

const mapState = ({ users, places }) => {
  const userId = users.id;
  return {
    userId,
    places,
  };
};

const mapDispatch = dispatch => {
  return {
    fetchPlaces: () => dispatch(fetchPlaces()),
    addRecommendationToStore: (place, userId, planId) => dispatch(addRecommendationToStore(place, userId, planId))
  };
};

export default connect(mapState, mapDispatch)(SuggestToFriendScreen);
/*

*/
