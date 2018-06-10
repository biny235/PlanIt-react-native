import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { connect } from 'react-redux';

const FriendsList = (props) => {
  return (
    <Container>
      <Content>
        <List>
          {props.friends && props.friends.map(friend => (
            <ListItem avatar key={friend.id}>
              <Left>
                <Thumbnail source={{ uri: friend.thumbnail }} />
              </Left>
              <Body>
                <Text>{friend.username}</Text>
                <Text>{friend.email}</Text>
              </Body>
            </ListItem>
        ))}
        </List>
      </Content>
    </Container>
  );

}


const mapStateToProps = ({friends}) =>{
  friends = friends || []
  return{
    friends
  }
}

export default connect(mapStateToProps)(FriendsList)