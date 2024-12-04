import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            path:"signup",
            element: <Signup></Signup>
        },
        {
          path: "login",
          element: <Login></Login>
        }
    ]
  },
]);

const Route = () => {
  return <RouterProvider router={router} />;
};

export default Route;
