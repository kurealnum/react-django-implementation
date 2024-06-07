import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { checkIfAuthenticatedOnServer } from "../reducers/auth";

function AuthenticatedRoute({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
    const isAuthenticatedOnServer = checkIfAuthenticatedOnServer();
    isAuthenticatedOnServer.then((isAuth) => {
      if (!isAuth) {
        navigate("/login");
      }
    });
  });
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated) {
    return children;
  }

  return <Navigate to="/login" replace={true} />;
}

export default AuthenticatedRoute;
