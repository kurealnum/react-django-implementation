import { useState } from "react";
import "./styles/App.css";
import { apiDomain } from "./environmentVariables";

function App() {
  const [data, setData] = useState("");

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
    </>
  );
}

export default App;
