import { useNavigate } from "react-router-dom";
import { logout } from "../features/auth";
import { useEffect, useState } from "react";
import ErrorMessage from "../components/ErrorMessage";

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

  return (
    <ErrorMessage
      isError={isError}
      message={"There was an issue logging you out!"}
      altMessage={"Logging you out..."}
    />
  );
}

export default Logout;
