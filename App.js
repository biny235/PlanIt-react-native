import React from 'react';
import { AsyncStorage } from 'react-native';
import { Button, Icon } from 'native-base';
import { createStackNavigator, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';
import SignInScreen from './screens/SignInScreen';
import RegisterScreen from './screens/RegisterScreen';
import DrawerSideBar from './components/DrawerSideBar';
import MapScreen from './screens/MapScreen';
import PlanDetailsScreen from './screens/PlanDetailsScreen';
import FriendsScreen from './screens/FriendsScreen';
import RecosScreen from './screens/RecosScreen';
import ProfileScreen from './screens/ProfileScreen';
import HistoryScreen from './screens/HistoryScreen';

const signOutAsync = async (navigation) => {
  await AsyncStorage.clear();
  navigation.navigate('SignIn');
};

// stack for main/map items
// removed header to use tab header below
const MainStack = createStackNavigator(
  {
    Map: {
      screen: MapScreen,
      title: 'Choose Location'
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
);

// to add header to menu items
const Friends = createStackNavigator(
  {
    Friends: {
      screen: FriendsScreen
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
          onPress={() => signOutAsync(navigation)}
        >
          <Icon name="power" />
        </Button>
      ),
    })
  }
);

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
      headerRight: (
        <Button
          transparent
          onPress={() => signOutAsync(navigation)}
        >
          <Icon name="power" />
        </Button>
      ),
    })
  }
);

// app needs to be inside the drawer so components can open drawer
const App = createDrawerNavigator(
  {
    Home: MainStack,
    Profile,
    Friends: Friends,
    History: HistoryScreen
  },
  {
    contentComponent: props => <DrawerSideBar {...props} />
  }
);

// stacks do not have headers
export default createSwitchNavigator(
  {
    SignIn: SignInScreen,
    Register: RegisterScreen,
    App
  },
  {
    initialRouteName: 'App',
  }
);

