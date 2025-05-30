import { createBrowserRouter } from "react-router-dom";
import Login from "../containers/Login";
import Page from "./Page.jsx";
import Dashboard from "../containers/Dashboard";
import Logout from "../containers/Logout";
import Register from "../containers/Register";
import LoginRedirect from "../containers/LoginRedirect.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <Page title="Login" type="public">
        <Login />
      </Page>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <Page title="Dashboard" type="private">
        <Dashboard />
      </Page>
    ),
  },
  {
    path: "/logout",
    element: (
      <Page title="Logout" type="private">
        <Logout />
      </Page>
    ),
  },
  {
    path: "/register",
    element: (
      <Page title="Register" type="public">
        <Register />
      </Page>
    ),
  },
  {
    path: "/login-redirect",
    element: <LoginRedirect />,
  },
]);

export default router;
