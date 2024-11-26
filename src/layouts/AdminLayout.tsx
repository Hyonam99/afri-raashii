import NavigationBar from "@components/nav-bar";
import { useAuth } from "@context/auth/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const AdminLayout = () => {
	const { currentUser } = useAuth();

	if (!currentUser) {
		return <Navigate to="/login" replace />;
	}

	if (currentUser.role !== "ADMIN") {
		return <Navigate to="/" replace />;
	}

	return (
		<>
			{currentUser && currentUser.role == "ADMIN" && (
				<>
					<NavigationBar />
					<header className="w-full h-[80px] py-2 px-12 flex items-center justify-start gap-7 border-b-[2px] border-mustard-orange mb-10">
						<h3 className="font-light text-2xl capitalize">Dashboard</h3>
					</header>
					<main className="min-h-[calc(100dvh-102px)] max-w-[90dvw] mx-auto">
						<Outlet />
					</main>
				</>
			)}
		</>
	);
};

export default AdminLayout;
