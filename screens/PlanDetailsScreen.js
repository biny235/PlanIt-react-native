import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { Container, Content, Body, Title, Form, Item, Label, Input, Button } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class PlanDetailsScreen extends Component {
  render() {
    console.log(this.props.navigation);
    return (
      <Container>
        <Content>
          <Body style={{margin: 20}}>
            <Text>Manage your plan details here. Add/change date. Add friends who may make recommendations. Go to "Place" tab to change location.</Text>
          </Body>
        </Content>
      </Container>
    );
  }
}
