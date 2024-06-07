import { useState } from "react";
import { login } from "../features/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const onFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  function onFormSubmit(e) {
    e.preventDefault();
    login(formData).then(() => {
      if (!isAuthenticated) {
        navigate("/dashboard");
      }
    });
  }

  return (
    <>
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
