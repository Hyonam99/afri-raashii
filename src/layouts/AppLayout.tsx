import { Outlet } from "react-router-dom";

const AppLayout = () => {
	return (
		<main className="max-w-[90dvw] mx-auto">
			<Outlet />
		</main>
	);
};

export default AppLayout;
