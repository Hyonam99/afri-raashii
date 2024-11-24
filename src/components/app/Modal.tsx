import { ReactNode } from "react";
import { RxCross2 } from "react-icons/rx";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
	title?: string;
};

const Modal = (props: ModalProps) => {
	const { isOpen, onClose, children, title } = props;
	if (!isOpen) return null;

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
			onClick={onClose}
		>
			<div
				className="relative w-full max-w-md p-4 bg-white rounded-lg shadow-md"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="flex items-center justify-between mb-3">
					{title && (
						<h2 className="text-lg font-semibold text-gray-800">
							{title}
						</h2>
                    )}
                    
					<button
						className="text-gray-600 hover:text-gray-900"
						onClick={onClose}
					>
						<RxCross2 />
					</button>
				</div>

				<div>{children}</div>
			</div>
		</div>
	);
};

export default Modal;
