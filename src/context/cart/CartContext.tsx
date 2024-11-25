import React, {
	createContext,
	useReducer,
	useContext,
	useEffect,
	ReactNode,
} from "react";
import { CartAction, CartReducer, CartState } from "./CartReducer";

interface ContextProviderProps {
	children: ReactNode;
}

interface CartContextProps {
	state: CartState;
	dispatch: React.Dispatch<CartAction>;
}

const initialState: CartState = {
	cart: JSON.parse(localStorage.getItem("cart") ?? "[]") ?? [],
};

const CartContext = createContext<CartContextProps>({
	state: initialState,
	dispatch: () => null,
});

export const CartProvider = ({ children }: ContextProviderProps) => {
	const [state, dispatch] = useReducer(CartReducer, initialState);

	useEffect(() => {
		state.cart = JSON.parse(localStorage.getItem("cart") ?? "[]");
	}, []);

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(state.cart));
	}, [state.cart]);

	return (
		<CartContext.Provider value={{ state, dispatch }}>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
};
