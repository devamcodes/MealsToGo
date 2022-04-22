import { useRoutes } from "react-router-dom";
import Home from "../pages/Home.js";
import About from "../pages/About";
import Error404 from "../pages/errors/Error404.js";
import BasicLayout from "../components/BasicLayout.js";
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
					path: "about",
					element: <About />,
				},
			],
		},
		/* Note: This will create a new parent route for about. If you have multiple child routes for about then this will be used
    In our case we already have the parent route of about that is home so we don't need this
    {
		  path: "/about",
		  element: <About />,
		}, */
		{
			path: "*",
			element: <Error404 />,
		},
	]);
	return element;
}
