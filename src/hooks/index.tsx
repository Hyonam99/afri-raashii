import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@context/auth/AuthContext";
import { MutationOptionsType, UserType } from "types/index";

export const useLogin = (options: MutationOptionsType) => {
    const { dispatch } = useAuth();
    const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const onSuccess = () => {
		options.onSuccess && options.onSuccess("Login Successful");
	};

	const loginUser = (values: UserType) => {
		dispatch({
			type: "LOGIN",
			payload: {
				...values,
				role: values.email === "raashiadmin@gmail.com" ? "ADMIN" : "USER",
			},
		});
		setTimeout(() => {
			setIsLoading(false);
			onSuccess();
			navigate("/");
		}, 1000);
	};

	return {
		loginUser,
		isLoading,
	};
};

export const useLogOut = (options: MutationOptionsType) => {
	const { dispatch } = useAuth();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const onSuccess = () => {
		options.onSuccess && options.onSuccess("Logout Successful");
	};

	const logoutUser = () => {
		dispatch({
			type: "LOGOUT",
		});
		setTimeout(() => {
			setIsLoading(false);
            onSuccess();
            navigate("/");
		}, 2000);
	};

	return {
		logoutUser,
		isLoading,
	};
};
