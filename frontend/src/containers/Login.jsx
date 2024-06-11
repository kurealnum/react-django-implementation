import { useState } from "react";
import { login } from "../features/auth";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";

function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const onFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  function onFormSubmit(e) {
    e.preventDefault();
    login(formData).then((isAuth) => {
      if (isAuth) {
        navigate("/dashboard");
      } else {
        setIsError(true);
      }
    });
  }

  return (
    <>
      <ErrorMessage
        isError={isError}
        message={"Username or password is incorrect"}
      />
      <form onSubmit={(e) => onFormSubmit(e)}>
        <input name="username" onChange={(e) => onFormChange(e)}></input>
        <input
          name="password"
          onChange={(e) => onFormChange(e)}
          type="password"
        ></input>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
