import { useAuth } from "@context/auth/AuthContext";
import { Link, Navigate, Outlet } from "react-router-dom";

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
					<nav className="w-full h-[100px] p-11 flex items-center justify-start gap-7 border-b-[2px] border-mustard-orange mb-10">
						<Link to="/">
							<img
								className="w-[50px] h-auto"
								src="/static-images/logo.png"
								alt="Logo"
							/>
						</Link>
						<h3 className="font-light text-2xl capitalize">Dashboard</h3>
					</nav>
					<main className="min-h-[calc(100dvh-102px)] max-w-[90dvw] mx-auto">
						<Outlet />
					</main>
				</>
			)}
		</>
	);
};

export default AdminLayout;
