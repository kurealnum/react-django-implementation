import { useState } from "react";
import "./styles/App.css";
import { apiDomain } from "./environmentVariables";
import { useSelector, useDispatch } from "react-redux";
import { set } from "./features/authStore/authSlice";

function App() {
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.value);

  function testRequest() {
    const fetchcall = fetch(apiDomain + "/accounts/manage-account/");
    fetchcall
      .then((value) => value.json())
      .then((value) => setData(value["mydata"]));
    console.log(data);
  }

  return (
    <>
      <button onClick={testRequest}>Click me!</button>
      <button onClick={() => dispatch(set("ABC"))}>
        Change Value of CSRF Token
      </button>
      <p>{token}</p>
    </>
  );
}

export default App;
