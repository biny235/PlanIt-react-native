import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
// screens
import SignInScreen from '../screens/SignInScreen';
import DrawerNav from './DrawerNav';

/*** Principal navigation path ***
 * AuthSwitchNav -> DrawerNav -> MainStackNav -> MainModalkNav
 ***/

// drawer needs to wrap around any nav compoents that will open drawer
export default createSwitchNavigator(
  {
    SignIn: SignInScreen,
    Main: DrawerNav
  },
  {
    initialRouteName: 'SignIn',
  }
);
