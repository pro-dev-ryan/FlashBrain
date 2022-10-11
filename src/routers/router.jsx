import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Home from "../components/Home";
import Layout from "../components/Layout";
import Quiz from "../components/Quiz";
import Statistics from "../components/Statistics";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Home />,
      },
      {
        path: "home/:id",
        loader: ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
        element: <Quiz />,
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
