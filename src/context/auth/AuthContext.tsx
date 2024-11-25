import {
	createContext,
	useReducer,
	ReactNode,
	useEffect,
	useContext,
} from "react";
import AuthReducer, { UserAction } from "./AuthReducer";
import { UserType } from "types/index";

interface AuthState {
	currentUser: UserType | null;
}

const INITIAL_STATE: AuthState = {
	currentUser:
		typeof window !== "undefined"
			? JSON.parse(localStorage.getItem("user") || "null")
			: null,
};

interface AuthContextProps {
	currentUser: UserType | null;
	dispatch: React.Dispatch<UserAction>;
}

export const AuthContext = createContext<AuthContextProps>({
	currentUser: null,
	dispatch: () => null,
});

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

	useEffect(() => {
		if (state.currentUser) {
			localStorage.setItem("user", JSON.stringify(state.currentUser));
		} else {
			localStorage.removeItem("user");
		}
	}, [state.currentUser]);

	return (
		<AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within a AuthContextProvider");
	}
	return context;
};
