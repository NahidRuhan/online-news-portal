import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Error from "../pages/Error";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import NewsDetailsCard from "../components/NewsDetailsCard";

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
        Component: CategoryNews
      },
      {
        path: "/category/:id/:newsId",
        loader: () => fetch("/news.json"),
        Component: NewsDetailsCard
      },
    ]
  },
  {
    path: "/*",
    Component: Error
  }
]);