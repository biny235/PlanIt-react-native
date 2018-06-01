import React from 'react';
import { View, Text } from 'react-native';
import { Header, Left, Button, Icon, Body, Title, Subtitle,   Right, Fab } from 'native-base';
import { MapView } from 'expo';

const mapStyle = [
  {
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#444444"
          }
      ]
  },
  {
      "featureType": "administrative.neighborhood",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "visibility": "off"
          },
          {
              "hue": "#ff0000"
          }
      ]
  },
  {
      "featureType": "administrative.land_parcel",
      "elementType": "geometry",
      "stylers": [
          {
              "visibility": "off"
          },
          {
              "weight": "1.24"
          },
          {
              "hue": "#ff0000"
          }
      ]
  },
  {
      "featureType": "administrative.land_parcel",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "visibility": "off"
          },
          {
              "color": "#1a0a0a"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [
          {
              "color": "#f2f2f2"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "labels",
      "stylers": [
          {
              "saturation": "7"
          }
      ]
  },
  {
      "featureType": "landscape.man_made",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#e0e0e0"
          }
      ]
  },
  {
      "featureType": "landscape.man_made",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "visibility": "off"
          },
          {
              "color": "#040303"
          },
          {
              "weight": "5.56"
          },
          {
              "lightness": "-3"
          }
      ]
  },
  {
      "featureType": "landscape.man_made",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#f6f6f6"
          }
      ]
  },
  {
      "featureType": "landscape.man_made",
      "elementType": "labels.text",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#fa0404"
          }
      ]
  },
  {
      "featureType": "landscape.natural.landcover",
      "elementType": "geometry",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#fd0000"
          }
      ]
  },
  {
      "featureType": "landscape.natural.landcover",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "weight": "1.22"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi.attraction",
      "elementType": "geometry",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "poi.park",
      "elementType": "labels.text",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "saturation": "61"
          },
          {
              "lightness": "-63"
          },
          {
              "gamma": "1.52"
          }
      ]
  },
  {
      "featureType": "poi.park",
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi.school",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi.school",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "visibility": "off"
          },
          {
              "hue": "#ffbf00"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "all",
      "stylers": [
          {
              "saturation": -100
          },
          {
              "lightness": 45
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "hue": "#ff0000"
          },
          {
              "lightness": "43"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "labels.text",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#000000"
          },
          {
              "weight": "0.01"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "weight": "2"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "weight": "2.08"
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "lightness": "0"
          },
          {
              "gamma": ".75"
          }
      ]
  },
  {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
          {
              "color": "#2381a8"
          },
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#00e4ff"
          },
          {
              "saturation": "-32"
          },
          {
              "lightness": "59"
          },
          {
              "weight": "0.68"
          }
      ]
  }
];

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      location: {
        latitude: 40.7050758,
        longitude: -74.00916039999998,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
  }
  render() {
    const { location } = this.state;
    return (
      <View style={{flex: 1}}>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Fine</Title>
            <Subtitle>with Whatever</Subtitle>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>
        <MapView
          style={{flex: 1}}
          initialRegion={location}
          provider={MapView.PROVIDER_GOOGLE}
          customMapStyle={mapStyle}
        />
        <Fab
          direction='up'
          position="bottomRight"
          style={{backgroundColor: '#FF6D00'}}
        >
          <Icon name="add" />
        </Fab>
      </View>
    );
  }
}

