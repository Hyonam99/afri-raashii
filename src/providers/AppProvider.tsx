import { ReactNode } from "react";
import { isAxiosError } from "axios";
import { QueryClientProvider } from "@tanstack/react-query";
import { DefaultOptions, QueryCache, QueryClient } from "@tanstack/react-query";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import { CartProvider } from "src/context/cart/CartContext";
import { AuthProvider } from "src/context/auth/AuthContext";

const queryConfig: DefaultOptions = {
	queries: {
		staleTime: 1000 * 60 * 5,
		retry: false,
	},
};

export const queryClient = new QueryClient({
	defaultOptions: queryConfig,
	queryCache: new QueryCache({
		onError: (error, query) => {
			if (query.state.data !== undefined && isAxiosError(error)) {
				console.error(`Something went wrong: ${error.message}`);
			}
		},
	}),
});

const AppProvider = ({ children }: { children: ReactNode }) => {
	const initialOptions = {
		clientId:
			"AYJk9-HijFOrRdPp8D63FkFqnO_WhPFrYwnfOkcdvSGFe3Elar3mvzN1revfBLLkEI12PwC0E1htcAmj",
		currency: "USD",
		intent: "capture"
	};

	return (
		<AuthProvider>
			<CartProvider>
				<QueryClientProvider client={queryClient}>
					<PayPalScriptProvider options={initialOptions}>
						{children}
					</PayPalScriptProvider>
				</QueryClientProvider>
			</CartProvider>
		</AuthProvider>
	);
};

export default AppProvider;
