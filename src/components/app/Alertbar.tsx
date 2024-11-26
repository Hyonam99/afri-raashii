import { useEffect } from "react";
import { ToastContainer, toast, ToastOptions, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type AlertBarStatusType =
	| "success"
	| "error"
	| "info"
	| "warning"
    | "default";
    
interface AlertBarProps {
	message: string;
	status: AlertBarStatusType;
	isOpen: boolean;
	timeOut?: number
	onCloseComplete: () => void
}

export const AlertBar = (props: AlertBarProps) => {
	const { message, status, isOpen, timeOut, onCloseComplete } = props;
	useEffect(() => {
		if (isOpen) {
			const options: ToastOptions = {
				position: "top-center",
				autoClose: timeOut || 4000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: false,
				progress: undefined,
				theme: "colored",
				transition: Slide,
				onClose: onCloseComplete,
			};

			switch (status) {
				case "success":
					toast.success(message, options);
					break;
				case "error":
					toast.error(message, options);
					break;
				default:
					toast(message, options);
			}
		}
	}, [isOpen]);

	return <ToastContainer />;
};

export default AlertBar;
