// This is essentially a wrapper for controlling access and setting titles. See more below.
// Notes:
// For sake of security, the default type is "admin"
//
// Warning: public-only does not work with 'login'. FIXME in the future, perhaps?
import { Suspense, useEffect, useState } from "react";
import { checkIfAuthenticatedOnServer } from "../reducers/auth";
import { useDispatch } from "react-redux";
import { checkAuthenticated } from "../features/authStore/authSlice";
import {
  IS_MODERATOR_TRUE,
  LOGGED_IN,
  NOT_LOGGED_IN,
  IS_ADMIN_TRUE,
  IS_SUPERUSER_TRUE,
} from "../features/types";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import {
  isAdmin,
  isAuthenticated,
  isMod,
  isSuperuser,
} from "../features/helpers";

// Change the following as needed
// The first part of the title. If the user navigated to the login page, the title of the page would be "My Webpage Login" (assuming the title of the login page was "Login")
const header = "My Webpage";

// The location the user will be redirected to if they try to access a page that is only intended for non-authenticated users as an authenticated user.
const publicOnlyAuthPath = "/dashboard";

// The location the user will be redirected to if they attempt to access a page as an unauthenticated user.
const publicNoAuthPath = "/";

function Page({ children, title = "", type = "admin" }) {
  const dispatch = useDispatch();
  const [isBusy, setIsBusy] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Redirect to slash if route doesn't end with slash
    const path = location.pathname;
    const pathLen = location.pathname.length;
    if (location.pathname[pathLen - 1] !== "/") {
      navigate(path + "/", { replace: true });
    }

    document.title = header + title || "";
    async function updateAuth() {
      const isAuthenticatedOnServer = checkIfAuthenticatedOnServer();
      isAuthenticatedOnServer.then((authData) => {
        if (authData["is_authenticated"] === true) {
          dispatch(checkAuthenticated(LOGGED_IN));
          if (authData["is_mod"]) {
            dispatch(checkAuthenticated(IS_MODERATOR_TRUE));
          }
          if (authData["is_admin"]) {
            dispatch(checkAuthenticated(IS_ADMIN_TRUE));
          }
          if (authData["is_superuser"]) {
            dispatch(checkAuthenticated(IS_SUPERUSER_TRUE));
          }
        } else {
          dispatch(checkAuthenticated(NOT_LOGGED_IN));
        }
        setIsBusy(false);
      });
    }
    updateAuth();
  }, [dispatch, location.pathname, navigate, title]);

  if (isBusy) {
    return <p>Loading</p>;
  }

  if (
    type === "public" ||
    (type === "private" && isAuthenticated()) ||
    (type === "moderator" && isMod()) ||
    (type === "admin" && isAdmin()) ||
    (type === "superuser" && isSuperuser())
  ) {
    return <Suspense fallback={<p>Loading</p>}>{children}</Suspense>;
  } else if (type == "public-only" && isAuthenticated()) {
    return <Navigate to={publicOnlyAuthPath} />;
  } else {
    return <Navigate to={publicNoAuthPath} />;
  }
}

export default Page;
