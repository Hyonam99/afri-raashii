
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
	return (
		<>
			<main className="min-h-[calc(100dvh-102px)]">
				<Outlet />
			</main>
		</>
	);
};

export default AdminLayout;
