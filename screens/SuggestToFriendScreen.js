import React, { Component } from 'react';
import { Text, AlertIOS, Image } from 'react-native';
import { Container, Content, H3, Button } from 'native-base';
import GoogleSearch from './GoogleSearch';
import MapView from 'react-native-maps';
import { fetchPlaces } from '../store/places';
import { connect } from 'react-redux';
import { addRecommendationToStore } from '../store/recommendations';

class SuggestToFriendScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      googleObject: null,
      region: {
        latitude: this.props.navigation.state.params.plan.lat || 41.881832,
        longitude: this.props.navigation.state.params.plan.lng || -87.623177,
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
    this.props.addRecommendationToStore(this.state.googleObject, this.props.userId, this.props.navigation.state.params.plan.id);
    AlertIOS.alert(
      'Recommendation',
      'Your recommendation is added.'
    );
  }

  onRegionChange = (region) => {
    this.setState({ region });
  }

  addToRegion = (region) => {
    this.onRegionChange(region);
    this.setState({ marker: true });
  }

  render() {
    const { region } = this.state;
    const { username } = this.props.navigation.state.params.plan.user;
    return (
      <Container>
      <Image
            style={{ alignSelf: 'center', width: 150, height: 70 }}
            source={require('../assets/headerLogo.png')}
          />
        <Content padder contentContainerStyle={{ flex: 1, alignItems: 'center' }}>
          <H3 style={{ marginBottom: 10 }}>{`Give ${username} a Suggestion`}
          </H3>
          <GoogleSearch region={this.addToRegion} setLoc={this.addToState} lat={region.latitude} lng={region.longitude} type="establishment" />
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
