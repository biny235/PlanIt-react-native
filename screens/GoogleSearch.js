import React from 'react';
import { Constants } from 'expo';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import call from '../store/axiosFunc';
const config = require('../config');

const GooglePlacesInput = ( {lat, lng, type} ) => {
  const onPress = (data, details = null) => {
    let place;
    if (data.place_id){
      place = {
        name: details.name,
        url: details.url,
        lat: details.geometry.location.lat,
        lng: details.geometry.location.lng,
        place_id: details.place_id
      };
    call('post', '/api/places', place);
    }
    console.log(place);
  };
  return (
    <GooglePlacesAutocomplete
      placeholder= 'Enter Location'
      minLength={2}
      autoFocus={false}
      returnKeyType={'default'}
      fetchDetails={true}
      query={{
            key: config.GOOGLE_PLACES_KEY,
            language: 'en',
            location: `${lat}, ${lng}`,
            radius: 5000,
            types: `${type}`
          }}
      onPress={(data, details) => onPress(data, details)}
      styles={{
        textInputContainer: {
          padding: Constants.statusBarHeight,
          backgroundColor: 'rgba(0,0,0,0)',
          width: '100%'
        },
        textInput: {
          padding: Constants.statusBarHeight,
          marginLeft: 0,
          marginRight: 0,
          height: 38,
          color: '#5d5d5d',
          fontSize: 16
        },
        predefinedPlacesDescription: {
          color: '#1faadb'
        },
      }}

      currentLocation={false}
    />
  );
};

module.exports = GooglePlacesInput;
