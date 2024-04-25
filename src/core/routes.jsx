import { createBrowserRouter } from "react-router-dom";

import AppLayout from "components/layout/AppLayout";
import HomePage from "pages/HomePage";

import paths from "./paths";

const routes = createBrowserRouter([
	{
		path: paths.root,
		element: <AppLayout />,
		children: [
			{
				path: paths.root,
				element: <HomePage />,
			},
		],
	},
]);
export default routes;
