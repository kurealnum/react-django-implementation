import { createBrowserRouter } from "react-router-dom";
import Login from "../containers/Login";
import AuthenticatedRoute from "./AuthenticatedRoutes";
import Dashboard from "../containers/Dashboard";
import Logout from "../containers/Logout";
import Register from "../containers/Register";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <AuthenticatedRoute>
        <Dashboard />
      </AuthenticatedRoute>
    ),
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

export default router;
