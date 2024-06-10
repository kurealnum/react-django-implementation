import { useNavigate } from "react-router-dom";
import { logout } from "../features/auth";
import { useEffect, useState } from "react";

function Logout() {
  const isLoggedOut = logout();
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedOut.then((isSuccessfull) => {
      // if isSuccessfull is false, the user is logged out
      if (!isSuccessfull) {
        navigate("/login");
      } else {
        setIsError(true);
      }
    });
  }, [isLoggedOut, navigate]);

  return isError ? (
    <p>There was an issue logging you out!</p>
  ) : (
    <p>Logging you out...</p>
  );
}

export default Logout;
