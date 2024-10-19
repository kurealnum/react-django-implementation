import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../features/helpers";

function Register() {
  const [formData, setFormData] = useState();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const setNewUserDataHelper = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  function onFormSubmit(e) {
    e.preventDefault();
    if (register["language"] != undefined) {
      throw Error;
    }
    register(formData).then((isAuth) => {
      if (isAuth) {
        navigate("/login");
      }
    });
  }

  return (
    <div id="register" className="custom-form">
      <h1 data-testid="register">Register</h1>
      <form onSubmit={(e) => onFormSubmit(e)} aria-label="Register">
        <div className="item">
          <label htmlFor="username">Username</label>
          <input
            name="username"
            id="username"
            onChange={(e) => setNewUserDataHelper(e)}
            maxLength={150}
          ></input>
        </div>
        <div className="item">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            onChange={(e) => setNewUserDataHelper(e)}
            maxLength={200}
          ></input>
        </div>
        <div className="item">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type={isVisible ? "text" : "password"}
            onChange={(e) => setNewUserDataHelper(e)}
            maxLength={128}
          ></input>
        </div>
        <button data-testid="save" id="save" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
