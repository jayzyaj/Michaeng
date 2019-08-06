import {
  // call,
  put,
  takeLatest,
  delay,
} from 'redux-saga/effects';

import navigationUtil from '../../utils/navigationUtil';
import { LoginTypes, LogoutTypes } from './AuthActions';

/**
 * Intercepts login request action / side effect that authenticates the user if email and password is correct otherwise display some error in the UI
 *
 * @param {object} action Function takes a action parameter that contains the properties below
 *
 * @property {object} payload Object that has the email and password property
 *
 * @property {string} email
 * @property {string} password
 *
 * @returns {object} Returns object that contains *actionType and *actionPayload that updates the redux store
 */
function* loginUser({ payload }) {
  yield delay(1500);
  const { email, password } = payload;
  try {
    if (email.trim() === 'test123@nomail.com' && password === '123456') { // If success
      const data = { token: 'abc1234', email, username: 'test123' }; // Create a fake token for authentication
      yield put({ type: LoginTypes.SUCCESS, data });
      navigationUtil.navigate('Tabs'); // Navigate to the Main Screen
    } else {
      yield put({ type: LoginTypes.FAILURE, error: 'Incorrect email or password' });
      yield delay(10000);
      yield put({ type: LoginTypes.RESET });
      // yield put({ type: authActionTypes.CLEAR_ERROR });
    }
  } catch (error) { // If something goes wrong
    yield put({ type: LoginTypes.FAILURE, error: error.response.message || 'Something went wrong' });
    yield delay(10000);
    yield put({ type: LoginTypes.RESET });
    // yield put({ type: authActionTypes.CLEAR_ERROR });
  }
}

/**
 * Intercepts logout request action / side effect with no params required
 *
 * @returns {object} Returns object that contains *actionType and actionPayload  that updates the redux store
 */
function* logoutUser() {
  try {
    yield delay(1500);
    navigationUtil.navigate('Login');
    yield put({ type: LoginTypes.SUCCESS });
  } catch (error) {
    yield put({ type: LogoutTypes.FAILURE, error: error.response.message || 'Something went wrong' });
  }
}

const AuthSaga = [
  takeLatest(LoginTypes.REQUEST, loginUser), // Requires a parameter email and password in your component dispatch method
  takeLatest(LogoutTypes.REQUEST, logoutUser), // No params required
];

export default AuthSaga;
