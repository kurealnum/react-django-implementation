import { useState } from "react";
import "./styles/App.css";
import { useSelector, useDispatch } from "react-redux";
import { set_csrf } from "./features/authStore/authSlice";
import { login } from "./features/auth";

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.value);

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

export default App;
