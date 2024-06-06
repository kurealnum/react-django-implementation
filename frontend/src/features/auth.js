import store from "../features/authStore/store";
import { LOGIN_FAIL, LOGIN_SUCCESS } from "./types";
import { checkAuthenticated } from "./authStore/authSlice";

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
}

export { login };
