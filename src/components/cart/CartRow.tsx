import { PiPlusCircleThin, PiMinusCircleThin } from "react-icons/pi";
import { IoTrashSharp } from "react-icons/io5";
import { useCart } from "@context/cart/CartContext";
import { CartItemType } from "types/index";

interface ItemProps {
	productData: CartItemType;
}

const CartItem = ({ productData }: ItemProps) => {
	const { dispatch } = useCart();

	const increaseQuantity = () => {
		dispatch({
			type: "INCREASE",
			payload: productData?.id as string,
		});
	};

	const decreaseQuantity = () => {
		dispatch({
			type: "DECREASE",
			payload: productData?.id as string,
		});
	};

	const deleteItem = () => {
		dispatch({
			type: "DELETE_CART_ITEM",
			payload: productData?.id as string,
		});
	};
	return (
		<tr className="[&>td]:text-xl [&>td:nth-child(6)]:text-right">
			<td className="">
				<img
					alt="Product Image"
					src={productData?.productImage}
					className="w-[103px] h-[100px] object-cover my-5"
				/>
			</td>

			<td className="">
				<div className="mb-10">
					<h4 className="font-bold">{productData?.name}</h4>
					<p className="text-sm">{productData?.category}</p>
				</div>
			</td>

			<td>
				<div className="mb-10">
					<h4 className="font-bold">
						${Number(productData?.price).toLocaleString()}
					</h4>
				</div>
			</td>

			<td>
				<div className="flex items-center justify-start gap-1 text-white mb-10">
					<button type="button" onClick={decreaseQuantity}>
						<PiMinusCircleThin className="text-[34px] m-0" color="#B3B0B0" />
					</button>
					<p className="text-[24px] text-[#B3B0B0]">{productData?.quantity}</p>
					<button type="button" onClick={increaseQuantity}>
						<PiPlusCircleThin className="text-[34px]" color="#B3B0B0" />
					</button>
				</div>
			</td>

			<td>
				<button className="mb-10" onClick={deleteItem}>
					<IoTrashSharp color="#b91c1c" size={21} />
				</button>
			</td>

			<td>
				<div className="mb-10">
					<h4 className="font-bold">
						${(productData?.quantity * productData?.price).toLocaleString()}
					</h4>
				</div>
			</td>
		</tr>
	);
};

export default CartItem;

export const CartItemMobile = ({ productData }: ItemProps) => {
	const { dispatch } = useCart();

	const increaseQuantity = () => {
		dispatch({
			type: "INCREASE",
			payload: productData?.id as string,
		});
	};

	const decreaseQuantity = () => {
		dispatch({
			type: "DECREASE",
			payload: productData?.id as string,
		});
	};

	const deleteItem = () => {
		dispatch({
			type: "DELETE_CART_ITEM",
			payload: productData?.id as string,
		});
	};

	return (
		<div className="w-full flex flex-col sm:flex-row items-start gap-7 sm:gap-10">
			<div className="">
				<img
					alt="Product Image"
					src={productData?.productImage as string}
					className="w-full sm:w-[167px] h-full sm:h-[167px] object-cover mb-2 sm:mb-10"
				/>
			</div>

			<div className="w-full flex items-end justify-between mb-10">
				<div className="flex flex-col items-start justify-between h-[167px]">
					<h4 className="font-bold">{productData?.name}</h4>
					<p>{productData?.category}</p>

					<div className="flex items-center justify-start gap-1 text-white">
						<button type="button" onClick={decreaseQuantity}>
							<PiMinusCircleThin className="text-2xl m-0" color="#B3B0B0" />
						</button>
						<p className="text-sm text-[#B3B0B0]">{productData?.quantity}</p>
						<button type="button" onClick={increaseQuantity}>
							<PiPlusCircleThin className="text-2xl" color="#B3B0B0" />
						</button>
					</div>

					<h4 className="font-bold text-xl">
						$ {Number(productData?.price).toLocaleString()}
					</h4>
				</div>

				<div className="flex flex-col items-end justify-between h-[167px]">
					<button className="mb-10" onClick={deleteItem}>
						<IoTrashSharp color="#b91c1c" size={21} />
					</button>
					<h4 className="font-bold text-xl">
						${(productData?.quantity * productData?.price).toLocaleString()}
					</h4>
				</div>
			</div>
		</div>
	);
};
