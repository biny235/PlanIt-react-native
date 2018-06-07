import React from 'react';

//screens
import MapScreen from '../screens/MapScreen';
import FriendsPlansScreen from '../screens/FriendsPlansScreen';
import PlanDetailsScreen from '../screens/PlanDetailsScreen';
import SuggestionsScreen from '../screens/SuggestionsScreen';

// navigators
import { createStackNavigator } from 'react-navigation';
// TabNavigator is not used, because the bottom nav is fake. The items on the sides open modal windows.

// stack for main/map items
// removed header to use tab header below
const MainStackNav = createStackNavigator(
  {
    Map: MapScreen,
    PlanDetails: PlanDetailsScreen,
    Suggestions: SuggestionsScreen,
    FriendsPlans: FriendsPlansScreen,
  },
  {
    mode: 'modal',
    navigationOptions: () => ({
      header: null
    })
  }
);

export default MainStackNav;
