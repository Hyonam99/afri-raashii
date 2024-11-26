import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import Loader from "./Loader";
import { useCart } from "@context/cart/CartContext";

interface PaypalCardProps {
	payableAmount: string;
	onTransactionSuccessful: (response: string) => void;
	onError: (response: string) => void;
}

const PayPalCard = (props: PaypalCardProps) => {
	const { payableAmount, onTransactionSuccessful, onError } = props;
	const [{ isPending, isRejected }] = usePayPalScriptReducer();
	const { dispatch } = useCart();

	const createPaymentOrder = (_: any, actions: any) => {
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
	};

	const approvePayment = async (_: any, actions: any) => {
		try {
			if (!actions.order) {
				console.error("Order object is undefined.");
				return;
			}
			const details = await actions.order.capture();

			dispatch({ type: "CLEAR" });
			onTransactionSuccessful(
				`Thank you ${details?.payer?.name?.given_name || details.payment_source?.paypal
				} for your patronage`
			);
		} catch (error) {
			onError(`Error during PayPal transaction: ${error} `);
		}
	};

	const handlePaymentError = (error: any) => {
		onError(`PayPal Checkout Error: ${error} `);
	};

	return (
		<>
			{isPending ? (
				<div className="text-black">
					<Loader text="Loading Paypal Payment" />
				</div>
			) : (
				<PayPalButtons
					createOrder={createPaymentOrder}
					onApprove={approvePayment}
					onError={handlePaymentError}
				/>
			)}

			{isRejected && (
				<p className="text-black">unable to load Paypal payment</p>
			)}
		</>
	);
};

export default PayPalCard;
