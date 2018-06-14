import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
const config = require('../config');


export default class GooglePlacesInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      googlePlace: {},
      region: {},
      city: ''
    };
  }

  onPress = (data, details = null) => {
    if (details) {
      if (this.props.setLoc){
        this.props.setLoc(details);
      }
      const region = {
        latitude: details.geometry.location.lat,
        longitude: details.geometry.location.lng,
        latitudeDelta: 0.0022,
        longitudeDelta: 0.0421
      };
      this.props.region(region);
    }
  }

  onPressMapScreen = (data, details = null) => {
    if (details) {
      const region = {
        latitude: details.geometry.location.lat,
        longitude: details.geometry.location.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      };
      this.props.region(region);
      this.props.city(details.formatted_address);
    }
  }

  showContainer = () => {
    console.log('showContainer');
  }

  render() {
    const { lat, lng, type } = this.props;
    const placeHolder = type === '(cities)' ? 'Enter a City' : 'Enter a Place';
    const { onPress } = this;
    return (
      <GooglePlacesAutocomplete
        placeholder={placeHolder}
        minLength={2}
        autoFocus={false}
        returnKeyType={'default'}
        fetchDetails={true}
        suppressDefaultStyles={true}
        showContainer={this.showContainer}
        query={{
          key: config.GOOGLE_PLACES_KEY,
          language: 'en',
          location: `${lat}, ${lng}`,
          radius: 5000,
          types: `${type}`
        }}
        onPress={(data, details) => {
          if (type === '(cities)'){
            this.onPressMapScreen(data, details); //set location of plan
          } else {
            onPress(data, details);
          }
        }
        }
        styles={{
          listView: {
            position: 'absolute',
            top: 60,
            left: 10,
            right: 10,
            backgroundColor: 'white',
            borderRadius: 5,
            flex: 1,
            elevation: 3,
            zIndex: 10
          },
          container: {
            zIndex: 10,
            overflow: 'visible',
            height: 50,
            flexGrow: 0,
            flexShrink: 0
          },
          scrollView: {
            paddingTop: 60
          },
          textInputContainer: {
            backgroundColor: 'rgba(0,0,0,0)',
            width: '100%'
          },
          textInput: {
            marginLeft: 0,
            marginRight: 0,
            height: 38,
            color: '#5d5d5d',
            fontSize: 16
          }
        }}

        currentLocation={false}
      />
    );
  }
}
