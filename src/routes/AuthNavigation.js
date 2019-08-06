import { createStackNavigator } from 'react-navigation';

import {
  Login as LoginScreen,
  Signup as SignupScreen,
} from '../features/Auth';

import { COLORS, SIZES } from '../constants/themes';

/**
 * Screens for unauthenticated user or user that doen not have a token or existing session
 */
const AuthNavigation = createStackNavigator(
  { // Screens
    LoginScreen,
    SignupScreen,
  }, {
    initialRouteName: 'LoginScreen',
    defaultNavigationOptions: {
      headerStyle: {
        height: SIZES.base * 4,
        backgroundColor: COLORS.white, // or 'white
        borderBottomColor: 'transparent',
        elevation: 0, // for android
      },
      // headerBackImage: <Image source={require('../assets/icons/back.png')} />,
      headerBackTitle: null,
      headerLeftContainerStyle: {
        // alignItems: 'center',
        marginLeft: SIZES.base / 2,
        // paddingRight: SIZES.base,
      },
      headerRightContainerStyle: {
        // alignItems: 'center',
        // paddingRight: SIZES.base,
      },
    },
  },
);

export default AuthNavigation;
