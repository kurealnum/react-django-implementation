import { checkAuthenticated } from "../features/authStore/authSlice";
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
    case REGISTER_SUCCESS:
    case AUTHENTICATED_FAIL:
    case LOGOUT_SUCCESS:
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
      };
    case LOGIN_SUCCESS:
    case AUTHENTICATED_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
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

async function checkIfAuthenticatedOnServer() {
  const request = await fetch("api/accounts/is-authenticated");
  if (request.ok) {
    checkAuthenticated(AUTHENTICATED_SUCCESS);
    return true;
  }
  checkAuthenticated(AUTHENTICATED_FAIL);
  return false;
}

export { authReducer, checkIfAuthenticatedOnServer };
