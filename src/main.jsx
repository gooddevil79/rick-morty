import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "styles/index.css";
import { Toaster } from "react-hot-toast";
const client = new QueryClient({
	defaultOptions: { queries: { refetchOnWindowFocus: false, retry: 1 } },
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<QueryClientProvider client={client}>
		<ReactQueryDevtools initialIsOpen={false} />
		<Toaster position="top-center" />
		<App />
	</QueryClientProvider>
);
