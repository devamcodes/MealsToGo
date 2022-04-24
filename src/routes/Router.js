import { useRoutes } from "react-router-dom";
import Home from "../pages/Home.js";
import About from "../pages/About";
import Error404 from "../pages/errors/Error404.js";
import BasicLayout from "../components/layouts/BasicLayout.js";
export default function Router() {
  let element = useRoutes([
    {
      path: "/",
      element: <BasicLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "*",
          element: <Error404 />,
        },
      ],
    },
  ]);
  return element;
}
