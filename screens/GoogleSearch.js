import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import call from '../store/axiosFunc';
const config = require('../config');

const GooglePlacesInput = () => {
  return (
 <GooglePlacesAutocomplete
  placeholder='Enter Location'
  minLength={2}
  autoFocus={false}
  returnKeyType={'default'}
  fetchDetails={true}
  query={{
        key:  config.GOOGLE_PLACES_KEY,
        language: 'en'
      }}
  onPress={(data, details = null) => {
    let place;
    if(data.place_id){
      place = {
        name: details.name,
        lat: details.geometry.location.lat,
        lng: details.geometry.location.lng,
        place_id: details.place_id
      };
    call('post', 'api/places', place);
    }
  }}
  styles={{
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
    },
    predefinedPlacesDescription: {
      color: '#1faadb'
    },
  }}

  currentLocation={false}
/>
  );
}

module.exports = GooglePlacesInput;
