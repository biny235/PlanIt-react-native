// 'use strict'
// import React from 'react';
// import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
// import { Main, Auth, Chat, UserHome } from './components';
// import { View, Button, Image } from 'react-native';
// import { Icon } from 'react-native-elements';

// const Stack = {
//   Main: {
//     screen: Main,
//     navigationOptions: {
//       tabBarLabel: 'Main',
//       tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
//     },
//   },
//   Chat: {
//     screen: Chat,
//     navigationOptions: {
//       tabBarLabel: 'Chat',
//       tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
//     },
//   },
//   Auth: {
//     screen: Auth,
//     navigationOptions: {
//       tabBarLabel: 'Auth',
//       tabBarIcon: ({ tintColor }) => <Icon name="account_circle" size={35} color={tintColor} />
//     },
//   },
//   Profile: {
//     screen: Profile,
//     navigationOptions: {
//       tabBarLabel: 'Profile',
//       tabBarIcon: ({ tintColor }) => <Icon name="info" size={35} color={tintColor} />
//     },
//   },
// }

// let loggedIn = true

// const DrawerUserRoutes = {
//   Main: {
//     screen: StackNavigator(Stack, { initialRouteName: 'Main' }),
//     navigationOptions: {
//       drawerLabel: 'Map',
//       header: null,
//     }
//   },
//   Profile: {
//     screen: StackNavigator(Stack, { initialRouteName: 'Profile' }),
//     navigationOptions: {
//       drawerLabel: 'Profile',
//       header: null,
//     }
//   },
// }

// const DrawerGuestRoutes = {
//   Login: {
//     screen: StackNavigator(Stack, { initialRouteName: 'Main' }),
//     navigationOptions: {
//       drawerLabel: 'Login',
//       header: null
//     }
//   },
//   Signup: {
//     screen: StackNavigator(Stack, { initialRouteName: 'Main' }),
//     navigationOptions: {
//       drawerLabel: 'Signup',
//       header: null
//     }
//   },
// }

// const styles = {
//   header: {
//     justifyContent: 'center',
//     backgroundColor: '#2C2C54',
//     height: 240,
//     alignItems: 'center',
//   },
//   logo: {
//     width: '90%',
//     height: '90%',
//     justifyContent: 'center',
//   },
// }

// const DrawerContent = (props) => (
//   <View
//     style={{
//       flex: 1,
//     }}>
//     <View style={styles.header}>
//       <Image
//         style={styles.logo}
//         source={require('./assets/icons/app-icon-transparent.png')}
//       />
//     </View>
//     <DrawerItems {...props}
//       activeTintColor='#706fd3'
//       inactiveTintColor='#40407a'
//     />
//   </View>
// )

// let DrawerRoutes = loggedIn ? DrawerUserRoutes : DrawerGuestRoutes

// const RootNavigator = StackNavigator({
//   Drawer: {
//     name: 'Drawer',
//     screen: DrawerNavigator(DrawerRoutes,
//       {
//         contentComponent: DrawerContent,
//       }),
//   },
//   ...Stack
// },
//   {
//     headerMode: 'none'
//   }
// )

// export default RootNavigator
