import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Error from "../pages/Error";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import NewsDetailsCard from "../components/NewsDetailsCard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import DetailsLayout from "../layouts/DetailsLayout";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../components/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/category/:id",
        loader: () => fetch("/news.json"),
        Component: CategoryNews,
        hydrateFallbackElement: <Loading></Loading>
      }
    ]
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
        {
            path: "login",
            Component: Login
        },
        {
            path: "register",
            Component: Register
        }
    ]
  },
  {
    path: "/*",
    Component: Error
  },
  {
    path: "/category/:id/:newsId",
    loader: () => fetch("/news.json"),
    element: <PrivateRoute><DetailsLayout></DetailsLayout></PrivateRoute>,
    hydrateFallbackElement: <Loading></Loading>
  },
]);