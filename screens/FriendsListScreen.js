import React from 'react';
import { Container, Content, List, ListItem, Left, Body, Thumbnail, Text } from 'native-base';
import { connect } from 'react-redux';

const FriendsList = (props) => {
  return (
    <Container>
      <Content>
        <List>
          {props.friends && props.friends.map(friend => (
            <ListItem avatar key={friend.id}>
              <Left>
                <Thumbnail small source={{ uri: friend.thumbnail }} />
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
};


const mapStateToProps = ({ friends }) => {
  friends = friends || [];
  return {
    friends
  };
};

export default connect(mapStateToProps)(FriendsList);
