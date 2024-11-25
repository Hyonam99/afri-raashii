import { useGetAllProducts } from "@api/hooks";
import Loader from "@components/app/Loader";
import SectionBadge from "@components/app/SectionBadge";
import ProductBanner from "@components/products/Banner";
import ProductCard from "@components/products/ProductCard";
import { ProductType } from "types/index";

const ProductsPage = () => {
	const { data, isError, isLoading } = useGetAllProducts();

	return (
		<section className="max-w-[90dvw] mx-auto">
			<ProductBanner />

			<SectionBadge text="Shop Products" textColor="text-mustard-orange" />

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
					{data.map((product: ProductType) => (
						<ProductCard key={product.id} {...product} />
					))}
				</div>
			)}
		</section>
	);
};

export default ProductsPage;
