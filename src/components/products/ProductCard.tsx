import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

import Modal from "@components/app/Modal";
import AlertBar, { AlertBarStatusType } from "@components/app/Alertbar";
import CreateProductForm from "./CreateProduct";
import { APIStatusType, ProductType } from "types/index";
import { useDeleteProduct } from "@api/hooks";
import { currencyNumberFormat } from "@utils/helpers";

const ProductCard = (props: ProductType) => {
	const { productImage, name, price, category, id } = props;
	const [isOpen, setIsOpen] = useState(false);
	const [isDelete, setIsDelete] = useState(false);
	const [apiStatus, setApiStatus] = useState<APIStatusType | undefined>();

	const openEditModal = () => {
		setIsOpen(true);
	};
	const closeEditModal = () => {
		setIsOpen(false);
	};

	const openDeleteModal = () => {
		setIsDelete(true);
	};
	const closeDeleteModal = () => {
		setIsDelete(false);
	};

	const { deleteProduct, isLoading } = useDeleteProduct({
		id,
		onSuccess: () => {
			setApiStatus({
				status: "success",
				message: "Product deleted successfully",
			});
			closeDeleteModal();
		},
		onError: () => {
			setApiStatus({
				status: "error",
				message: "unable to delete product",
			});
		},
	});

	return (
		<div
			className="group w-full h-full flex flex-col justify-between gap-2 md:gap-0 relative [&>div>img]:hover:brightness-[.5]
			"
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

			<div className="relative w-full h-full overflow-clip">
				<img
					src={productImage}
					alt="product image"
					className="mb-2 relative w-full h-full object-cover object-center rounded-lg"
				/>
				<div className="absolute text-white top-0 w-full h-full flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
					<p className="text-center">{name}</p>
				</div>
			</div>

			<small className="text-[#fbf7cb] italic text-xs mt-1">{category}</small>

			<div className="flex items-center justify-between mb-[14px]">
				<p className="w-3/5 text-base md:text-lg font-light text-nowrap whitespace-nowrap text-ellipsis overflow-hidden">
					{name}
				</p>
				<div className="bg-purple-accent text-lg text-center text-white font-bold px-5 py-1 w-fit rounded-full flex items-center m-0">
					${currencyNumberFormat(price)}
				</div>
			</div>

			<button
				type="button"
				className="w-full flex items-center justify-between gap-2 border border-white border-solid px-7 py-3 text-xs font-normal"
			>
				ADD TO CART <FaPlus size={18} />
			</button>

			<div className="flex items-center justify-between">
				<button
					type="button"
					className="w-full flex items-center justify-between gap-2 border border-white border-solid px-7 py-3 text-xs font-normal"
					onClick={openEditModal}
				>
					Edit
				</button>

				<button
					type="button"
					className="w-full flex items-center justify-between gap-2 border border-white border-solid px-7 py-3 text-xs text-red-700 font-normal"
					onClick={openDeleteModal}
				>
					Delete
				</button>
			</div>

			<Modal isOpen={isOpen} onClose={closeEditModal} title="Edit product">
				<CreateProductForm
					initialData={props}
					onEditComplete={closeEditModal}
				/>
			</Modal>

			<Modal
				isOpen={isDelete}
				onClose={closeDeleteModal}
				title="Delete product"
			>
				<div className="text-black">
					<p className="mb-2">Are you sure you want to delete this product ?</p>
					<small>Product name: {name}</small>

					<div className="flex items-center justify-between mt-4">
						<button
							className="text-sm text-mustard-orange"
							onClick={closeDeleteModal}
						>
							Cancel
						</button>
						<button
							onClick={() => {
								deleteProduct();
							}}
							className="bg-red-700 text-white px-7 py-3 text-xs disabled:bg-red-500"
							disabled={isLoading}
						>
							{isLoading ? "Deleting" : "Delete"}
						</button>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default ProductCard;
