import Footer from "@components/footer/Footer";
import NavigationBar from "@components/nav-bar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
	return (
		<>
			<NavigationBar />
			<main className="min-h-[calc(100dvh-102px)]">
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default AppLayout;
