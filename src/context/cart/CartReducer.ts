import { CartItemType } from "types/index";

export interface CartState {
	cart: CartItemType[];
}

export type CartAction =
	| { type: "ADD_TO_CART"; payload: CartItemType }
	| { type: "DELETE_CART_ITEM"; payload: string }
	| { type: "INCREASE"; payload: string }
	| { type: "DECREASE"; payload: string }
	| { type: "CLEAR" };

export const CartReducer = (
	state: CartState,
	action: CartAction
): CartState => {
	switch (action.type) {
		case "ADD_TO_CART":
			const existingCartItem = state.cart.find(
				(item) => item.id === action.payload.id
			);
			if (existingCartItem) {
				return {
					...state,
					cart: state.cart.map((item) =>
						item.id === action.payload.id
							? {
									...item,
									quantity: action.payload.quantity,
							  }
							: item
					),
				};
			} else {
				return {
					...state,
					cart: [...state.cart, { ...action.payload }],
				};
			}

		case "DELETE_CART_ITEM":
			const removeCartItem = () => {
				const indexToRemove = state.cart.findIndex(
					(item) => item.id === action.payload
				);
				const updatedCart = state.cart.filter(
					(_, index) => index !== indexToRemove
				);
				return updatedCart;
			};
			return { cart: removeCartItem() };

		case "INCREASE":
			return {
				...state,
				cart: state.cart.map((item) =>
					item.id === action.payload
						? { ...item, quantity: item.quantity + 1 }
						: item
				),
			};

		case "DECREASE":
			return {
				...state,
				cart: state.cart.map((item) =>
					item.id === action.payload
						? { ...item, quantity: Math.max(1, item.quantity - 1) }
						: item
				),
			};

		case "CLEAR":
			return {
				cart: [],
			};

		default:
			return state;
	}
};
