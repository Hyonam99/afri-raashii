import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

const PayPalCard = ({ payableAmount }: { payableAmount: string }) => {
	const [{ isPending, isRejected }] = usePayPalScriptReducer();

	return (
		<>
			{isPending ? (
				<p className="text-black">Loading Paypal Payment</p>
			) : (
				<PayPalButtons
					createOrder={(_, actions) => {
						return actions.order.create({
							intent: "CAPTURE",
							purchase_units: [
								{
									description: "Afri-Raashii checkout",
									amount: {
										currency_code: "USD",
										value: payableAmount,
									},
								},
							],
						});
					}}
					onApprove={async (_, actions) => {
						try {
							if (!actions.order) {
								console.error("Order object is undefined.");
								return;
							}
							const details = await actions.order.capture();

							alert(
								`Transaction completed by ${
									details?.payer?.name?.given_name ||
									details.payment_source?.paypal
								}`
							);
						} catch (error) {
							console.error("Error during PayPal transaction:", error);
						}
					}}
					onError={(err) => {
						console.error("PayPal Checkout Error:", err);
					}}
				/>
			)}

			{isRejected && (
				<p className="text-black">unable to load Paypal payment</p>
			)}
		</>
	);
};

export default PayPalCard;
