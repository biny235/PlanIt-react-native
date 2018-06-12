import React, { Component } from 'react';
import { Container, Content, Item, Label, Input, Button, Text } from 'native-base';
import { connect } from 'react-redux';
import { addFriend } from '../store/friends'

class AddFriendScreen extends Component {
  state = {
    email: ""
  }
  change = (email)=>{
    this.setState({email})
  }
  onPress = ()=>{
    this.props.addFriend(this.state.email)
  }

  render() {
    const { change, onPress } = this
    return (
      <Container>
        <Content>
          <Item floatingLabel>
            <Label>Friend's Email</Label>
            <Input
              onChangeText={change}
              autoCorrect={false}
              />
          </Item>
          <Button
              primary
              block
              onPress={onPress}
            >
              <Text style={{color: 'white'}}>Add Friend</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addFriend: (email) => dispatch(addFriend(email))
  }
}

export default connect(null, mapDispatchToProps)(AddFriendScreen);
