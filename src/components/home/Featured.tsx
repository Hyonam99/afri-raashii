import SectionBadge from "@components/app/SectionBadge";
import ProductCard from "@components/products/ProductCard";

const Featured = () => {
	return (
		<section className="flex items-end gap-10 mb-8 md:mb-24">
			<div className="w-4/12">
				<img
					src="/static-images/shrubs-3.jpg"
					className="rounded-md w-full h-full"
					alt="roots and shrubs"
				/>
			</div>

			<div className="w-8/12 flex flex-col gap-2 h-full">
				<SectionBadge text="Featured" textColor="text-mustard-orange" />
				<h3 className="text-3xl md:text-5xl font-bold mb-4">Roots & Shrubs</h3>
				<p className="mb-10">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab illum
					exercitationem dolorem ex labore. Id quam ducimus incidunt distinctio
					fuga amet voluptatem adipisci ex soluta hic corporis, tenetur nemo
					consectetur eligendi, libero accusantium iure aut dignissimos odit
					voluptate laborum maxime?
				</p>

				<div className="grid grid-cols-3 gap-7">
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
				</div>
			</div>
		</section>
	);
};

export default Featured;
