import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import MainLayOut from "../MainLayout/MainLayOut";
import PrivateRoute from "./PrivateRoute";
import AddMovies from "../Components/AddMovies";
import AllMovies from "../Pages/AllMovies";
import MoveDetails from "../Pages/MoveDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "/addMovies",
        element: (
          <PrivateRoute>
            <AddMovies></AddMovies>
          </PrivateRoute>
        ),
      },
      {
        path: "/allmovies",
        element: <AllMovies></AllMovies>,
        loader: () => fetch("https://orchid-server.vercel.app/movies"),
      },
      {
        path: '/details/:id',
        element: <PrivateRoute>
          <MoveDetails></MoveDetails>
        </PrivateRoute>,
        loader: ({params})=> fetch(`https://orchid-server.vercel.app/movies/${params.id}`)
      }
    ],
  },
]);

const Route = () => {
  return <RouterProvider router={router} />;
};

export default Route;
