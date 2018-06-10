import React from 'react';
import { createStackNavigator } from 'react-navigation';
import MainModalNav from './MainModalNav';
import FriendsPlansScreen from '../screens/FriendsPlansScreen';
import Suggest from '../screens/Suggest';

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
  SuggestToFriend: {
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
  }
});

export default MainStackNav;
