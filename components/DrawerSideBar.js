import React from 'react';
import { Image } from 'react-native';
import { Text, Container, List, ListItem, Left, Body, Right, Icon, Separator, Content, Grid, Row, Col, Button } from 'native-base';
const routes = [
  {
    name: 'Profile',
    display: 'Profile & Settings',
    icon: 'account-settings-variant',
    iconType: 'MaterialCommunityIcons'
  },
  {
    name: 'Friends',
    display: 'Friends',
    icon: 'ios-people',
    iconType: 'Ionicons'
  },
  {
    name: 'History',
    display: 'Travel Plans Completed',
    icon: 'power',
    iconType: 'Foundation'
  },
];
export default class DrawerSideBar extends React.Component {
  constructor(){
    super()
    this.logout = this.logout.bind(this)
  }
  logout(){
    this.props.navigation.navigate('SignIn')
    AsyncStorage.clear()
  }
  render() {
    const { logout } = this
    return (
      <Container>
        <Content>
          <Grid>
            <Row>
              <Col>
              <Button
                full
                style={{ height: 80, backgroundColor: 'tomato' }}
                onPress={() => this.props.navigation.navigate('MainModal')}
              >
                <Icon
                  type="MaterialCommunityIcons"
                  name="signal-variant"
                  style={{fontSize: 42, marginTop: 12 }}
                  />
              </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <List
                  dataArray={routes}
                  contentContainerStyle={{ marginTop: 0 }}
                  renderRow={data => {
                    return (
                      <ListItem
                        icon
                        button
                        onPress={() => this.props.navigation.navigate(data.name)}
                      >
                        <Left>
                          <Icon
                            name={data.icon}
                            type={data.iconType}
                            style={{fontSize: 24}}
                          />
                        </Left>
                        <Body>
                          <Text style={{fontSize: 16}}>{data.display}</Text>
                        </Body>
                        <Right>
                        <Icon name="arrow-forward" />
                        </Right>
                      </ListItem>
                    );
                  }}
                />
                <List>
                  <Separator />
                  <ListItem
                    icon
                    button
                    onPress={logout}
                  >
                    <Left>
                      <Icon
                        name="plane"
                        style={{fontSize: 22}}
                      />
                    </Left>
                    <Body>
                      <Text>Log out</Text>
                    </Body>
                  </ListItem>
                </List>
              </Col>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}
