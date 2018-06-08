import React, {Component} from 'react';
import { View, ActivityIndicator, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { fetchPlan } from '../store/plans';

import { Container, Content, Header, Left, Text, Item, Footer, FooterTab, Button, Icon, Badge, Input, Thumbnail } from 'native-base';
import MapView from 'react-native-maps';
// import mapStyle from '../mapStyle';  // doesn't show POI

const larry = require('../assets/friends-thumbnails/larry.jpg');
const moe = require('../assets/friends-thumbnails/curly.jpg');
const curly = require('../assets/friends-thumbnails/moe.jpg');
const friendIcons = [moe, curly, larry];

const markerData = [
  {
    name: 'Balthazar',
    lat: 40.7226241814105,
    lng: -73.99817168712616,
    place_id: 'ChIJt7fMLIlZwokRCRtM9bNDg78',
    details: 'Pricey but the raw red meat is great.',
  },
  {
    name: "Grimaldi's Pizza",
    lat: 40.702602314710816,
    lng: -73.99322032928467,
    place_id: 'ChIJgzfayTBawokR9jTsF6hLf40',
    details: 'Homemade mozzarella cheese and beautiful view.',
  },
  {
    name: 'Terri',
    lat: 40.70661306619307,
    lng: -74.00703504681587,
    place_id: 'ChIJzcIh0hdawokR59-X8e5i4bk',
    details: 'Vegan delight.',
  },
];

class MapScreen extends Component {
  constructor() {
    super();
    this.state = {
      mapLoaded: false,
      region: {
        latitude: 40.7050758,
        longitude: -74.00916039999998,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      isBroadcasting: true,
      markers: [],
    };
  }


  componentDidMount() {
    // !this.users ? this.props.navigation.navigate('SignIn') : this.props.getPlan();
    this.setState({ mapLoaded: true });
    
  }

  toggleBroadcastPlan = () => {
    const isBroadcasting = !this.state.isBroadcasting;
    this.setState({isBroadcasting: isBroadcasting});
    this.simulateFriendsRecommending();
  }

  addMarker = marker => {
    const markers = [...this.state.markers, marker];
    this.setState({markers});
  }

  simulateFriendsRecommending =() => {
    if (this.state.isBroadcasting) {
      let counter = markerData.length - 1;
      const nIntervId = setInterval(() => {
        const marker = markerData[counter];
        this.addMarker(marker);
        if (!counter) {
          clearInterval(nIntervId);
        }
        counter--;
      }, 1000);
    } else {
      this.setState({markers: []});
    }
  }

  openDrawer = () => {
    this.props.navigation.openDrawer();
  }

  onRegionChangeComplete = (region) => {
    this.setState({ region });
  }

  renderMarkers = () => {
    if (!this.state.markers) {
      return;
    }
    return this.state.markers.map(marker => {
      return (
        <MapView.Marker
          key={marker.place_id}
          id={marker.place_id}
          coordinate={{latitude: marker.lat, longitude: marker.lng}}
          title={marker.name}
          description={marker.details}
        />
      );
    });
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
              <Icon name="menu" />
            </Button>
          </Left>
          <Item>
            <Input placeholder="Where to..." />
          </Item>
          <Button small transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      );
    } else {
      return (
        <Header>
          <Left>
            <Button
              transparent
              onPress={this.openDrawer}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Button small rounded info>
            <Icon active name="search" />
          </Button>
        </Header>
      );
    }
  }

  renderCallButtonIcon = () => {
    if (this.state.isBroadcasting) {
      return (
         <Icon type="MaterialCommunityIcons" name="signal-variant" style={styles.planCallIcon} />
       );
     } else {
       return (
          <Icon type="Foundation" name="x" style={styles.planCallIcon} />
      );
    }
  }

  render() {
    const { mapLoaded, region, markers } = this.state;
    const { toggleBroadcastPlan, renderSearchInput, renderScreen } = this;
    const { navigation } = this.props;
    if (!mapLoaded) {
      return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
);
    }
    return (
      <Container>
        {renderSearchInput()}
        <Content contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
          <View style={{flex: 1}}>
          <MapView
            style={{flex: 1}}
            initialRegion={region}
            provider={MapView.PROVIDER_GOOGLE}
            // customMapStyle={mapStyle}
            showsUserLocation={true}
            followsUserLocation={true}
            showsMyLocationButton={true}
            showsPointsOfInterest={true}
            showsBuildings={true}
            // onPoiClick={e => console.log(e.nativeEvent)}
            onRegionChangeComplete={this.onRegionChangeComplete}
            // onPress={ev => console.log(ev.nativeEvent)}
            >
            {this.renderMarkers()}
          </MapView>
          ))}
          </View>
        </Content>
        <Footer>
          <FooterTab>
            <Button
              vertical
              onPress={this.navToPlanSettings}
            >
              <Icon name="calendar" />
              <Text style={{fontSize: 12}}>Plan Settings</Text>
            </Button>
            <Button vertical>
              <Text />
            </Button>
            <Button badge vertical>
              <Badge  style={(markers.length ? styles.badgeVisible : styles.badgeInvisible )}><Text>{markers.length}</Text></Badge>
              <Icon type="MaterialCommunityIcons" name="thought-bubble-outline" />
              <Text style={{fontSize: 12}}>Suggestions</Text>
            </Button>
          </FooterTab>
        </Footer>
        <View style={styles.friendIcons}>
          <Button transparent onPress={() => this.props.navigation.navigate('FriendsPlans')}>
            <Thumbnail circle small source={friendIcons[2]} style={{ zIndex: 30}} />
            <Thumbnail circle small source={friendIcons[1]} style={{ marginLeft: -10, zIndex: 20 }} />
            <Thumbnail circle small source={friendIcons[0]}  style={{ marginLeft: -10, zIndex: 10} } />
            <Badge style={{
              marginLeft: -12, marginTop: -12, zIndex: 40,
              transform: [{ scale: 0.7 }]
            }}><Text style={{}}>10</Text></Badge>
          </Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            rounded
            style={styles.planCallButton}
            onPress={toggleBroadcastPlan}
          >
            {this.renderCallButtonIcon()}
          </Button>
        </View>
        <View style={styles.planDetailPressView}>
          <Button
            style={styles.pressAreaBtn}
            onPress={() => this.props.navigation.navigate('PlanDetails')}
          />
        </View>
        <View style={styles.suggestPressView}>
          <Button
            style={styles.pressAreaBtn}
            onPress={() => this.props.navigation.navigate('Suggestions')}
          />
        </View>
      </Container>
    );
  }
}

const styles = {
  badgeInvisible: {
    opacity: 0
  },
  badgeVisible: {
    opacity: 1
  },
  friendIcons: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    left: 10,
    bottom: 90,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
  },
  planCallButton: {
    width: 80,
    height: 80,
    backgroundColor: 'tomato',
    alignSelf: 'center',
  },
  planCallIcon: {
    paddingLeft: 10,
    fontSize: 36,
  },
  planDetailPressView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  suggestPressView: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  pressAreaBtn: {
    width: 100,
    height: 55,
    opacity: 0,
    backgroundColor: '#A8A8A8',
    borderRadius: 0,
  },
};

const mapStateToProps = ({plans, users})=>{
  return {
    users,
    plans
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPlan: ()=> dispatch(fetchPlan())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
