import { all } from 'redux-saga/effects';
import AuthSaga from '../features/Auth/AuthSaga';

/**
 * Intercepts all middleware as root saga for the whole app
 */
export default function* rootSaga() {
  yield all([
    ...AuthSaga,
  ]);
}
