import { NavLink } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import Logo from "@components/app/Logo";
import SideNav from "@components/app/SideNav";
import { TiShoppingCart } from "react-icons/ti";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { useState } from "react";
import NotificationHeader from "@components/app/NotificationHeader";
import { useAuth } from "@context/auth/AuthContext";
import { useLogOut } from "@hooks/index";
import { APIStatusType } from "types/index";
import AlertBar, { AlertBarStatusType } from "@components/app/Alertbar";

const NavigationBar = () => {
	const { currentUser } = useAuth()
	

	const [showSideNav, setShowSideNav] = useState(false)
	const [apiStatus, setApiStatus] = useState<APIStatusType | undefined>();

	const { logoutUser } = useLogOut({
		onSuccess: (data) => {
			setApiStatus({
				status: "success",
				message: data,
			});
		},
		onError: () => {
			setApiStatus({
				status: "success",
				message: "Unable to logout",
			});
		},
	});

	const onOpen = () => { setShowSideNav(true)}
	const closeSideNav = () => { setShowSideNav(false)}

	return (
		<nav
			className={`bg-stone-accent/30 sticky pb-3 ${
				currentUser ? "pt-3" : ""
			} top-0 z-30`}
		>
			
			{apiStatus !== undefined && (
				<AlertBar
					isOpen={apiStatus !== undefined}
					status={apiStatus?.status as AlertBarStatusType}
					message={apiStatus?.message || ""}
					onCloseComplete={() => {
						setApiStatus(undefined);
					}}
				/>
			)}

			{!currentUser && <NotificationHeader />}

			<div className="flex items-center justify-between max-w-[90dvw] m-auto">
				<Logo />
				<section className="hidden md:flex items-center justify-between gap-5">
					<NavLink
						to={"/"}
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Home
					</NavLink>
					<NavLink
						to={"products"}
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Products
					</NavLink>
					<NavLink
						to={"cart"}
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						<TiShoppingCart size={22} />
					</NavLink>

					{currentUser && (
						<button onClick={logoutUser} className="flex items-center gap-2">
							<HiOutlineUserCircle size={22} />{" "}
							<span className="text-red-500">Logout</span>
						</button>
					)}
				</section>

				<button onClick={onOpen} className="block md:hidden">
					<IoIosMenu size={24} />
				</button>

				<SideNav onClose={closeSideNav} isOpen={showSideNav} />
			</div>
		</nav>
	);
};

export default NavigationBar;
