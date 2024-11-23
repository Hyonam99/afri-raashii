import { NavLink } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import Logo from "@components/app/Logo";
import SideNav from "@components/app/SideNav";
import { TiShoppingCart } from "react-icons/ti";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { useState } from "react";
import NotificationHeader from "@components/app/NotificationHeader";

const NavigationBar = () => {
	const [showSideNav, setShowSideNav] = useState(false)
	const onOpen = () => { setShowSideNav(true)}
	const closeSideNav = () => { setShowSideNav(false)}

	return (
		<nav className="bg-stone-accent/30 sticky pb-3 top-0 z-30">
			<NotificationHeader />
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
					
					<HiOutlineUserCircle size={22} />
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
