import { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { DefaultOptions, QueryCache, QueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";
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
	
	return (
		<AuthProvider>
			<CartProvider>
				<QueryClientProvider client={queryClient}>
					{children}
				</QueryClientProvider>
			</CartProvider>
		</AuthProvider>
	);
};

export default AppProvider;
