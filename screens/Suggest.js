import React, { Component } from 'react';
import { Text, Image, Button } from 'react-native';
import { Container, Content, H1 } from 'native-base';
import GoogleSearch from './GoogleSearch';
import MapView from 'react-native-maps';
import { fetchPlaces } from '../store/places';
import { connect } from 'react-redux';

class SuggestToFriendScreen extends Component {
  constructor(props) {
    super(props);
    const { plan } = props;
    this.state = {
      region: {
        latitude: plan.lat,
        longitude: plan.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
    };
  }


  render() {
    const { region } = this.state;
    const {plan} = this.props
    return (
      <Container>
          <Content contentContainerStyle={{ flex: 1, justifyContent: 'center', }}>
            <Content contentContainerStyle={{height: 200}}>
              <MapView
                style={{ flex: 1, height: 200 }}
                initialRegion={region}
                provider={MapView.PROVIDER_GOOGE}
                scrollEnabled={false}
                zoomEnabled={false}
                userInteractionEnabled={false}
              />
              <H1 >Give USER a Suggestion</H1>
              <GoogleSearch lat={plan.lat} lng={plan.lng} type="establishment" />
              </Content>
           
        </Content>
      </Container>
    );
  }
}

const mapState = ({users, places, plan}) => {
  plan = {
    lat: 40.705076,
    lng: -74.009160
  }
  return {
    users,
    places,
    plan
  };
};

const mapDispatch = dispatch => {
  return {
      fetchPlaces: () => dispatch(fetchPlaces())
    };
  };

export default connect(mapState, mapDispatch)(SuggestToFriendScreen);
