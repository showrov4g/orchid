import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import MainLayOut from "../MainLayout/MainLayOut";
import PrivateRoute from "./PrivateRoute";
import AddMovies from "../Components/AddMovies";
import AllMovies from "../Pages/AllMovies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
        {
            path:"signup",
            element: <Signup></Signup>
        },
        {
          path: "login",
          element: <Login></Login>
        },
        {
          path:"/addMovies",
          element: <PrivateRoute>
            <AddMovies></AddMovies>
          </PrivateRoute>
        },
        {
          path: "/allmovies",
          element: <AllMovies></AllMovies>,
          loader: ()=> fetch("http://localhost:5000/movies")
        }
    ]
  },
]);

const Route = () => {
  return <RouterProvider router={router} />;
};

export default Route;
