import { useEffect, useState } from "react";
import {
	RouterProvider,
	createBrowserRouter,
	ScrollRestoration,
} from "react-router-dom";

// layout
import AppLayout from "components/layout/AppLayout";

// pages
import HomePage from "pages/HomePage";
import CharactersPage from "pages/CharactersPage";
import CharacterDetailsPage from "pages/CharacterDetailsPage";
import EpisodesPage from "pages/EpisodesPage";
import LocationsPage from "pages/LocationsPage";
import NotFoundPage from "pages/results/NotFoundPage";

// utils
import paths from "core/paths";

function App() {
	const router = createBrowserRouter([
		{
			path: paths.root,
			element: <AppLayout />,
			children: [
				{
					path: paths.root,
					element: <HomePage />,
				},
				{
					path: paths.wiki.characters.root,
					element: <CharactersPage />,
				},
				{
					path: paths.wiki.characters.details,
					element: <CharacterDetailsPage />,
				},
				{
					path: paths.wiki.episodes.root,
					element: <EpisodesPage />,
				},
				{
					path: paths.wiki.locations.root,
					element: <LocationsPage />,
				},
			],
		},
		{
			path: "*",
			element: <NotFoundPage />,
		},
	]);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
