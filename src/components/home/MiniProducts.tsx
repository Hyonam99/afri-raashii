import SectionBadge from "@components/app/SectionBadge";
import ProductCard from "@components/products/ProductCard";

const MiniProducts = () => {
  return (
		<div className="mb-8 md:mb-16">
			<SectionBadge text="More Products" textColor="text-mustard-orange" />

			<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 sm:gap-7 sm:[&>div]:h-[400px] mt-5">
				<ProductCard
					imageUrl="/static-images/shrubs-2.jpg"
					productName="Protein"
					price={200}
					category="Grain"
				/>
				<ProductCard
					imageUrl="/static-images/shrubs-2.jpg"
					productName="Wheat"
					price={200}
					category="Grain"
				/>
				<ProductCard
					imageUrl="/static-images/shrubs-2.jpg"
					productName="Wheat"
					price={200}
					category="Grain"
				/>
				<ProductCard
					imageUrl="/static-images/shrubs-2.jpg"
					productName="Wheat"
					price={200}
					category="Grain"
				/>
			</div>
		</div>
	);
}

export default MiniProducts
