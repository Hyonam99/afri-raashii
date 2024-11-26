import { useAuth } from "@context/auth/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const GuardLayout = () => {
	const { currentUser } = useAuth();

	if (currentUser?.role == "ADMIN") {
		return <Navigate to="/admin" replace />;
	}

	return <Outlet />;
};

export default GuardLayout;
