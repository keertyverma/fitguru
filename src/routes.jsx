import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "exercise/:id",
        element: <ExerciseDetail />,
      },
    ],
  },
]);

export default router;
