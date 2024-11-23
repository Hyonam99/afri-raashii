import SectionBadge from "@components/app/SectionBadge";
import ProductCard from "@components/products/ProductCard";

const MiniProducts = () => {
  return (
		<div className="mb-8 md:mb-16">
			<SectionBadge text="More Products" textColor="text-mustard-orange" />

			<div className="grid grid-cols-4 gap-7 [&>div]:h-[400px] mt-5">
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
