import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "styles/index.css";
const client = new QueryClient({});

ReactDOM.createRoot(document.getElementById("root")).render(
	<QueryClientProvider client={client}>
		{/* <ReactQueryDevtools initialIsOpen={false} /> */}
		<App />
	</QueryClientProvider>
);
