import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import CartPage from "@pages/CartPage.tsx";
import ProductsPage from "@pages/ProductsPage.tsx";
import PageNotFound from "@pages/PageNotFound.tsx";
import AdminPage from "@pages/AdminPage.tsx";
import LoginPage from "@pages/auth/LoginPage.tsx";

import AppLayout from "@layouts/AppLayout.tsx";
import AdminLayout from "@layouts/AdminLayout.tsx";
import AppProvider from "@providers/AppProvider.tsx";

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
				path: "login",
				element: <LoginPage />,
			},
			{
				path: "cart",
				element: <CartPage />,
			},
			{
				path: "products",
				element: <ProductsPage />,
			},
			{
				path: "admin",
				element: <ProductsPage />,
			},
		],
	},
	{
		path: "/admin",
		element: <AdminLayout />,
		errorElement: <PageNotFound />,
		children: [
			{
				index: true,
				element: <AdminPage />,
			},
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<AppProvider>
			<RouterProvider router={router} />
		</AppProvider>
	</StrictMode>
);
