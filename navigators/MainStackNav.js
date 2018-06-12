import React from 'react';
import { createStackNavigator } from 'react-navigation';
import MainModalNav from './MainModalNav';
import FriendsPlansScreen from '../screens/FriendsPlansScreen';
import Suggest from '../screens/SuggestToFriendScreen';
import AddFriend from '../screens/AddFriendScreen';

const MainStackNav = createStackNavigator({
  MainModal: {
    screen: MainModalNav,
    navigationOptions: () => ({
      header: null
    })
  },
  FriendsPlans: {
    screen: FriendsPlansScreen,
    navigationOptions: {
      title: "Friends' Plans",
      headerStyle: {
        backgroundColor: 'tomato',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },
  Suggest: {
    screen: Suggest,
    navigationOptions: {
      title: 'Suggest a Place',
      headerStyle: {
        backgroundColor: 'tomato',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },
  AddFriend: {
    screen: AddFriend,
    navigationOptions: {
      title: 'Add a Friend',
      headerStyle: {
        backgroundColor: 'tomato',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
});

export default MainStackNav;
