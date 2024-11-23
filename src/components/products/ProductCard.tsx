import { FaPlus } from "react-icons/fa6";
export interface ProductCardProps {
	imageUrl: string;
	productName: string;
	price: number;
	category: string;
	// onLoadComplete: () => void;
}

const ProductCard = (props: ProductCardProps) => {
	const { imageUrl, productName, price, category } = props;

	return (
		<div
			className="w-full h-full flex flex-col justify-between gap-2 md:gap-0 relative [&>div>img]:hover:brightness-[.5]
			"
		>
			<div className="relative group w-full h-full overflow-clip">
				<img
					src={imageUrl}
					alt="product image"
					className="mb-2 relative w-full h-full object-cover object-center rounded-lg"
				/>
				<div className="absolute text-white top-0 w-full h-full flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
					<p className="text-center">{productName}</p>
				</div>
			</div>

			<small className="text-[#fbf7cb] italic text-xs">{category}</small>

			<div className="flex items-center justify-between mb-[14px]">
				<p className="w-3/5 text-base md:text-lg font-light text-nowrap whitespace-nowrap text-ellipsis overflow-hidden">
					{productName}
				</p>
				<div className="bg-purple-accent text-lg text-center text-white font-bold px-5 py-1 w-fit rounded-full flex items-center m-0">
					${price}
				</div>
			</div>

			<button
				type="button"
				className="w-full flex items-center justify-between gap-2 border border-white border-solid px-7 py-3 text-xs font-normal"
			>
				ADD TO CART <FaPlus size={18} />
			</button>
		</div>
	);
};

export default ProductCard;
