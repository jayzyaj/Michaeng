import { LoginTypes, LogoutTypes } from './AuthActions';

const initialState = {
  isAuth: false,
  isLoading: false,
  session: null,
  error: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LoginTypes.REQUEST:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case LoginTypes.SUCCESS:
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        session: action.session,
      };
    case LoginTypes.FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case LogoutTypes.REQUEST:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case LogoutTypes.SUCCESS:
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        session: null,
        error: '',
      };
    case LogoutTypes.FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case LoginTypes.RESET:
      return {
        ...state,
        error: '',
      };
    default:
      return state;
  }
};

export default authReducer;
