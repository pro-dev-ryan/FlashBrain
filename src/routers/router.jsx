import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Home from "../components/Home";
import Layout from "../components/Layout";
import Statistics from "../components/Statistics";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "stats",
        element: <Statistics />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);

export default router;
