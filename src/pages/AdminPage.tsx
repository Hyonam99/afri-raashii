import { useState } from "react";

import { useGetAllProducts } from "@api/hooks";

import Modal from "@components/app/Modal";
import CreateProductForm from "@components/products/CreateProduct";
import ProductCard from "@components/products/ProductCard";

import { ProductType } from "types/index";

const AdminPage = () => {
	const [isOpen, setIsOpen] = useState(false);
	const openModal = () => {
		setIsOpen(true);
	};
	const closeModal = () => {
		setIsOpen(false);
	};

	const { data, isError, isLoading } = useGetAllProducts();

	return (
		<section>
			<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-7">
				<h2>Admin Products</h2>
				<button
					className="w-fit bg-mustard-orange text-white px-4 py-2 rounded-lg flex items-center justify-between gap-1"
					onClick={openModal}
				>
					Create Product
				</button>
			</div>

			<div>
				{isLoading ? (
					<p>Loading...</p>
				) : isError ? (
					<p>Error loading products</p>
				) : null}
			</div>

			{!isLoading && !isError && data && (
				<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 sm:gap-4 sm:gap-y-10 mt-5 mb-8 md:mb-24">
					{data.map((product: ProductType) => (
						<ProductCard key={product.id} {...product} />
					))}
				</div>
			)}

			<Modal isOpen={isOpen} onClose={closeModal} title="Add new product">
				<CreateProductForm />
			</Modal>
		</section>
	);
};

export default AdminPage;
