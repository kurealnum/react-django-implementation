import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function AuthenticatedRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated);

  if (isAuthenticated) {
    return children;
  }

  return <Navigate to="/login" />;
}

export default AuthenticatedRoute;
