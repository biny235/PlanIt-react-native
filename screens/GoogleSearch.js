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
      text: '',
      city: ''
    };
    this.onPress = this.onPress.bind(this);
  }

  onPress(data, details = null) {
    if (data.place_id) {
      place = {
        name: details.name,
        // url: details.url.toString(),
        lat: details.geometry.location.lat,
        lng: details.geometry.location.lng,
        place_id: details.place_id,
        planId: 1,
        userId: this.props.users.id
      };
      if (this.props.name === 'SuggestToFriend') {
        call('post', '/api/places', place);
      } else {
        this.setState({
          city: details.name,
          
         });
      }
    }
  }

  showContainer = () => {
    console.log('showContainer');
  }

  render() {
    console.log('this.props :', this.props);
    const { lat, lng, type, users } = this.props;
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
        onPress={(data, details) => onPress(data, details)}
        onTextChange={(text) => {
          console.log('text', text);
        }}
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
