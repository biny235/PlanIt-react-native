import React, {Component} from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Container, Content, Header, Left, Text, Item, Footer, FooterTab, Button, Icon, Badge, Input } from 'native-base';
import { MapView } from 'expo';
import { Provider } from 'react-redux';
import store from '../store';
import call from '../store/axiosFunc';

const MAP_SCREEN = 'Map';

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

export default class MapScreen extends Component {
  static navigationOptions = {
    // not working on drawer
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
        <Ionicons name="md-home" size={25} color={tintColor} />
    ),
  };

  constructor() {
    super();
    this.state = {
      mapLoaded: false,
      location: {
        latitude: 40.7050758,
        longitude: -74.00916039999998,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      currentScreen: MAP_SCREEN,
      isBroadcasting: true
    };
  }

  componentDidMount() {
    call('get', 'api/user/plan')
        .then(res => res.data)
        .then(plan => console.log(plan))
        .catch(err => console.log(err))
    this.setState({ mapLoaded: true });
  }

  broadcastPlan = () => {
    this.toggleShowSearch();
  }

  openDrawer = () => {
    this.props.navigation.openDrawer();
  }

  toggleShowSearch = () => {
    const newState = !this.state.isBroadcasting;
    this.setState({isBroadcasting: newState});
  }

  renderScreen = () => {
    const { location } = this.state;
    if (this.state.currentScreen === MAP_SCREEN) {
      return (
        <View style={{flex: 1}}>
          <MapView
            style={{flex: 1}}
            initialRegion={location}
            provider={MapView.PROVIDER_GOOGLE}
            customMapStyle={mapStyle}
            >
          </MapView>
        </View>
      )
    }
  }

  renderSearchInput = () => {
    if (this.state.isBroadcasting) {
      return (
        <Header rounded searchBar>
          <Left>
            <Button
              transparent
              onPress={this.openDrawer}
            >
              <Icon name='menu' />
            </Button>
          </Left>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Where to" />
            <Icon type="FontAwesome" name="location-arrow" size={8} />
          </Item>
          <Button small transparent onPress={this.toggleShowSearch}>
            <Text>Search</Text>
          </Button>
        </Header>
      )
    } else {
      return (
        <Header>
          <Left>
            <Button
              transparent
              onPress={this.openDrawer}
            >
              <Icon name='menu' />
            </Button>
          </Left>
          <Button small rounded info onPress={this.toggleShowSearch}>
            <Icon active name="search" />
          </Button>
        </Header>
      )
    }
  }

  renderCallButtonIcon = () => {
    if (this.state.isBroadcasting) {
      return (
         <Icon type="MaterialCommunityIcons" name='signal-variant' style={styles.planCallIcon}/>
       )
     } else {
       return (
          <Icon type="Foundation" name='x' style={styles.planCallIcon}/>
      )
    }
  }

  render() {
    const { mapLoaded } = this.state;
    const { broadcastPlan, renderSearchInput, renderScreen } = this;
    if (!mapLoaded) {
      return (
          <ActivityIndicator size="large" />
      );
    }
    return (
      <Provider store={store}>
        <Container>
          {renderSearchInput()}
          <Content contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
            {renderScreen()}
          </Content>
          <Footer>
            <FooterTab>
              <Button vertical>
                <Icon name="calendar" />
                <Text>Plan</Text>
              </Button>
              <Button vertical>
                <Text></Text>
              </Button>
              <Button badge vertical>
                <Badge ><Text>10</Text></Badge>
                <Icon type="MaterialCommunityIcons" name="thought-bubble-outline" />
                <Text>Recos</Text>
              </Button>
            </FooterTab>
          </Footer>
          <View style={styles.buttonContainer}>
            <Button rounded style={styles.planCallButton} onPress={broadcastPlan}>
              {this.renderCallButtonIcon()}
            </Button>
          </View>
        </Container>
      </Provider>
    );
  }
}

const styles = {
  buttonContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flex: 1,
  },
  planCallButton: {
    width: 80,
    height: 80,
    backgroundColor: 'tomato',
    alignSelf: 'center',
    flex: 1,
  },
  planCallIcon: {
    paddingLeft: 10,
    fontSize: 36,
  }
}
