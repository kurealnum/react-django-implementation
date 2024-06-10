import store from "../features/authStore/store";
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
} from "./types";
import { checkAuthenticated } from "./authStore/authSlice";
import getCookie from "./helpers";

async function login({ username, password }) {
  const config = {
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    method: "POST",
    body: JSON.stringify({ username, password }),
  };
  const response = await fetch("/api/accounts/login/", config);
  if (response.ok) {
    store.dispatch(checkAuthenticated(LOGIN_SUCCESS));
  } else {
    store.dispatch(checkAuthenticated(LOGIN_FAIL));
  }

  return store.getState().auth.isAuthenticated;
}

async function logout() {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": getCookie("csrftoken"),
    },
    credentials: "include",
    method: "POST",
  };

  const response = await fetch("/api/accounts/logout/", config);
  if (response.ok) {
    store.dispatch(checkAuthenticated(LOGOUT_SUCCESS));
  } else {
    store.dispatch(checkAuthenticated(LOGOUT_FAIL));
  }

  return store.getState().auth.isAuthenticated;
}

export { login, logout };
