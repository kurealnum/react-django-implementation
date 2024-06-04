import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
} from "../features/types";

const initialState = {
  isAuthenticated: false,
};

function authReducer(state = initialState, action) {
  switch (action.payload) {
    case AUTHENTICATED_SUCCESS:
    case AUTHENTICATED_FAIL:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case LOGOUT_SUCCESS:
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT_FAIL:
    case DELETE_USER_FAIL:
      return state;
    default:
      return state;
  }
}

export { authReducer };
