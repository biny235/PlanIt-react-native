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
      googlePlace: {},
      region: {},
      city: ''
    };
  }

  onPress = (data, details = null) => {
    if (details) {
      this.setState({googlePlace: details});
      if (this.props.setLoc){
        this.props.setLoc(details);
      }
    }
  }

  onPressMapScreen = (data, details = null) => {
    if (details) {
      this.props.region(details.geometry.location);
      //console.log('details :', details);
      this.props.city(details.formatted_address);
    }
  }

  showContainer = () => {
    console.log('showContainer');
  }

  render() {
    console.log(this.state.googlePlace.name);
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
        onPress={(data, details) => {
          if (type === '(cities)'){
            this.onPressMapScreen(data, details); //set location of plan
          } else {
            onPress(data, details); //create place on plan
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
