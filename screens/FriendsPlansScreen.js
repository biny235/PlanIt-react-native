import React from 'react';
import { Container, Content, List, ListItem, Body, Right, Icon, Text } from 'native-base';
import {connect} from 'react-redux'

class FriendsPlansScreen extends React.Component {
  getIcon(category){
    switch(category){
      case 'Restaurants':
        return 'cutlery'
      case 'Hotels':
        return 'bed'
      default:
      return 'map-marker'
    }
  }
  render() {
    const {friendsPlans} = this.props
    console.log(this.props)
    return (
      <Container>
        <Content>
          <List>
            {friendsPlans.map(plan => (
              <ListItem key={plan.id} onPress={()=> this.props.navigation.navigate('Suggest', {plan})}>
                <Body>
                  <Text>{plan.name}</Text>
                  <Text note>{plan.location}</Text>
                  <Text note>{`${plan.date} ${plan.time}`}</Text>
                </Body>
                <Right>
                  <Icon type="FontAwesome" name={this.getIcon(plan.category)}/>
                </Right>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({friends, friendsPlans})=>{
  console.log(friendsPlans)
  return{
    friends,
    friendsPlans
  }
}


export default connect(mapStateToProps)(FriendsPlansScreen)