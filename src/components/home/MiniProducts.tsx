import SectionBadge from "@components/app/SectionBadge";
import ProductCard from "@components/products/ProductCard";
import { useGetAllProducts } from "@api/hooks";
import { ProductType } from "types/index";
import Loader from "@components/app/Loader";

const MiniProducts = () => {
	const { data, isError, isLoading } = useGetAllProducts();

  return (
		<div className="mb-8 md:mb-16">
			<SectionBadge text="More Products" textColor="text-mustard-orange" />

			<div className="p-3">
				{isLoading ? (
					<Loader text="Loading products" />
				) : isError ? (
					<p className="text-center text-red-500 font-semibold text-lg">
						An error occured while loading products
					</p>
				) : null}
			</div>

			{!isLoading && !isError && data && (
				<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 sm:gap-4 sm:gap-y-10 mt-5 mb-8 md:mb-24">
					{data.slice(0, 12).map((product: ProductType) => (
						<ProductCard key={product.id} {...product} />
					))}
				</div>
			)}
		</div>
	);
}

export default MiniProducts
