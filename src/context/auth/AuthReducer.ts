import { UserType } from "types/index";

export type UserAction =
	| { type: "LOGIN"; payload: UserType }
	| { type: "LOGOUT" };

const AuthReducer = (state: any, action: UserAction) => {
	switch (action.type) {
		case "LOGIN": {
			return {
				currentUser: action.payload,
			};
		}
		case "LOGOUT": {
			return {
				currentUser: null,
			};
		}

		default:
			return state;
	}
};

export default AuthReducer;
