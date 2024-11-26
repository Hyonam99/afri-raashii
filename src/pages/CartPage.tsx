import { useState } from "react";
import { Link } from "react-router-dom";

import Modal from "@components/app/Modal";
import PayPalCard from "@components/app/PaypalCard";
import CartItem, { CartItemMobile } from "@components/cart/CartRow";

import { useCart } from "@context/cart/CartContext";
import AlertBar, { AlertBarStatusType } from "@components/app/Alertbar";
import { APIStatusType } from "types/index";

const Cartpage = () => {
	const { state } = useCart();
	const [showModal, setShowModal] = useState(false)
	const [apiStatus, setApiStatus] = useState<APIStatusType | undefined>();

	const handleCheckout = () => {setShowModal(true)}
	const handleCloseModal = () => {
		setShowModal(false);
	};

	const handleSuccessfulTransaction = (response: string) => {
		handleCloseModal();
		setApiStatus({
			status: "success",
			message: response,
		});
	};
	
	const handlePaypalError = (response: string) => {
		setApiStatus({
			status: "error",
			message: response,
		});
	};

	const tableHeaders = [
		"Product",
		"Product Name",
		"Price",
		"Quantity",
		" ",
		"Total",
	];

	const totalCost = state.cart.reduce((accumulator, currentItem) => {
		const price = currentItem.price;
		return accumulator + price * currentItem.quantity;
	}, 0);

	return (
		<section className="max-w-[90dvw] mx-auto">
			{apiStatus !== undefined && (
				<AlertBar
					isOpen={apiStatus !== undefined}
					status={apiStatus?.status as AlertBarStatusType}
					message={apiStatus?.message || ""}
					timeOut={6000}
					onCloseComplete={() => {
						setApiStatus(undefined);
					}}
				/>
			)}
			{state.cart.length > 0 ? (
				<div>
					<h1 className="text-center text-3xl md:text-5xl leading-[44px] mb-3">
						Cart
					</h1>

					<p className="text-center mb-10 text-sm">
						{state.cart.length} {state.cart.length > 1 ? "items" : "item"} in
						cart
					</p>

					<div className="mb-20">
						<table className="hidden md:table w-full text-left">
							<thead className="[&>th]:font-light [&>tr>th]:text-sm [&>tr>th]:text-white [&>tr>th:nth-child(6)]:text-right border-b border-mustard-orange border-solid mb-4">
								<tr>
									{tableHeaders.map((header) => (
										<th key={header}>
											<p className="mb-5">{header}</p>
										</th>
									))}
								</tr>
							</thead>

							<tbody>
								{state.cart.map((item, i: number) => (
									<CartItem
										key={`product-${item.id}-key-${i + 1}`}
										productData={item}
									/>
								))}
							</tbody>
						</table>

						<div className="mt-5 block md:hidden">
							{state.cart.map((item, i: number) => (
								<CartItemMobile
									key={`product-mobile-${item.id}-key-${i + 1}`}
									productData={item}
								/>
							))}
						</div>

						<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between justify-start items-start sm:gap-0 gap-2 mb-8">
							<p className="w-full text-2xl text-left font-light">TOTAL</p>
							<div className="flex items-center gap-1">
								<h4 className="w-full text-xl sm:text-3xl sm:text-right text-left font-bold">
									${totalCost.toLocaleString()}
								</h4>
							</div>
						</div>

						<button
							type="button"
							className="bg-mustard-orange text-white rounded-md text-sm md:text-lg px-7 py-3"
							onClick={handleCheckout}
						>
							Complete Order
						</button>
					</div>
				</div>
			) : (
				<div className="flex flex-col items-center justify-center gap-3 min-h-[calc(100dvh-202px)]">
					<h3 className="font-semibold text-2xl">Your Cart is empty</h3>
					<Link to={"/products"} className="underline">
						Continue Shopping
					</Link>
				</div>
			)}

			<Modal isOpen={showModal} onClose={handleCloseModal} title="Checkout">
				<PayPalCard
					payableAmount={totalCost.toLocaleString()}
					onTransactionSuccessful={(response) =>
						handleSuccessfulTransaction(response)
					}
					onError={handlePaypalError}
				/>
			</Modal>
		</section>
	);
};

export default Cartpage;
