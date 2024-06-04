import { useState } from "react";
import "./styles/App.css";
import { login } from "./features/auth";
import { useSelector } from "react-redux";

function App() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const onFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

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
      <span>{isAuthenticated}</span>
    </>
  );
}

export default App;
