import React from 'react';

//screens
import MapScreen from '../screens/MapScreen';
import PlanDetailsScreen from '../screens/PlanDetailsScreen';
import SuggestionsScreen from '../screens/SuggestionsScreen';

// navigators
import { createStackNavigator } from 'react-navigation';
// TabNavigator is not used, because the bottom nav is fake. The items on the sides open modal windows.

// removed header to use tab header below
// stack for main/map items
const MainModalkNav = createStackNavigator(
  {
    Map: MapScreen,
    PlanDetails: PlanDetailsScreen,
    Suggestions: SuggestionsScreen,
  },
  {
    mode: 'modal',
    navigationOptions: () => ({
      header: null
    })
  }
);

export default MainModalkNav;
