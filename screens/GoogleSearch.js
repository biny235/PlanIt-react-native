import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import call from '../store/axiosFunc';
const config = require('../config');
import { connect } from 'react-redux';
import { createPlace } from '../store/places';


class GooglePlacesInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.onPress = this.onPress.bind(this);
  }

  onPress(data, details = null) {
    if (data.place_id) {
      place = {
        name: details.name.toString(),
        // url: details.url.toString(),
        lat: details.geometry.location.lat.toString(),
        lng: details.geometry.location.lng.toString(),
        place_id: details.place_id.toString(),
        planId: 1,
        userId: this.props.users.id
      };
      console.log('place :', place);
      call('post', '/api/places', place);
    }
  }

  showContainer = () => {
    console.log('showContainer');
  }

  render() {

    const { lat, lng, type, users } = this.props;
    const placeHolder = type === '(cities)' ? 'Enter a City' : 'Enter a Place';
    const { onPress } = this;
    console.log('users', users.id);
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
          console.log('data :', data);
          console.log('details :', details);
          onPress(data, details);
        }
        }
        styles={{
          listView: {
            backgroundColor: 'white',
          },
          container: {
            flexGrow: 1
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
