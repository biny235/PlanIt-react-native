import React from 'react';
//screens
import MapScreen from '../screens/MapScreen';
import PlanDetailsScreen from '../screens/PlanDetailsScreen';
import SuggestionsScreen from '../screens/SuggestionsScreen';
import SuggestionDetailsScreen from '../screens/SuggestionDetailsScreen';
// navigators
import { createStackNavigator } from 'react-navigation';
// TabNavigator is not used, because the bottom nav is fake. The items on the sides open modal windows.

const MainModalNav = createStackNavigator(
  {
    Map: MapScreen,
    PlanDetails: PlanDetailsScreen,
    Suggestions: SuggestionsScreen,
    SuggestionDetails: SuggestionDetailsScreen,
  },
  {
    mode: 'modal',
    navigationOptions: () => ({
      header: null
    })
  }
);

export default MainModalNav;
