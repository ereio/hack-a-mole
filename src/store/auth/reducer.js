import * as types from './actions';

import initialState from './state';

export default function auth(state = initialState(), action = {}) {
  // TODO: for debugging
  // console.log(action.type, action, state);
  switch (action.type) {
    case types.CREATE_USER:
    case types.CHECK_EMAIL_AVAILABLE_ATTEMPT:
    case types.CHECK_USER_AVAILABLE_ATTEMPT:
      return {
        ...state,
        loading: true,
      };
    case types.SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case types.SET_AUTH_USER:
      return {
        ...state,
        user: action.user,
        authenticated: action.authenticated,
        loading: false,
        errors: [],
      };

    case types.CREATE_USER_SUCCESS:
      return {
        ...state,
        authenticated: true,
        loading: false,
      };
    case types.CREATE_USER_FAILURE: {
      return {
        ...state,
        loading: false,
        errors: [action.error],
      };
    }
    case types.CHECK_EMAIL_AVAILABLE_SUCCESS:
      return {
        ...state,
        emailAvailable: action.available,
        loading: false,
      };
    case types.CHECK_EMAIL_AVAILABLE_FAILURE: {
      return {
        ...state,
        emailAvailable: false,
        loading: false,
        errors: [action.error],
      };
    }
    case types.CHECK_USER_AVAILABLE_SUCCESS:
      return {
        ...state,
        usernameAvailable: action.available,
        loading: false,
      };
    case types.CHECK_USER_AVAILABLE_FAILURE: {
      return {
        ...state,
        usernameAvailable: false,
        loading: false,
        errors: [action.error],
      };
    }
    default:
      return state;
  }
}
