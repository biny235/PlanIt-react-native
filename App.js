import React from 'react';
import { AsyncStorage } from 'react-native';
import { Button, Icon } from 'native-base';
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SignInScreen from './screens/SignInScreen';
import RegisterScreen from './screens/RegisterScreen';
import MapScreen from './screens/MapScreen';
import PlanDetailsScreen from './screens/PlanDetailsScreen';
import FriendsScreen from './screens/FriendsScreen';
import RecosScreen from './screens/RecosScreen';
import ProfileScreen from './screens/ProfileScreen';

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

// all tabs
const AppTabs = createBottomTabNavigator(
  {
    Plan: PlanDetailsScreen,
    Place: MainStack,
    Recos: RecosScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'Place',
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Place') {
          iconName = `map-marker${focused ? '' : '-outline'}`;
          return <MaterialIcons name={iconName} size={25} color={tintColor} />;
        } else if (routeName === 'Plan') {
          iconName = `ios-calendar${focused ? '' : '-outline'}`;
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        } else if (routeName === 'Recos') {
          iconName = `thought-bubble${focused ? '' : '-outline'}`;
          return <MaterialIcons name={iconName} size={25} color={tintColor} />;
        }
      },
    })
  }
);

// stack needed for common tab navigator header
  // remove if each tab element needs own header
const App = createStackNavigator(
  {
    AppTabs,
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
      title: 'FWW',
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
const Drawer = createDrawerNavigator(
  {
    Home: App,
    'Profile & Settings': Profile,
    Friends: Friends,
  },
);

// stacks do not have headers
export default createSwitchNavigator(
  {
    SignIn: SignInScreen,
    Register: RegisterScreen,
    Drawer
  },
  {
    initialRouteName: 'SignIn',
  }
);

