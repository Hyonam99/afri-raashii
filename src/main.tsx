import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import AppLayout from "@layouts/AppLayout.tsx";
import CartPage from "@pages/CartPage.tsx";
import ProductsPage from "@pages/ProductsPage.tsx";
import PageNotFound from "@pages/PageNotFound.tsx";

import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <PageNotFound />,
		children: [
			{
				index: true,
				element: <App />,
			},
			{
				path: "cart",
				element: <CartPage />,
			},
			{
				path: "products",
				element: <ProductsPage />,
			},
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
