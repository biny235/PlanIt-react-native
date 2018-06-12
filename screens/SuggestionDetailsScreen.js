import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { Container, Content, Header, H1, Left, Body, Right, Icon, Button, Card, CardItem, Thumbnail } from 'native-base';
import MapView from 'react-native-maps';

const LATITUDEDELTA = 0.0132;
const LONGITUDEDELTA = 0.0117;

export default class SuggestionDetailsScreen extends Component {
  render() {
    const data = this.props.navigation.getParam('data', {});
    return (
      <Container>
        <Header style={{ backgroundColor: 'tomato' }}>
          <Left />
          <Body>
            <Text style={styles.title}>{data.friend} Suggests</Text>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.pop()}
            >
              <Icon
                type="Ionicons"
                name="ios-close-circle-outline"
                style={styles.closeButtonIcon}
              />
            </Button>
          </Right>
        </Header>
        <Content padder contentContainerStyle={{}}>
          <Card style={{flex: 0}}>
            <CardItem>
              <Body>
                <H1>{data.name}</H1>
                <Text>{data.city}, {data.state}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <View style={{ flex: 1 }}>
                <MapView
                  style={{ flex: 1, width: 'auto', height: 200 }}
                  region={{
                    latitude: data.lat,
                    longitude: data.lng,
                    latitudeDelta: LATITUDEDELTA,
                    longitudeDelta: LONGITUDEDELTA
                  }}
                  provider={MapView.PROVIDER_GOOGLE}
                  followsUserLocation={true}
                  showsMyLocationButton={true}
                  showsBuildings={true}
                >
                  <MapView.Marker
                    id={data.id}
                    coordinate={{
                      latitude: data.lat,
                      longitude: data.lng,
                    }}
                    title={data.name}
                    description=""
                  />
                </MapView>
              </View>
            </CardItem>
            <CardItem>
              <Left>
                <Thumbnail source={data.friendIcon} />
                <Body>
                  <Text note style={{fontSize: 12, color: '#616161'}}>According to {data.friend}</Text>
                  <Text note>"{data.comment}"</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem />
          </Card>
          <Button
            transparent
            onPress={() => this.props.navigation.goBack()}
            style={styles.closeWinTextView}
          >
            <Text style={styles.closeWinText}>Close window</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = {
  title: {
    color: 'white',
    fontSize: 18,
  },
  closeButtonIcon: {
    color: 'white'
  },
  closeWinTextView: {
    marginTop: 20,
    alignSelf: 'center',
  },
  closeWinText: {
    color: '#424242'
  }
};
