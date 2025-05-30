// This is very hacky. If we don't do this, logging in will cause an infinite loop.
import { Navigate } from "react-router-dom";

function LoginRedirect() {
  return <Navigate to="/dashboard" />;
}

export default LoginRedirect;
