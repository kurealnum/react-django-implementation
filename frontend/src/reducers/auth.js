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
  NOT_LOGGED_IN,
  LOGGED_IN,
  IS_MODERATOR_TRUE,
  IS_ADMIN_TRUE,
  IS_SUPERUSER_TRUE,
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
    case NOT_LOGGED_IN:
      return {
        ...state,
        isAuthenticated: false,
      };
    case LOGIN_SUCCESS:
    case AUTHENTICATED_SUCCESS:
    case LOGGED_IN:
      return {
        ...state,
        isAuthenticated: true,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT_FAIL:
    case DELETE_USER_FAIL:
      return state;
    case IS_MODERATOR_TRUE:
      return { ...state, isMod: true };
    case IS_ADMIN_TRUE:
      return { ...state, isAdmin: true };
    case IS_SUPERUSER_TRUE:
      return { ...state, isSuperuser: true };
    default:
      return state;
  }
}

async function checkIfAuthenticatedOnServer() {
  const config = {
    headers: { "Content-Type": "application/json" },
    method: "GET",
    credentials: "include",
  };
  const request = await fetch("/api/accounts/is-authenticated/", config);
  if (request.ok) {
    checkAuthenticated(AUTHENTICATED_SUCCESS);
    return request.json();
  }
  checkAuthenticated(AUTHENTICATED_FAIL);
  return request.json();
}

export { authReducer, checkIfAuthenticatedOnServer };
