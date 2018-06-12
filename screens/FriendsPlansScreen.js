import React from 'react';
import { Left, Thumbnail, Container, Content, List, ListItem, Body, Right, Icon, Text } from 'native-base';
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
    return (
      <Container>
        <Content>
          <List>
            {friendsPlans.map(plan => (
              <ListItem avatar key={plan.id} onPress={()=> this.props.navigation.navigate('Suggest', {plan})}>
                <Left>
                  <Thumbnail small source={{ uri: plan.user.thumbnail }} />
                </Left>
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
  return{
    friends,
    friendsPlans
  }
}


export default connect(mapStateToProps)(FriendsPlansScreen)
