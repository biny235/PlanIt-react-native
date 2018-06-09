import React, { Component } from 'react';
import { TouchableOpacity, Label } from 'react-native';
import { Container, Content, Body, Button, Icon, List, ListItem, Text, Right } from 'native-base';


const plan1 = {
  id: 1,
  name: 'Washington D.C.',
  date: '2018-06-25',
  time: '11:40',
  lat: '41.881832',
  lng: '-87.623177',
  status: 'activate',
  category: 'Restaurants',
  userId: 'a88fcda3-51bf-4594-a471-e35c24543065'
};

const plan2 = {
  id: 1,
  name: 'BangKok',
  date: '2018-06-20',
  time: '11:40',
  lat: '41.881832',
  lng: '-87.623177',
  status: 'activate',
  category: 'Restaurants',
  userId: 'a88fcda3-51bf-4594-a471-e35c24543065'
};

const plan3 = {
  id: 1,
  name: 'London',
  date: '2018-08-13',
  time: '11:40',
  lat: '41.881832',
  lng: '-87.623177',
  status: 'activate',
  category: 'Restaurants',
  userId: 'a88fcda3-51bf-4594-a471-e35c24543065'
};

const plan = [plan1, plan2, plan3];
export default class FriendsPlansScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Container>
        <Content>
          <List
            dataArray={plan}
            renderRow={(item) =>
              (<ListItem icon button onPress={() => { this.props.navigation.navigate('SuggestToFriend')}}>
                <Body>
                  <Text>
                     {item.name} {item.date}
                  </Text>
                </Body>
                <Right>
                  <Icon style={{ color:'tomato' }} name='navigate' />
                </Right>
              </ListItem>)
            }>
          </List>
        </Content>
      </Container>
    );
  }
}

