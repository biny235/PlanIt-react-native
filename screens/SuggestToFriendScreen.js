import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { Container, Content, H1 } from 'native-base';
import GoogleSearch from './GoogleSearch';
import MapView from 'react-native-maps';

const chicago = {
  lat: '41.881832',
  lng: '-87.623177'
};

const hawaii = {
  lat: '21.289373',
  lng: '-157.917480'
}

export default class SuggestToFriendScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      planId: 1,
      userId: 1,
      region: {
        latitude: 40.7050758,
        longitude: -74.00916039999998,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
  }
  render() {
    const {userId, planId, region} = this.state;
    return (
      <Container>
        <Content padder contentContainerStyle={{ flex: 1, alignItems: 'center' }}>
            <H1 style={{marginBottom: 10}}>Give Moe a Suggestion</H1>
            <GoogleSearch lat={hawaii.lat} lng={hawaii.lng} type="establishment" userId={userId} planId={planId} />
            <Content contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
          {/* <View style={{flex: 1, width: 100}}> */}
          <MapView
            style={{flex: 1, width: 200}}
            initialRegion={region}
            provider={MapView.PROVIDER_GOOGLE}
           >Map</MapView>
          ))}
          {/* </View> */}
        </Content>
            <Text style={{flex: 1}}>Find suggestions for your friend's plan. This screen should contain a map focused on the location where your friend is traveling to. Search for places to suggest to your friend. Your favorites should also appear on this map.</Text>
        </Content>
      </Container>
    );
  }
}

