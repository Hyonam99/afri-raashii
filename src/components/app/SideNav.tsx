import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import Logo from "./Logo";

interface SideNavProps {
	isOpen: boolean;
	onClose: () => void;
}

const SideNav = (props: SideNavProps) => {
	const { isOpen, onClose } = props;

	return (
		<section
			className={`fixed top-0 left-0 h-full w-full transform ${
				isOpen ? "translate-x-0" : "-translate-x-full"
			} transition-transform duration-300`}
		>
			<div
				className={
					"relative z-10 h-full w-11/12 sm:w-3/5 p-7 bg-gray-800 text-white flex flex-col items-start gap-5"
				}
				onClick={onClose}
			>
				<div className="w-full flex items-center justify-between">
					<Logo />
					<RxCross2 size={24} color="#ffffff" onClick={onClose} />
				</div>
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
					Cart
				</NavLink>
			</div>

			{isOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 w-[100dvw]"
					onClick={onClose}
				></div>
			)}
		</section>
	);
};

export default SideNav;
