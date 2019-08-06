/* eslint-disable no-param-reassign */
import { combineReducers } from 'redux';

import AuthReducer from '../features/Auth/AuthReducer';

import { LogoutTypes } from '../features/Auth/AuthActions';

const RootReducer = combineReducers({
  auth: AuthReducer,
});

const AppReducer = (state, action) => {
  if (action.type === LogoutTypes.SUCCESS) state = undefined;
  return RootReducer(state, action);
};

export default AppReducer;
