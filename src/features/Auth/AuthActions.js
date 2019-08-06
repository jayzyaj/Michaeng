import createRequestTypes from '../../utils/actionTypeCreator';

const LoginTypes = createRequestTypes('LOGIN');
const LogoutTypes = createRequestTypes('LOGOUT');

export const login = (email, password) => ({
  type: LoginTypes.REQUEST,
  payload: {
    email,
    password,
  },
});

export const logout = params => ({
  type: LoginTypes.RESET,
  params,
});

export {
  LoginTypes,
  LogoutTypes,
};
