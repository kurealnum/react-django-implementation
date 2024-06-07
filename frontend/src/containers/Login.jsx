import { useState } from "react";
import { login } from "../features/auth";

function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const onFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  function onFormSubmit(e) {
    e.preventDefault();
    login(formData);
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
