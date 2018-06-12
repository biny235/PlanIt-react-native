import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { AsyncStorage } from 'react-native';
import { Button, Icon } from 'native-base';
//components
import DrawerSideBar from '../components/DrawerSideBar';
// screens
import ProfileScreen from '../screens/ProfileScreen';
import HistoryScreen from '../screens/HistoryScreen';
import FriendsListScreen from '../screens/FriendsListScreen';
import MainStackNav from './MainStackNav';

const signOutAsync = async (navigation) => {
  await AsyncStorage.clear();
  navigation.navigate('SignIn');
};

// to add header to menu items
const Profile = createStackNavigator(
  {
    Profile: ProfileScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerLeft: (
        <Button
          transparent
          onPress={() => navigation.openDrawer(navigation)}
        >
          <Icon name="menu" />
        </Button>
      ),
      title: 'Profile & Settings',

    })
  }
);

// to add header to menu items
const Friends = createStackNavigator(
  {
    Friends: {
      screen: FriendsListScreen
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerLeft: (
        <Button
          transparent
          onPress={() => navigation.openDrawer(navigation)}
        >
          <Icon name="menu" />
        </Button>
      ),
      title: 'Friends',
      headerRight: (
        <Button
          transparent
          onPress={() => navigation.navigate('AddFriend')}
        >
          <Icon name="md-person-add" />
        </Button>
      )
    })
  }
);

// to add header to menu items
const History = createStackNavigator(
  {
    History: HistoryScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerLeft: (
        <Button
          transparent
          onPress={() => navigation.openDrawer(navigation)}
        >
          <Icon name="menu" />
        </Button>
      )
    })
  }
);

// app needs to be inside the drawer so components can open drawer
export default createDrawerNavigator(
  {
    MainStack: MainStackNav,
    Profile,
    Friends,
    History
  },
  {
    contentComponent: props => <DrawerSideBar {...props} />
  }
);
