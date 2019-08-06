import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';

import AuthNavigation from './AuthNavigation';
import HomeScreen from '../features/Home';

/**
 * The main navigator or router for all the screens in the App
 */
const AppSwitchNavigator = createSwitchNavigator(
  { // Screens
    // SplashScreen: { screen: SplashScreen },
    Auth: { screen: AuthNavigation },
    Home: { screen: HomeScreen },
    // Tabs: { screen: Tabs },
  }, { // Default options
    initialRouteName: 'Auth',
  },
);

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;
