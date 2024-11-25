import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

import Logo from "./Logo";
import AlertBar, { AlertBarStatusType } from "./Alertbar";
import { useAuth } from "@context/auth/AuthContext";
import { useLogOut } from "@hooks/index";
import { APIStatusType } from "types/index";

interface SideNavProps {
	isOpen: boolean;
	onClose: () => void;
}

const SideNav = (props: SideNavProps) => {
	const { isOpen, onClose } = props;
	const { currentUser } = useAuth();
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

	return (
		<section
			className={`fixed top-0 left-0 h-[100vh] w-full transform ${
				isOpen ? "translate-x-0" : "-translate-x-full"
			} transition-transform duration-300`}
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
			<div
				className={
					"relative z-10 h-[100vh] w-11/12 sm:w-3/5 p-7 bg-gray-800 text-white flex flex-col items-start gap-5"
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

				{currentUser && (
					<button
						onClick={logoutUser}
						className="flex items-center gap-2 text-red-500"
					>
						Logout
					</button>
				)}
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
