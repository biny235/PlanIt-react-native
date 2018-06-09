import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import call from '../store/axiosFunc';
const config = require('../config');
import { connect } from 'react-redux';
import { createPlace } from '../store/places';

const GooglePlacesInput = ( {lat, lng, type, users} ) => {

  console.log('users', users.id);
  const placeHolder = type === '(cities)' ? 'Enter a City' : 'Enter a Place';
  const onPress = (data, details = null, type) => {
    let place;
    if (data.place_id){
      place = {
        name: details.name.toString(),
        // url: details.url.toString(),
        lat: details.geometry.location.lat.toString(),
        lng: details.geometry.location.lng.toString(),
        place_id: details.place_id.toString(),
        planId: 1,
        userId: users.id
      };
    call('post', '/api/places', place);
    }
  };
  return (
    <GooglePlacesAutocomplete
      placeholder= {placeHolder}
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
        container: {
          height: 50
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
};

const mapState = ({ users }) => {
  return {
    users
  };
};

const mapDispatch = dispatch => {
return {
    createPlace: () => dispatch(createPlace())
  };
};

export default connect(mapState, mapDispatch)(GooglePlacesInput);
