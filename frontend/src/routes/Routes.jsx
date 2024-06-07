import { createBrowserRouter } from "react-router-dom";
import Login from "../containers/Login";
import AuthenticatedRoute from "./AuthenticatedRoutes";
import Dashboard from "../containers/Dashboard";

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
]);

export default router;
