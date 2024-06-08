import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { checkIfAuthenticatedOnServer } from "../reducers/auth";
import store from "../features/authStore/store";
import { useDispatch } from "react-redux";
import { checkAuthenticated } from "../features/authStore/authSlice";
import { LOGGED_IN, NOT_LOGGED_IN } from "../features/types";

function AuthenticatedRoute({ children }) {
  const dispatch = useDispatch();
  const [isBusy, setIsBusy] = useState(true);

  useEffect(() => {
    async function updateAuth() {
      const isAuthenticatedOnServer = checkIfAuthenticatedOnServer();
      isAuthenticatedOnServer.then((isAuth) => {
        if (isAuth) {
          dispatch(checkAuthenticated(LOGGED_IN));
        } else {
          dispatch(checkAuthenticated(NOT_LOGGED_IN));
        }
        setIsBusy(false);
      });
    }
    updateAuth();
  }, [dispatch, isBusy]);

  if (!isBusy) {
    const isAuth = store.getState().auth.isAuthenticated;

    if (isAuth) {
      return children;
    }

    return <Navigate to="/login" replace={true} />;
  }
  return <p>Loading</p>;
}

export default AuthenticatedRoute;
