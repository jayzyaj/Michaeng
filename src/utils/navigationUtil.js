/**
 * Import this module if you want to use react navigation outside of a react component
 * for more info visit this link: https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html
 */
import { NavigationActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

export default {
  navigate,
  setTopLevelNavigator,
};
